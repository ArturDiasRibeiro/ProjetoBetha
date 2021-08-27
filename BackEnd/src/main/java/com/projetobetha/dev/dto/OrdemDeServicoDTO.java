package com.projetobetha.dev.dto;

//Coded by: Artur Dias
import com.projetobetha.dev.domain.Equipamento;
import com.projetobetha.dev.domain.enums.StatusDaOrdem;
import java.io.Serializable;
import java.util.List;

public class OrdemDeServicoDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private Integer clienteId;
    private List<Equipamento> equipamentos;
    private StatusDaOrdem status;
    private double valor;

    public OrdemDeServicoDTO() {
    }

    public OrdemDeServicoDTO(Integer clienteId, StatusDaOrdem status, double valor) {
        this.clienteId = clienteId;
        this.status = status;
        this.valor = valor;
    }

    public Integer getClienteId() {
        return clienteId;
    }

    public void setClienteId(Integer clienteId) {
        this.clienteId = clienteId;
    }

    public List<Equipamento> getEquipamentos() {
        return equipamentos;
    }

    public void setEquipamentos(List<Equipamento> equipamentos) {
        this.equipamentos = equipamentos;
    }

    public StatusDaOrdem getStatus() {
        return status;
    }

    public void setStatus(StatusDaOrdem status) {
        this.status = status;
    }

    public double getValor() {
        return valor;
    }

    public void setValor(double valor) {
        this.valor = valor;
    }

}
