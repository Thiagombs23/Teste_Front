import React from "react";
import MainNavbar from "../Components/Navbar/Navbar";
import Header from "../Components/Home/Header";
import CardBike from "../Components/Home/CardBike";
import Search from "../Components/Home/Search";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TeamMembers from "../Components/Home/TeamMembers";

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
      <TeamMembers />
    </div>
  );
};

export default Home;
