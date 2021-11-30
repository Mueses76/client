import React, { useState, useEffect } from "react";
import { Row, Col, Card, Button, Rate, notification } from "antd";
import { getLibroDataUdemyApi } from "../../../../api/libro";  // ojo revisar esta linea

import "./LibrosList.scss";

export default function LibrosList(props) {
  const { libros } = props;

  return (
    <div className="libros-list">
      <Row>
        {libros.map(libro => (
          <Col key={libro._id} md={8} className="libros-list__libro">
            <Libro libro={libro} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

function Libro(props) {
  const { libro } = props;
  const [libroInfo, setLibroInfo] = useState({});
  const [urlLibro, setUrlLibro] = useState("");
  const { Meta } = Card;

  useEffect(() => {
    getLibroDataUdemyApi(libro.idLibro)
      .then(response => {
        if (response?.code !== 200) {
          notification["warning"]({
            message: response.message
          });
        } else {
          setLibroInfo(response.data);
          mountUrl(response.data.url);
        }
      })
      .catch(() => {
        notification["error"]({
          message: "Error del servidor, inténtelo más tarde."
        });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [libro]);

  const mountUrl = url => {
    if (!libro.link) {
      const baseUrl = `https://www.udemy.com${url}`; // ojo revisar aquiiii
      const finalUrl =
        baseUrl + (libro.descuento ? `?descuentoCode=${libro.descuento}` : "");
      setUrlLibro(finalUrl);
    } else {
      setUrlLibro(libro.link);
    }
  };

  return (
    <a href={urlLibro} target="_blank" rel="noopener noreferrer">
      <Card
        cover={<img src={libroInfo.image_480x270} alt={libroInfo.title} />}
      >
        <Meta title={libroInfo.title} description={libroInfo.headline} />
        <Button>Ver el libro</Button>
        <div className="libros-list__libro-footer">
          <span>{libro.price ? `${libro.price} COP` : libroInfo.price}</span>
          <div>
            <Rate disabled defaultValue={5} />
          </div>
        </div>
      </Card>
    </a>
  );
}
