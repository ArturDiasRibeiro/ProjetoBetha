package com.projetobetha.dev.dto;

//Coded by: Artur Dias
import com.projetobetha.dev.domain.Equipamento;
import java.io.Serializable;
import java.util.List;

public class OrdemDeServicoAllDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private Integer ordemId;
    private String nome;
    private List<Equipamento> equipamento;
    private String status;

    public OrdemDeServicoAllDTO() {
    }

    public OrdemDeServicoAllDTO(Integer id, String cli, String statusOrdem) {
        ordemId = id;
        nome = cli;
        status = statusOrdem;
    }

    public Integer getOrdemId() {
        return ordemId;
    }

    public void setOrdemId(Integer ordemId) {
        this.ordemId = ordemId;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public List<Equipamento> getEquipamento() {
        return equipamento;
    }

    public void setEquipamento(List<Equipamento> equipamento) {
        this.equipamento = equipamento;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

}
