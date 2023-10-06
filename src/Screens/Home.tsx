import React from "react";
import MainNavbar from "../Components/Navbar/Navbar";
import Header from "../Components/Home/Header";
import CardBike from "../Components/Home/CardBike";
import Search from "../Components/Home/Search";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TeamMembers from "../Components/Home/TeamMembers";
import ContactSection from "../Components/Home/ContactSection";

const Home: React.FC = () => {
  const customColStyle: React.CSSProperties = {
    marginBottom: "10px",
  };

  const cardStyle: React.CSSProperties = {
    marginTop: "15px",
    marginBottom: "15px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#f0f2f5", // Define o fundo como a cor da página Home
  };

  const dividerStyle: React.CSSProperties = {
    margin: "0px 0",
    borderBottom: "3px solid rgba(0, 0, 0, 0.7)",
    backgroundColor: "#f0f2f5", // Define o fundo como a cor da página Home
  };

  const contactSectionStyle: React.CSSProperties = {
    marginTop: "2cm", // Adicione um espaço superior de 2cm
    backgroundColor: "#f0f2f5", // Define o fundo como a cor da página Home
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f0f2f5" }}>
      <MainNavbar />

      <Container fluid className="custom-container">
        <Header />
        <Search />
        <Row className="justify-content-center">
          {[...Array(8)].map((_, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} style={customColStyle}>
              <div style={cardStyle} className="text-center">
                <CardBike />
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* TeamMembers */}
      <TeamMembers />

      {/* Divisão visual discreta entre TeamMembers e ContactSection */}
      <div style={dividerStyle}></div>

      {/* ContactSection com espaço superior de 2cm */}
      <div style={{ ...contactSectionStyle }}>
        <ContactSection />
      </div>
    </div>
  );
};

export default Home;
