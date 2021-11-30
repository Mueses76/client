import React, { useState, useEffect } from "react";
import { Row, Col, Spin, notification } from "antd";
import { Helmet } from "react-helmet";
import { getLibrosApi } from "../api/libro";
import PresentationLibros from "../components/Web/Libros/PresentationLibros";
import LibrosList from "../components/Web/Libros/LibrosList";

export default function Libros() {
  const [libros, setLibros] = useState(null);

  useEffect(() => {
    getLibrosApi()
      .then(response => {
        if (response?.code !== 200) {
          notification["warning"]({
            message: response.message
          });
        } else {
          setLibros(response.libros);
        }
      })
      .catch(() => {
        notification["error"]({
          message: "Error del servidor intentlo más tarde."
        });
      });
  }, []);

  return (
    <>
      <Helmet>
        <title>Libros | Cata-Book</title>
        <meta
          name="description"
          content="Libros | Web sobre Libros de programación"
          data-react-helmet="true"
        />
      </Helmet>
      <Row>
        <Col md={4} />
        <Col md={16}>
          <PresentationLibros />
          {!libros ? (
            <Spin
              tip="Cargando Libros"
              style={{ textAlign: "center", width: "100%", padding: "20px" }}
            />
          ) : (
            <LibrosList libros={libros} />
          )}
        </Col>
        <Col md={4} />
      </Row>
    </>
  );
}
