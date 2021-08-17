package com.projetobetha.dev.resources;

//Coded by: Artur Dias
import com.projetobetha.dev.domain.Equipamento;
import com.projetobetha.dev.dto.EquipamentoDTO;

import com.projetobetha.dev.services.EquipamentoService;
import java.net.URI;
import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
@RequestMapping(value = "/equipamentos")
public class EquipamentoResource {

    @Autowired
    private EquipamentoService equipamentoService;

    @GetMapping
    public ResponseEntity<List<Equipamento>> findAll() {
        List<Equipamento> list = equipamentoService.findAll();
        return ResponseEntity.ok().body(list);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<?> find(@PathVariable Integer id) {

        Equipamento obj = equipamentoService.find(id);
        return ResponseEntity.ok().body(obj);
    }

    //@PreAuthorize("hasAnyRole('ATENDENTE','ADMIN')")
    @PostMapping
    public ResponseEntity<Void> insert(@Valid @RequestBody Equipamento obj) {
        obj = equipamentoService.insert(obj);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(obj.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }

    //@PreAuthorize("hasAnyRole('TECNICO','ADMIN')")
    @PutMapping(value = "/{id}")
    public ResponseEntity<Equipamento> update(@RequestBody Equipamento obj, @PathVariable Integer id) {
        obj = equipamentoService.update(obj, id);
        return ResponseEntity.noContent().build();
    }
    
     //@PreAuthorize("hasAnyRole('TECNICO','ADMIN')")
    @PostMapping(value = "/uploadfotos/{id}")
    public ResponseEntity<Void> uploadFotosEquipamento(@RequestParam(name = "file") MultipartFile file, @PathVariable Integer id) {
        URI uri = equipamentoService.uploadFotosEquipamento(file, id);
        return ResponseEntity.created(uri).build();
    }

    //@PreAuthorize("hasAnyRole('ADMIN')")
    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        equipamentoService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
