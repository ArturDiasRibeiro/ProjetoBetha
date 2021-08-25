package com.projetobetha.dev.services;

//Coded by: Artur Dias
import com.projetobetha.dev.domain.OrdemDeServico;
import com.projetobetha.dev.domain.enums.StatusDaOrdem;
import com.projetobetha.dev.dto.OrdemDeServicoDTO;
import com.projetobetha.dev.repositories.OrdemDeServicoRepository;
import com.projetobetha.dev.services.exceptions.ObjectNotFoundException;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
import com.projetobetha.dev.domain.Cliente;
import com.projetobetha.dev.domain.Equipamento;
import com.projetobetha.dev.dto.OrdemDeServicoNewDTO;
import com.projetobetha.dev.repositories.EquipamentoRepository;
import java.net.URI;
import java.util.ArrayList;
import java.util.Arrays;
import org.springframework.web.multipart.MultipartFile;

@Service
public class OrdemDeServicoService {

    @Autowired
    private OrdemDeServicoRepository ordemDeServicoRepository;

    @Autowired
    private EquipamentoRepository equipamentoRepository;

    @Autowired
    private ClienteService clienteService;
    
    @Autowired
    private EquipamentoService equipamentoService;

    @Autowired
    private EmailService emailService;
    
    @Autowired
    private S3Service s3Service;

    //GET BY ID
    public OrdemDeServico find(Integer id) {
        Optional<OrdemDeServico> obj = ordemDeServicoRepository.findById(id);
        if (obj == null || obj.isEmpty()) {
            throw new ObjectNotFoundException("Obejto não encontrado! Id: " + id + ", Tipo: " + OrdemDeServico.class.getTypeName());
        }
        return obj.orElse(null);
    }

    //GET ALL
    public List<OrdemDeServico> findAll() {
        return ordemDeServicoRepository.findAll();
    }

    //POST
    public OrdemDeServico insert(OrdemDeServicoNewDTO objNewDto) {

        Cliente cli = clienteService.find(objNewDto.getClienteId());

        List<Equipamento> equipamentos = objNewDto.getEquipamentos();
        
        OrdemDeServico ordem = new OrdemDeServico(cli, objNewDto.getValor());
        ordemDeServicoRepository.save(ordem);
                
        for (Equipamento eq : equipamentos) {
            eq.setOrdem(ordem);
            equipamentoRepository.save(eq);
        }
        
        ordem.setEquipamentos(equipamentos);
        ordem.setStatus(StatusDaOrdem.PENDENTE);
        return ordemDeServicoRepository.save(ordem);
    }

    //PUT
    public OrdemDeServico update(OrdemDeServicoDTO objDto, Integer id) throws Exception{

        OrdemDeServico obj = find(id);
        
        objDto.setClienteId(obj.getCliente().getId());
        obj.setId(id);
        
        if(objDto.getClienteId()!=null){
        Cliente cli = clienteService.find(objDto.getClienteId());
        obj.setCliente(cli);
        }
        
        if(objDto.getEquipamento()!=null){
        List<Equipamento> equipamentos = objDto.getEquipamento();
        obj.setEquipamentos(equipamentos);
        for (Equipamento eq : equipamentos) {
            equipamentoRepository.save(eq);
        }
        }
        
        if(objDto.getStatus()!=null) {
        obj.setStatus(objDto.getStatus());
        }
        
        if (obj.getStatus().equals(StatusDaOrdem.AGUARDANDOCLIENTE)) {
            emailService.sendConfirmationHtmlEmail(obj);
        }

        if(objDto.getClienteId().equals(null) && objDto.getEquipamento().equals(null) && objDto.getStatus().equals(null)){
            throw new Exception("Alteração inválida, o campos de preenchimento não podem estar vazios!");
        }
        
        return ordemDeServicoRepository.save(obj);
    }
    
    //ORDER STATUS
    public OrdemDeServico updateAprovada(Integer id) {
        OrdemDeServico obj = find(id);
        if (!obj.getStatus().equals(StatusDaOrdem.RECUSADO)) {
            obj.setStatus(StatusDaOrdem.APROVADO);
        } else {
            obj.setStatus(StatusDaOrdem.RECUSADO);
            throw new DataIntegrityViolationException("Você já recusou esta ordem, se desejar alterar, favor entrar em contato com a empresa.");
        }
        return ordemDeServicoRepository.save(obj);
    }

    //ORDER STATUS
    public OrdemDeServico updateReprovada(Integer id) {
        OrdemDeServico obj = find(id);
        if (!obj.getStatus().equals(StatusDaOrdem.APROVADO)) {
            obj.setStatus(StatusDaOrdem.RECUSADO);
        } else {
            obj.setStatus(StatusDaOrdem.APROVADO);
            throw new DataIntegrityViolationException("Você já aprovou esta ordem, se desejar alterar, favor entrar em contato com a empresa.");
        }
        return ordemDeServicoRepository.save(obj);
    }


    //PATCH TO CONCLUDE ORDER
    public OrdemDeServico updateConclusao(OrdemDeServico obj) {
        find(obj.getId());
        if (obj.getStatus().equals(StatusDaOrdem.APROVADO) || obj.getStatus().equals(StatusDaOrdem.CONCLUIDO)) {
            if (obj.getStatus().equals(StatusDaOrdem.CONCLUIDO)) {
                obj.setStatus(StatusDaOrdem.CONCLUIDO);
            } else {
                obj.setStatus(StatusDaOrdem.CONCLUIDO);
                emailService.sendConclusionHtmlEmail(obj);
            }
        } else {
            obj.setStatus(StatusDaOrdem.RECUSADO);
        }
        return ordemDeServicoRepository.save(obj);
    }

    //DELETE BY ID
    public void delete(Integer id) {
        find(id);
        try {
            ordemDeServicoRepository.deleteById(id);
        } catch (DataIntegrityViolationException e) {
            throw new DataIntegrityViolationException("Não é possível excluir uma ordem de serviço que possui um cliente", e);
        }
    }

    public OrdemDeServico newDTO(OrdemDeServicoNewDTO objDto) {
        OrdemDeServico ordem = new OrdemDeServico();
        Cliente cli = clienteService.find(objDto.getClienteId());

        ordem.setCliente(cli);
        ordem.setStatus(StatusDaOrdem.PENDENTE);

        return ordem;
    }
}
