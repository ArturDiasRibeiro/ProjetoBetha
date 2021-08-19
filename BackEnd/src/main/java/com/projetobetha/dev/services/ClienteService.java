package com.projetobetha.dev.services;

//Coded by: Artur Dias
import com.projetobetha.dev.domain.Cliente;
import com.projetobetha.dev.repositories.ClienteRepository;
import com.projetobetha.dev.services.exceptions.ObjectNotFoundException;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

@Service
public class ClienteService {

    @Autowired
    private ClienteRepository clienteRepository;

    public Cliente find(Integer id) {
        Optional<Cliente> obj = clienteRepository.findById(id);
        return obj.orElseThrow(() -> new ObjectNotFoundException(
                "Objeto não encontrado! Id: " + id + ", Tipo: " + Cliente.class.getName()));
    }

    public List<Cliente> findAll() {
        return clienteRepository.findAll();
    }

    public Cliente insert(Cliente obj) throws Exception{
        if(obj.getNome().isBlank() || obj.getEmail().isBlank() || obj.getEndereco().isBlank() || obj.getTelefone().isBlank()){
            throw new Exception("É necessário preencher todos os campos");
        }
        return clienteRepository.save(obj);
    }

    //PUT
    public Cliente update(Cliente obj) throws Exception {
        if(obj.getNome().isBlank() || obj.getEmail().isBlank() || obj.getEndereco().isBlank() || obj.getTelefone().isBlank()){
            throw new Exception("É necessário preencher todos os campos");
        }
        find(obj.getId());
        return clienteRepository.save(obj);
    }

    //DELETE BY ID
    public void delete(Integer id) {
        find(id);
        try {
            clienteRepository.deleteById(id);
        } catch (DataIntegrityViolationException e) {
            throw new DataIntegrityViolationException("Não é possível excluir um cliente que possui uma ordem de servico", e);
        }
    }

}
