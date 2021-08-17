package com.projetobetha.dev.services;

//@author Artur Dias
import com.projetobetha.dev.domain.OrdemDeServico;
import javax.mail.internet.MimeMessage;
import org.springframework.mail.SimpleMailMessage;

public interface EmailService {

    void sendConfirmationEmail(OrdemDeServico obj);

    void sendEmail(SimpleMailMessage msg);

    void sendConfirmationHtmlEmail(OrdemDeServico obj);

    void sendHtmlEmail(MimeMessage msg);

    void sendConclusionHtmlEmail(OrdemDeServico obj);

}
