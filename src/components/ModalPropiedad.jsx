import React from "react";

import { Modal } from "react-bootstrap";
import ModalFormPropiedad from "./ModalFormPropiedad";

const ModalPropiedad = ({ show, handleClose, propiedad }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title><h2>Modificar propiedad</h2></Modal.Title>
      </Modal.Header>
      <ModalFormPropiedad propiedad={propiedad} handleClose={handleClose} />
    </Modal>
  );
};

export default ModalPropiedad;
