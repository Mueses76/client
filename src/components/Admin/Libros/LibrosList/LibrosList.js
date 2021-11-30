import React, { useState, useEffect } from "react";
import { List, Button, Icon, Modal as ModalAntd, notification } from "antd";
import DragSortableList from "react-drag-sortable";
import Modal from "../../../Modal";
import AddEditLibroForm from "../AddEditLibroForm";
import { getAccessTokenApi } from "../../../../api/auth";
import {
  getLibroDataUdemyApi,
  deleteLibroApi,
  updateLibroApi
} from "../../../../api/libro";

import "./LibrosList.scss";

const { confirm } = ModalAntd;

export default function LibrosList(props) {
  const { libros, setReloadLibros } = props;
  const [listLibros, setListLibros] = useState([]);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);

  useEffect(() => {
    const listLibroArray = [];
    libros.forEach(libro => {
      listLibroArray.push({
        content: (
          <Libro
            libro={libro}
            deleteLibro={deleteLibro}
            editLibroModal={editLibroModal}
          />
        )
      });
    });
    setListLibros(listLibroArray);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [libros]);

  const onSort = (sortedList, dropEvent) => {
    const accessToken = getAccessTokenApi();

    sortedList.forEach(item => {
      const { _id } = item.content.props.libro;
      const order = item.rank;
      updateLibroApi(accessToken, _id, { order });
    });
  };

  const addLibroModal = () => {
    setIsVisibleModal(true);
    setModalTitle("Creando nuevo libro");
    setModalContent(
      <AddEditLibroForm
        setIsVisibleModal={setIsVisibleModal}
        setReloadLibros={setReloadLibros}
      />
    );
  };

  const editLibroModal = libro => {
    setIsVisibleModal(true);
    setModalTitle("Actualizando libro");
    setModalContent(
      <AddEditLibroForm
        setIsVisibleModal={setIsVisibleModal}
        setReloadLibros={setReloadLibros}
        libro={libro}
      />
    );
  };

  const deleteLibro = libro => {
    const accesToken = getAccessTokenApi();

    confirm({
      title: "Eliminando libro",
      content: `¿Estas seguro de que quieres eliminar el libro ${libro.idLibro}?`,
      okText: "Eliminar",
      okType: "danger",
      cancelText: "Cancelar",
      onOk() {
        deleteLibroApi(accesToken, libro._id)
          .then(response => {
            const typeNotification =
              response.code === 200 ? "success" : "warning";
            notification[typeNotification]({
              message: response.message
            });
            setReloadLibros(true);
          })
          .catch(() => {
            notification["error"]({
              message: "Error del servidor, intentelo más tarde."
            });
          });
      }
    });
  };

  return (
    <div className="libros-list">
      <div className="libros-list__header">
        <Button type="primary" onClick={addLibroModal}>
          Nuevo libro
        </Button>
      </div>

      <div className="libros-list__items">
        {listLibros.length === 0 && (
          <h2 style={{ textAlign: "center", margin: 0 }}>
            No tienes libros creados
          </h2>
        )}
        <DragSortableList items={listLibros} onSort={onSort} type="vertical" />
      </div>

      <Modal
        title={modalTitle}
        isVisible={isVisibleModal}
        setIsVisible={setIsVisibleModal}
      >
        {modalContent}
      </Modal>
    </div>
  );
}

function Libro(props) {
  const { libro, deleteLibro, editLibroModal } = props;
  const [libroData, setLibroData] = useState(null);

  useEffect(() => {
    getLibroDataUdemyApi(libro.idLibro).then(response => {
      if (response.code !== 200) {
        notification["warning"]({
          message: `El curso con el id ${libro.idLibro} no se ha encontrado.`
        });
      }
      setLibroData(response.data);
    });
  }, [libro]);

  if (!libroData) {
    return null;
  }

  return (
    <List.Item
      actions={[
        <Button type="primary" onClick={() => editLibroModal(libro)}>
          <Icon type="edit" />
        </Button>,
        <Button type="danger" onClick={() => deleteLibro(libro)}>
          <Icon type="delete" />
        </Button>
      ]}
    >
      <img
        src={libroData.image_480x270}
        alt={libroData.title}
        style={{ width: "100px", marginRight: "20px" }}
      />
      <List.Item.Meta
        title={`${libroData.title} | ID: ${libro.idLibro}`}
        description={libroData.headline}
      />
    </List.Item>
  );
}
