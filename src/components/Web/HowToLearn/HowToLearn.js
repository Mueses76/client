import React from "react";
import { Row, Col, Card, Icon } from "antd";

import "./HowToLearn.scss";

export default function HowToLearn() {
  return (
    <Row className="how-to-learn">
      <Col lg={24} className="how-to-learn__title">
        <h2>!Cata-Book  Libros de programacion en la web¡</h2>
        <h3>
          Cada Libro se ha seleccionado para tu aprendizaje, aprende a tu propio ritmo.
        </h3>
      </Col>
    
      <Col lg={4} />
      <Col lg={16}>
        <Row className="row-cards">
          <Col md={8}>
            <CardInfo
              icon= "clock-circle"
              title="Cursos y Clases"
              description="Cursos de entre 10 y 30 horas y cada clase del curso con duración máxima de 15 minutos, faciles de llevar en tu día a día de aprendizaje."
            />
          </Col>
          <Col md={8}>
            <CardInfo
              icon="key"
              title="Acceso 24/7"
              description="Accede a los cursos en cualquier momento, desde cualquier lugar sin importar día y hora."
            />
          </Col>
          <Col md={8}>
            <CardInfo
              icon="message"
              title="Aprendizaje colaboratico"
              description="Aprende de los demás dejando tus dudas para que profesores y compañeros te ayuden."
            />
          </Col>
        </Row>
        <Row className="row-cards">
          <Col md={8}>
            <CardInfo
              icon="user"
              title="Mejora tu perfil"
              description="Aprende y mejora tu perfil para mantenerte informado de actualizaciones."
            />
          </Col>
          <Col md={8}>
            <CardInfo
              icon="dollar"
              title="Precios bajos"
              description="Obtén el curso que necesitas por solo 9.99 y ten acceso a el por tiempo ilimitado y soporte ilimitado."
            />
          </Col>
          <Col md={8}>
            <CardInfo
              icon="check-circle"
              title="Certificador de finalización"
              description="Al completar tu un curso recibirás una certificación que te expedirá Udemy en PDF."
            />
          </Col>
        </Row>
      </Col>
      <Col lg={4} />
    </Row>
  );
}

function CardInfo(props) {
  const { icon, title, description } = props;
  const { Meta } = Card;

  return (
    <Card className="how-to-learn__card">
      <Icon type={icon} />
      <Meta title={title} description={description} />
    </Card>
  );
}

