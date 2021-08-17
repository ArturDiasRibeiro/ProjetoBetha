package com.projetobetha.dev.services;

//Coded by: Artur Dias
import com.projetobetha.dev.domain.Equipamento;
import com.projetobetha.dev.repositories.EquipamentoRepository;
import com.projetobetha.dev.services.exceptions.ObjectNotFoundException;
import java.net.URI;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class EquipamentoService {

    @Autowired
    private EquipamentoRepository equipamentoRepository;
    
    @Autowired
    private S3Service s3Service;

    public Equipamento find(Integer id) {
        Optional<Equipamento> obj = equipamentoRepository.findById(id);
        return obj.orElseThrow(() -> new ObjectNotFoundException(
                "Objeto não encontrado! Id: " + id + ", Tipo: " + Equipamento.class.getName()));
    }

    public List<Equipamento> findAll() {
        return equipamentoRepository.findAll();
    }

    public Equipamento insert(Equipamento obj) {
        obj.setId(null);
        Equipamento eq = new Equipamento(
                obj.getModelo(),
                obj.getMarca(),
                obj.getClassificacaoDoProduto(),
                obj.getAvarias());

        return equipamentoRepository.save(eq);
    }

    //PUT
    public Equipamento update(Equipamento obj, Integer id) {
        
        if(obj.getModelo().isBlank() ||obj.getMarca().isBlank() ||obj.getClassificacaoDoProduto().isBlank() ||obj.getAvarias().isBlank()){
            throw new NullPointerException("Não foi possivel aterar o equipamento, pois há campos vazios ou carácteres inválidos");
        } 
        
        Equipamento eq = find(id);
        obj.setId(id);
        obj.setOrdem(eq.getOrdem());
        
        
        return equipamentoRepository.save(obj);
    }
    
        
    public URI uploadFotosEquipamento(MultipartFile multipartFile, Integer id) {
        URI uri = s3Service.uploadFile(multipartFile, id);
        Equipamento eq = find(id);
        eq.setImagemUrl(uri.toString());
        equipamentoRepository.save(eq);
        return uri;
    }
    

    //DELETE BY ID
    public void delete(Integer id) {
        find(id);
        try {
            equipamentoRepository.deleteById(id);
        } catch (DataIntegrityViolationException e) {
            throw new DataIntegrityViolationException("Não foi possível excluir o equipamento", e);
        }
    }

}
