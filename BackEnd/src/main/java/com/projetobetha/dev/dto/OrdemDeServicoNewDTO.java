package com.projetobetha.dev.dto;

//Coded by: Artur Dias
import com.projetobetha.dev.domain.Equipamento;
import com.projetobetha.dev.domain.enums.StatusDaOrdem;
import java.io.Serializable;
import java.util.List;

public class OrdemDeServicoNewDTO implements Serializable {

    private static final long serialVersionUID = 1L;
    private Integer clienteId;
    private List<Equipamento> equipamento;
    private double valor;
    private StatusDaOrdem status;

    public OrdemDeServicoNewDTO() {
    }

    public OrdemDeServicoNewDTO(Integer clienteId, double valor) {
        this.clienteId = clienteId;
        this.valor = valor;

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

    public double getValor() {
        return valor;
    }

    public void setValor(double valor) {
        this.valor = valor;
    }
    
    public StatusDaOrdem getStatus() {
        return status;
    }

    public void setStatus(StatusDaOrdem status) {
        this.status = status;
    }
}
