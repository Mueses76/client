import React from "react";
import { Row, Col, Card, Avatar } from "antd";
import AvatarPersona from "../../../assets/img/jpg/avatar-persona.jpg";

import "./ReviewsLibros.scss";

/**
 * se puede cambiar 35
 */

export default function ReviewsLibros() {
  return (
    <Row className="reviews-libros">
      <Row>
        <Col lg={4} />
        <Col lg={16} className="reviews-libros__title">
          <h2>Parte del equipo 7 del grupo 9 en proyecto de Mision TIC</h2>
        </Col>
        <Col lg={4} />
      </Row>
      <Row>
        <Col lg={4} />
        <Col lg={16}>
          <Row className="row-cards">
            <Col md={8}>
              <CardReview
                name="Jhonatan Marin"
                subtitle="Ciclo 4 Mintic"
                avatar={AvatarPersona}
                review="Lorem ipsum dolor sit amet. Ab omnis quaerat vel quaerat ullam qui quisquam corrupti. Non architecto fugiat aut quaerat ipsa id cumque asperiores sit doloremque architecto qui ullam aspernatur."
              />
            </Col>
            <Col md={8}>
              <CardReview
                name="Michael Kevin Velasquez"
                subtitle="Ciclo 4 Mintic"
                avatar={AvatarPersona}
                review="Lorem ipsum dolor sit amet. Ab omnis quaerat vel quaerat ullam qui quisquam corrupti. Non architecto fugiat aut quaerat ipsa id cumque asperiores sit doloremque architecto qui ullam aspernatur."
              />
            </Col>
            <Col md={8}>
              <CardReview
                name="Hernan Dario Garcia"
                subtitle="Ciclo 4 Mintic"
                avatar={AvatarPersona}
                review="Lorem ipsum dolor sit amet. Ab omnis quaerat vel quaerat ullam qui quisquam corrupti. Non architecto fugiat aut quaerat ipsa id cumque asperiores sit doloremque architecto qui ullam aspernatur."
              />
            </Col>
          </Row>
          <Row className="row-cards">
            <Col md={8}>
              <CardReview
                name="Hernando Mueses"
                subtitle="Ciclo 4 Mintic"
                avatar={AvatarPersona}
                review="Lorem ipsum dolor sit amet. Ab omnis quaerat vel quaerat ullam qui quisquam corrupti. Non architecto fugiat aut quaerat ipsa id cumque asperiores sit doloremque architecto qui ullam aspernatur."
              />
            </Col>
            <Col md={8}>
              <CardReview
                name="Dato ejemplo"
                subtitle="Ciclo 4 Mintic"
                avatar={AvatarPersona}
                review="Lorem ipsum dolor sit amet. Ab omnis quaerat vel quaerat ullam qui quisquam corrupti. Non architecto fugiat aut quaerat ipsa id cumque asperiores sit doloremque architecto qui ullam aspernatur."
              />
            </Col>
            <Col md={8}>
              <CardReview
                name="Dato ejemplo"
                subtitle="Ciclo 4 Mintic"
                avatar={AvatarPersona}
                review="Lorem ipsum dolor sit amet. Ab omnis quaerat vel quaerat ullam qui quisquam corrupti. Non architecto fugiat aut quaerat ipsa id cumque asperiores sit doloremque architecto qui ullam aspernatur."
              />
            </Col>
          </Row>
        </Col>
        <Col lg={4} />
      </Row>
    </Row>
  );
}

function CardReview(props) {
  const { name, subtitle, avatar, review } = props;
  const { Meta } = Card;

  return (
    <Card className="reviews-libros__card">
      <p>{review}</p>
      <Meta
        avatar={<Avatar src={avatar} />}
        title={name}
        description={subtitle}
      />
    </Card>
  );
}
