import React from "react";
import MainNavbar from "../Components/Navbar/Navbar";
import Header from "../Components/Home/Header";
import CardBike from "../Components/Home/CardBike";
import Search from "../Components/Home/Search";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  const customColStyle = {
    marginBottom: "10px", // Reduzimos a margem inferior em 10px
  };

  const cardStyle = {
    marginTop: "15px", // Adicionamos uma margem superior para centralizar verticalmente
    marginBottom: "15px", // Adicionamos uma margem inferior para centralizar verticalmente
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f0f2f5" }}>
      <MainNavbar />

      <Container fluid>
        <Header />
        <Search />
        <Row className="justify-content-center">
          {[...Array(8)].map((_, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} style={customColStyle}>
              <div style={cardStyle}> {/* Envolver CardBike com uma div */}
                <CardBike />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
