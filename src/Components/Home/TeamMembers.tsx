import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const TeamMembers: React.FC = () => {
  const memberStyle = {
    transform: 'translateX(30%)', // Mover 30% para a direita
  };

  return (
    <section id="equipe" className="team section-bg">
      <div className="bg-white w-100">
        <Container style={{ margin: '0' }}>
          <div className="section-title" data-aos="fade-up" style={{ marginLeft: '0', marginBottom: '20px' }}>
            <h2>Equipe</h2>
            <p>Conheça a equipe da Terra SoftHouse</p>
          </div>
          <Row className="d-flex justify-content-center align-items-center">
            <Col lg={3} md={3} sm={6} xs={12} className="mb-4" style={memberStyle}>
              <div className="member" data-aos="fade-up" data-aos-delay="100">
                <div className="member-img">
                  <div className="rounded-circle member-image">
                    <Image src="assets/img/team/flavioLinguanotto.jpg" fluid alt="" />
                  </div>
                  <div className="social">
                    <a href=""><i className="bi bi-github"></i></a>
                    <a href=""><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Flavio Linguanotto</h4>
                  <span>Scrum Master</span>
                </div>
              </div>
            </Col>
            <Col lg={3} md={3} sm={6} xs={12} className="mb-4" style={memberStyle}>
              <div className="member" data-aos="fade-up" data-aos-delay="200">
                <div className="member-img">
                  <div className="rounded-circle member-image">
                    <Image src="assets/img/team/thiagoBrito.jpg" fluid alt="" />
                  </div>
                  <div className="social">
                    <a href=""><i className="bi bi-github"></i></a>
                    <a href=""><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Thiago Brito</h4>
                  <span>Dev Team</span>
                </div>
              </div>
            </Col>
            <Col lg={3} md={3} sm={6} xs={12} className="mb-4" style={memberStyle}>
              <div className="member" data-aos="fade-up" data-aos-delay="300">
                <div className="member-img">
                  <div className="rounded-circle member-image">
                    <Image src="assets/img/team/beatriz.jpg" fluid alt="" />
                  </div>
                  <div className="social">
                    <a href=""><i className="bi bi-github"></i></a>
                    <a href=""><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Beatriz</h4>
                  <span>Product Owner</span>
                </div>
              </div>
            </Col>
            <Col lg={3} md={3} sm={6} xs={12} className="mb-4" style={memberStyle}>
              <div className="member" data-aos="fade-up" data-aos-delay="400">
                <div className="member-img">
                  <div className="rounded-circle member-image">
                    <Image src="assets/img/team/igor.jpg" fluid alt="" />
                  </div>
                  <div className="social">
                    <a href=""><i className="bi bi-github"></i></a>
                    <a href=""><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Igor</h4>
                  <span>Dev Team</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default TeamMembers;
