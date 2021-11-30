import React from "react";
import { Row, Col } from "antd";

import "./MainBanner.scss";

export default function MainBanner() {
  return (
    <div className="main-banner">
      <div className="main-banner__dark" />
      <Row>
        <Col lg={4} />
        <Col lg={16}>
          <h2>
            Entrenate con el catalogo <br /> disponible de libros gratuitos y
            forma tu futuro
          </h2>
          <h3>
            El catalogo de libros Cata-Book es un compedio de temas en
            programacion <br />
            los cuales contienen tips y trucos.
          </h3>
        </Col>
        <Col lg={4} />
      </Row>
    </div>
  );
}
