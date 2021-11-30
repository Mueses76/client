import React from "react";
import { Row, Col, Card, Button } from "antd";
import { Link } from "react-router-dom";
import reactJsHooks from "../../../assets/img/jpg/react-js-hooks.jpg";
import reactNative from "../../../assets/img/jpg/react-native.jpg";
import javaScript from "../../../assets/img/jpg/javascript-es6.jpg";
import wordPress from "../../../assets/img/jpg/wordpress.jpg";
import prestaShop from "../../../assets/img/jpg/prestashop-1-7.jpg";
import cssGrid from "../../../assets/img/jpg/css-grid.jpg";

import "./HomeLibros.scss";

/**
 * Change all link con string
 */

export default function HomeLibros() {
  return (
    <Row className="home-libros">
      <Col lg={24} className="home-libros__title">
        <h2>Comprende y entrenate con este catalogo</h2>
      </Col>
      <Col lg={4} />
      <Col lg={16}>
        <Row className="row-libros">
          <Col md={6}>
            <CardLibros
              image={reactJsHooks}
              title="ASP.NET"
              subtitle="Intro - ASP.NET"
              link="https://drive.google.com/file/d/1VIWCx9dGyGgJPmHnTZJ35AQsXeQkkp4W/view?usp=sharing"
            />
          </Col>
          <Col md={6}>
            <CardLibros
              image={reactNative}
              title="React Native Expo"
              subtitle="Intermedio - React/JavaScript"
              link="https://drive.google.com/file/d/1XYh566jsI_5iQFaUF2h2XKhHrufneQgg/view?usp=sharing"
            />
          </Col>
          <Col md={6}>
            <CardLibros
              image={javaScript}
              title="JavaScript"
              subtitle="Básico - JavaScript"
              link="https://drive.google.com/file/d/13V14InrBXdCX1A1bZzYqofUYLFvVOjyL/view?usp=sharing"
            />
          </Col>
          <Col md={6}>
            <CardLibros
              image={wordPress}
              title="PHP"
              subtitle="Básico - PHP"
              link="https://drive.google.com/file/d/1hPaf6x2-dN7fOWCw-uJD9wYFcl2kfU6y/view?usp=sharing"
            />
          </Col>
        </Row>
        <Row className="row-libros">
          <Col md={6}>
            <CardLibros
              image={prestaShop}
              title="Lenguaje C"
              subtitle="Básico - Lenguaje C"
              link="https://drive.google.com/file/d/1sAZtOMOEep6pdATEDf7K-1Cv81TmJgHv/view?usp=sharing"
            />
          </Col>
          <Col md={6} />
          <Col md={6} />
          <Col md={6}>
            <CardLibros
              image={cssGrid}
              title="Python"
              subtitle="Basico - Python"
              link="https://drive.google.com/file/d/1KiJzoVT6IDF0v2pvXIlVxl_6Irleia5W/view?usp=sharing"
            />
          </Col>
        </Row>
      </Col>
      <Col lg={4} />
      <Col lg={24} className="home-libros__more">
        <Link to="/libros">
          <Button>Ver más</Button>
        </Link>
      </Col>

      <Col lg={4} />
      <Col lg={24} className="home-libros__login">
        <Link to="/Admin/admin.js">
          <Button>login</Button>
        </Link>
      </Col>
    </Row>
  );
}

function CardLibros(props) {
  const { image, title, subtitle, link } = props;
  const { Meta } = Card;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Card
        className="home-libros__card"
        cover={<img src={image} alt={title} />}
        actions={[<Button>VER / DESCARGRA</Button>]}
      >
        <Meta title={title} description={subtitle} />
      </Card>
    </a>
  );
}
