import React, { useState, useEffect } from "react";
import { Form, Icon, Input, Button, notification } from "antd";
import { getAccessTokenApi } from "../../../../api/auth";
import { addLibroApi, updateLibroApi } from "../../../../api/libro";

import "./AddEditLibroForm.scss";

export default function AddEditLibroForm(props) {
  const { setIsVisibleModal, setReloadLibros, libro } = props;
  const [libroData, setLibroData] = useState({});

  useEffect(() => {
    libro ? setLibroData(libro) : setLibroData({});
  }, [libro]);

  const addLibro = e => {
    e.preventDefault();

    if (!libroData.idLibro) {
      notification["error"]({
        message: "El id del libro es obligatorio"
      });
    } else {
      const accessToken = getAccessTokenApi();

      addLibroApi(accessToken, libroData)
        .then(response => {
          const typeNotification =
            response.code === 200 ? "success" : "warning";
          notification[typeNotification]({
            message: response.message
          });
          setIsVisibleModal(false);
          setReloadLibros(true);
          setLibroData({});
        })
        .catch(() => {
          notification["error"]({
            message: "Error del servidor, intentelo más tarde."
          });
        });
    }
  };

  const updateLibro = e => {
    e.preventDefault();

    const accessToken = getAccessTokenApi();

    updateLibroApi(accessToken, libro._id, libroData)
      .then(response => {
        const typeNotification = response.code === 200 ? "success" : "warning";
        notification[typeNotification]({
          message: response.message
        });
        setIsVisibleModal(false);
        setReloadLibros(true);
        setLibroData({});
      })
      .catch(() => {
        notification["error"]({
          message: "Error del servidor, intentelo más tarde."
        });
      });
  };

  return (
    <div className="add-edit-libro-form">
      <AddEditForm
        libro={libro}
        addLibro={addLibro}
        updateLibro={updateLibro}
        libroData={libroData}
        setLibroData={setLibroData}
      />
    </div>
  );
}

function AddEditForm(props) {
  const { libro, addLibro, updateLibro, libroData, setLibroData } = props;

  return (
    <Form
      className="form-add-edit"
      onSubmit={libro ? updateLibro : addLibro}
    >
      <Form.Item>
        <Input
          prefix={<Icon type="key" />}
          placeholder="ID del libro"
          value={libroData.idLibro}
          onChange={e =>
            setLibroData({ ...libroData, idLibro: e.target.value })
          }
          disabled={libro ? true : false}
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<Icon type="link" />}
          placeholder="Url del libro"
          value={libroData.link}
          onChange={e => setLibroData({ ...libroData, link: e.target.value })}
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<Icon type="gift" />}
          placeholder="Descuento"
          value={libroData.descuento}
          onChange={e =>
            setLibroData({ ...libroData, descuento: e.target.value })
          }
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<Icon type="Pesos CO" />}
          placeholder="Precio del libro"
          value={libroData.price}
          onChange={e =>
            setLibroData({ ...libroData, price: e.target.value })
          }
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="btn-submit">
          {libro ? "Actualizar libro" : "Crear libro"}
        </Button>
      </Form.Item>
    </Form>
  );
}
