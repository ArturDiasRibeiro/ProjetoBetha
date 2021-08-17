package com.projetobetha.dev.services;

//Coded by: Artur Dias
import com.projetobetha.dev.domain.Funcionario;
import com.projetobetha.dev.domain.enums.Perfil;
import com.projetobetha.dev.repositories.FuncionarioRepository;
import java.util.Arrays;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class DBService {
    
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;
    
    @Autowired
    private FuncionarioRepository funcionarioRepository;
    
    public void instantiateTestDatabase() {
        
        Funcionario func = new Funcionario("Artur", "ADMIN@email.com", bCryptPasswordEncoder.encode("123"), Perfil.ADMIN);
        Funcionario func2 = new Funcionario("Maria", "ATENDENTE@email.com", bCryptPasswordEncoder.encode("123"), Perfil.ATENDENTE);
        Funcionario func3 = new Funcionario("João", "TECNICO@email.com", bCryptPasswordEncoder.encode("123"), Perfil.TECNICO);
        funcionarioRepository.saveAll(Arrays.asList(func, func2, func3));
    }
}

//OrdemDeServico orde2 = new OrdemDeServico(Integer.SIZE, cliente, equipamento)
//        OrdemDeServico orde1 = new OrdemDeServico(null, "Rai", "celular");
//        OrdemDeServico orde2 = new OrdemDeServico(null, "Jorge", "celular");
//        OrdemDeServico orde3 = new OrdemDeServico(null, "Pedro", "celular");
//        OrdemDeServico orde4 = new OrdemDeServico(null, "João", "celular");
//        OrdemDeServico orde5 = new OrdemDeServico(null, "Tobias", "celular");
//        OrdemDeServico orde6 = new OrdemDeServico(null, "Ronaldo", "celular");
//        OrdemDeServico orde7 = new OrdemDeServico(null, "Jair", "celular");
//        OrdemDeServico orde8 = new OrdemDeServico(null, "Rodolfo", "celular");
//        OrdemDeServico orde9 = new OrdemDeServico(null, "Robson", "celular");
//        OrdemDeServico orde10 = new OrdemDeServico(null, "Artur", "celular");
//        OrdemDeServico orde11 = new OrdemDeServico(null, "José", "celular");
//        OrdemDeServico orde12 = new OrdemDeServico(null, "Antonio", "celular");
//        OrdemDeServico orde13 = new OrdemDeServico(null, "Rodrigo", "celular");
//        OrdemDeServico orde14 = new OrdemDeServico(null, "Douglas", "celular");
//        OrdemDeServico orde15 = new OrdemDeServico(null, "Thiago", "celular");
//        OrdemDeServico orde16 = new OrdemDeServico(null, "Roberto", "celular");
//        OrdemDeServico orde17 = new OrdemDeServico(null, "Mara", "celular");
//        OrdemDeServico orde18 = new OrdemDeServico(null, "Natalia", "celular");
//        OrdemDeServico orde19 = new OrdemDeServico(null, "Brenda", "celular");
//        OrdemDeServico orde20 = new OrdemDeServico(null, "Ana", "celular");
//        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy HH:mm");
//        OrdemDeServico orde2 = new OrdemDeServico();
//        ordemDeServicoRepository.saveAll(Arrays.asList(orde2, orde1));
//        Cliente cli1 = new Cliente(null, "GamerMen", "GameMen123@Gamer.com", "6969-6969", TipoCliente.PESSOAFISICA, "111.222.333-69", "Rua123Rua321");
//        Cliente cli2 = new Cliente(null, "Bobby", "bobby@bobby.com", "3434-7878", TipoCliente.PESSOAFISICA, "444.555.666-77", "Avenida Rua");
//        clienteRepository.saveAll(Arrays.asList(cli1, cli2));
//        orde1.setCliente(cli1);
//        orde2.setCliente(cli2);
//        ordemDeServicoRepository.saveAll(Arrays.asList(orde2, orde1));
//        Equipamento equi2 = new Equipamento(null, "W22 IP55", "WEG", "Motor Monofásico", "Rotor parou de girar", orde2);
////        OrdemDeServico ord1 = new OrdemDeServico(null, cli2, equi1);
////        OrdemDeServico ord2 = new OrdemDeServico(null, cli2, equi2);
//        orde1.setEquipamento(equi1);
//        orde2.setEquipamento(equi2);
//  
//        ordemDeServicoRepository.saveAll(Arrays.asList(orde2, orde1));
//        cli1.setOrdens(Arrays.asList(orde1));
//        cli2.setOrdens(Arrays.asList(orde2));
//        clienteRepository.saveAll(Arrays.asList(cli1, cli2));

