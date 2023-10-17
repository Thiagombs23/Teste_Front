import React from "react";
import Button from "react-bootstrap/Button";
import COLORS from "../../constant/colors";
import imageHeader from "../../assets/image-header.png";
import { Card } from "react-bootstrap";

const CardBike = () => {
  return (
    <Card style={{ width: "18rem", margin: "10px", border: "1px solid #ddd" }}>
      <Card.Img variant="top" src={imageHeader} />
      <Card.Body
        style={{
          backgroundColor: "white",
          padding: "1rem",
          borderTop: "1px solid #ddd",
        }}
      >
        <Card.Title style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
          Tipo de Bicicleta
        </Card.Title>
        <Card.Text style={{ fontSize: "1rem", color: "#555" }}>
          Descrição
        </Card.Text>
        
      </Card.Body>
    </Card>
  );
};

export default CardBike;
