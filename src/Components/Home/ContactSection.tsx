import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="contact" style={{ backgroundColor: 'white', padding: '20px' }}>
      <Container>
        <Row>
          <Col lg={4} md={6}>
            <div className="contact-about">
              <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>Terra SoftHouse</h3>
              <p>
                A equipe Terra Softhouse é um grupo de talentosos desenvolvedores de software que teve origem na Fatec
                (Faculdade de Tecnologia) durante o curso de Desenvolvimento de Software. A equipe foi formada por
                estudantes apaixonados por tecnologia e programação, que compartilhavam o objetivo de criar soluções
                inovadoras e de alta qualidade no mundo da tecnologia da informação.
              </p>
              <div className="social-links">
                <a href="https://github.com/projetoPDali" className="twitter" style={{ fontSize: '20px' }}>
                  <i className="bi bi-github"></i>
                </a>
              </div>
            </div>
          </Col>

          <Col lg={3} md={6} className="mt-4 mt-md-0">
            <div className="info">
              <div>
                <i className="ri-map-pin-line" style={{ fontSize: '20px' }}></i>
                <p style={{ fontSize: '16px' }}>R: Faria Lima, 155 - Jardim Santa Maria<br />Jacareí-SP 12328-070</p>
              </div>

              <div>
                <i className="ri-mail-send-line" style={{ fontSize: '20px' }}></i>
                <p style={{ fontSize: '16px' }}>pdali.bike@gmail.com</p>
              </div>

              <div>
                <a href="https://wa.me/11982175526">
                  <i className="ri-phone-line" style={{ fontSize: '20px' }}></i>
                  <p style={{ fontSize: '16px' }}>(11) 98217-5526</p>
                </a>
              </div>
            </div>
          </Col>

          <Col lg={5} md={12}>
            <Form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <Form.Group>
                <Form.Control type="text" name="name" id="name" placeholder="Nome" required />
              </Form.Group>
              <Form.Group>
                <Form.Control type="email" name="email" id="email" placeholder="Email" required />
              </Form.Group>
              <Form.Group>
                <Form.Control type="text" name="subject" id="subject" placeholder="Assunto" required />
              </Form.Group>
              <Form.Group>
                <Form.Control as="textarea" name="message" rows={5} placeholder="Mensagem" required />
              </Form.Group>
              <div className="my-3">
                <div className="loading">Carregando...</div>
                <div className="error-message"></div>
                <div className="sent-message" style={{ fontSize: '16px' }}>Sua mensagem foi enviada. Obrigado!</div>
              </div>
              <div className="text-center">
                <Button type="submit" style={{ backgroundColor: 'orange', color: 'white', fontSize: '16px' }}>Enviar</Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactSection;
