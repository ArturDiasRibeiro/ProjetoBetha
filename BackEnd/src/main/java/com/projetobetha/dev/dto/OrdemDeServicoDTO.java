package com.projetobetha.dev.dto;

//Coded by: Artur Dias
import com.projetobetha.dev.domain.Equipamento;
import com.projetobetha.dev.domain.enums.StatusDaOrdem;
import java.io.Serializable;
import java.util.List;

public class OrdemDeServicoDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private Integer clienteId;
    private List<Equipamento> equipamento;
    private StatusDaOrdem status;

    public OrdemDeServicoDTO() {
    }

    public OrdemDeServicoDTO(Integer clienteId, StatusDaOrdem status) {
        this.clienteId = clienteId;
        this.status = status;
    }

    public Integer getClienteId() {
        return clienteId;
    }

    public void setClienteId(Integer clienteId) {
        this.clienteId = clienteId;
    }

    public List<Equipamento> getEquipamento() {
        return equipamento;
    }

    public void setEquipamento(List<Equipamento> equipamento) {
        this.equipamento = equipamento;
    }

    public StatusDaOrdem getStatus() {
        return status;
    }

    public void setStatus(StatusDaOrdem status) {
        this.status = status;
    }

}
