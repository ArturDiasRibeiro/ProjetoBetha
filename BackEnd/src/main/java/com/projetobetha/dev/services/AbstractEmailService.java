package com.projetobetha.dev.services;

//Coded by: Artur Dias
import com.projetobetha.dev.domain.Equipamento;
import com.projetobetha.dev.domain.OrdemDeServico;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

public abstract class AbstractEmailService implements EmailService {

    @Value("${default.recipient}")
    private String recipient;
    @Value("${default.sender}")
    private String sender;

    @Autowired
    private TemplateEngine templateEngine;

    @Autowired
    private JavaMailSender javaMailSender;

    @Override
    public void sendConfirmationEmail(OrdemDeServico obj) {
        SimpleMailMessage sm = prepareSimpleMailMessageFromOrdemDeServico(obj);
        sendEmail(sm);
    }

    @Override
    public void sendConfirmationHtmlEmail(OrdemDeServico obj) {
        try {
            MimeMessage mm = prepareMimeMessageFromOrdemDeServico(obj);
            sendHtmlEmail(mm);
        } catch (MessagingException ex) {
            sendConfirmationEmail(obj);
        }
    }

    @Override
    public void sendConclusionHtmlEmail(OrdemDeServico obj) {
        try {
            MimeMessage mm = prepareMimeMessageConclusionFromOrdemDeServico(obj);
            sendHtmlEmail(mm);
        } catch (MessagingException ex) {
            sendConfirmationEmail(obj);
        }
    }

    protected SimpleMailMessage prepareSimpleMailMessageFromOrdemDeServico(OrdemDeServico obj) {
        SimpleMailMessage sm = new SimpleMailMessage();
        sm.setTo(recipient);  //Later it will be obj.getCliente().getEmail()
        sm.setFrom(sender);
        sm.setSubject("Confirme sua Ordem de Serviço! Código: " + obj.getId());
        sm.setSentDate(new Date(System.currentTimeMillis()));
        sm.setText(obj.toString());
        return sm;
    }

    protected String htmlFromTemplateOrdemDeServico(OrdemDeServico obj) {
        
        //Envio de Imagem no Email, Não está funcionando
        Context context = new Context();
        context.setVariable("ordemdeservico", obj);

        List<Integer> listIdEq = new ArrayList<>();
        List<String> listImagemEq = new ArrayList<>();

        for (Equipamento equipamento : obj.getEquipamentos()) {
            listImagemEq.add("https://projeto-betha.s3.sa-east-1.amazonaws.com/fotoavaria/" + equipamento.getId() + "\n");
        }

        for (int i=0; i<=listImagemEq.size(); i++) {
            context.setVariable("urlFoto"+i, listImagemEq.get(i));
        }

        context.setVariable("listIdEq", listIdEq);
        context.setVariable("listImagemEq", listImagemEq);

        System.out.println("\n\n/////////////////// \n " + listImagemEq + "\n//////////\n\n\n");

        context.setVariable("url", "http://localhost:8080/ordemdeservicos/ordemaprovada/" + obj.getId());
        context.setVariable("url2", "http://localhost:8080/ordemdeservicos/ordemrecusada/" + obj.getId());

        System.out.println(templateEngine.process("email/confirmarOrdemDeServico", context));
        return templateEngine.process("email/confirmarOrdemDeServico", context);
    }

    protected MimeMessage prepareMimeMessageFromOrdemDeServico(OrdemDeServico obj) throws MessagingException {
        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        MimeMessageHelper mmh = new MimeMessageHelper(mimeMessage, true);
        mmh.setTo(recipient); //Later it will be obj.getCliente().getEmail()
        mmh.setFrom(sender);
        mmh.setSubject("Confirme sua Ordem de Serviço! Código: " + obj.getId());
        mmh.setSentDate(new Date(System.currentTimeMillis()));
        mmh.setText(htmlFromTemplateOrdemDeServico(obj), true);
        return mimeMessage;
    }

    protected String htmlConclusionOrderFromTemplateOrdemDeServico(OrdemDeServico obj) {
        Context context = new Context();
        context.setVariable("ordemdeservico", obj);
        System.out.println(templateEngine.process("email/finalizadaOrdemDeServico", context));
        return templateEngine.process("email/finalizadaOrdemDeServico", context);
    }

    protected MimeMessage prepareMimeMessageConclusionFromOrdemDeServico(OrdemDeServico obj) throws MessagingException {
        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        MimeMessageHelper mmh = new MimeMessageHelper(mimeMessage, true);
        mmh.setTo(recipient); //Later it will be obj.getCliente().getEmail()
        mmh.setFrom(sender);
        mmh.setSubject("Confirme sua Ordem de Serviço! Código: " + obj.getId());
        mmh.setSentDate(new Date(System.currentTimeMillis()));
        mmh.setText(htmlConclusionOrderFromTemplateOrdemDeServico(obj), true);
        return mimeMessage;
    }
}
