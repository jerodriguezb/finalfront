import React, { useState, useEffect } from "react";
import { getPropiedades, delPropiedad, getPropiedadId } from "../helpers/rutaPropiedades";
import ModalPropiedad from "./ModalPropiedad";
import { Table } from "react-bootstrap";
import "../css/tablepropiedades.css";

const TablePropiedades = () => {
  let id_propiedad = "";

  const [propiedades, setPropiedades] = useState({
    data: {},
    loading: true,
  });

  const [propiedad, setPropiedad] = useState({});
  const [show, setShow] = useState(false);

  useEffect(() => {
    consultaPropiedades();
  }, []);

  const consultaPropiedades = (desde) => {
    getPropiedades(desde, 1000).then((datos) => {
      setPropiedades({
        data: datos,
        loading: false,
      });
    });
  };

  const handleClose = () => {
    setShow(false);
    consultaPropiedades();
  };
  const handleShow = () => setShow(true);

  const modificaPropiedad = (id) => {
    id_propiedad = id;

    getPropiedadId(id_propiedad).then((resp) => {
      console.log(resp);
      setPropiedad(resp);

      handleShow();
    });
  };

  const deletePropiedad = (id) => {
    let validar = window.confirm("está seguro que desea borrar la Propiedad?");
    if (validar) {
      delPropiedad(id).then((resp) => {
        consultaPropiedades();
      });
    }
  };

  return (
    <div className="table-container">
      {!propiedades.loading && (
        <>
          <div className="col-12 mt-4"></div>
          <div >
          <Table striped bordered hover className="table-container">
            <thead>
              <tr className="sticky1">
                <th className="sticky2">Codigo</th>
                <th className="tit">Título</th>
                <th className="tit">Estado</th>
                <th className="tit">Tipo</th>
                <th className="tit">Direccion</th>
                <th className="desc">Descripcion</th>
                <th className="bar">Barrio</th>
                <th>Lugar</th>
                <th>Valor</th>
                <th>Sup.Tot.</th>
                <th>Sup.Com.</th>
                <th>Sup.Prop.</th>
                <th>Sup.Cub.</th>
                <th>Sup.S.Cub.</th>     
                <th>Amb.</th>
                <th>Dorm.</th>
                <th>Baño</th>
                <th className="inf">Informacion Adicional</th> 
                <th>Coc.</th>
                <th>Com.</th>
                <th>CCo.</th>
                <th>Pla.</th>
                <th>C.D.</th>
                <th>Dep.</th>
                <th>B.S.</th>
                <th>Lav.</th>
                <th>Liv.</th>
                <th>L.C.</th>
                <th>Esc.</th>
                <th>Toi.</th>
                <th>Bal.</th>
                <th>Bau.</th>
                <th>Jar.</th>
                <th>SUM</th>
                <th>Sol.</th>
                <th>Pat.</th>
                <th>Qui.</th>
                <th>Pil.</th>
                <th>Gal.</th>
                <th>Asa.</th>
                <th>Coc.</th>
                <th>C.C.</th>
                <th>Sui.</th>
                <th>S.E.</th>
                <th>Int.</th>
                <th>Ele.</th>
                <th>Gas</th>
                <th>Agu.</th>
                <th>Clo.</th>
                <th>Cab.</th>
                <th>Seg.</th>
                <th>Exp.</th>
                <th>Act.</th>
                <th>Por.</th>
                <th>Latitud</th>
                <th>Longitud</th>
                <th>Modif/Eliminar</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {propiedades.data.propiedades.map((propiedad) => (
                <tr key={propiedad._id}>
                  <td className="sticky2">{propiedad.CodigoPropiedad}</td>
                  <td className="tit">{propiedad.Titulo}</td>
                  <td className="tit">{propiedad.EstadoPropiedad}</td>
                  <td className="tit">{propiedad.TipoPropiedad}</td>
                  <td className="tit">{propiedad.DireccionFisica}</td>
                  <td className="desc">{propiedad.Descripcion}</td>
                  <td className="bar">{propiedad.Barrio}</td>
                  <td className="bar">{propiedad.Lugar}</td>
                  <td className="val">{propiedad.Valor}</td>
                  <td className="val">{propiedad.SuperficieTotal}</td>
                  <td className="val">{propiedad.SuperficieComun}</td>
                  <td className="val">{propiedad.SuperficiePropia}</td>
                  <td className="val">{propiedad.SuperficieCubierta}</td>
                  <td className="val">{propiedad.SuperficieSemicubierta}</td>
                  <td>{propiedad.Ambientes}</td>
                  <td>{propiedad.Dormitorio}</td>
                  <td>{propiedad.Baño}</td>
                  <td>{propiedad.InformacionAdicional}</td>
                  <td>{propiedad.Cocina && "SI"}</td>
                  <td>{propiedad.Comedor && "SI"}</td>
                  <td>{propiedad.CocinaComedor && "SI"}</td>
                  <td>{propiedad.Placard && "SI"}</td>
                  <td>{propiedad.ComedorDiario && "SI"}</td>
                  <td>{propiedad.Dependencia && "SI"}</td>
                  <td>{propiedad.BañoServicio && "SI"}</td>
                  <td>{propiedad.Lavadero && "SI"}</td>
                  <td>{propiedad.Living && "SI"}</td>
                  <td>{propiedad.LivingComedor && "SI"}</td>
                  <td>{propiedad.Escritorio && "SI"}</td>
                  <td>{propiedad.Toillette && "SI"}</td>
                  <td>{propiedad.Balcon && "SI"}</td>
                  <td>{propiedad.Baulera && "SI"}</td>
                  <td>{propiedad.Jardin && "SI"}</td>
                  <td>{propiedad.SUM && "SI"}</td>
                  <td>{propiedad.Solarium && "SI"}</td>
                  <td>{propiedad.Patio && "SI"}</td>      
                  <td>{propiedad.Quincho && "SI"}</td>
                  <td>{propiedad.Pileta && "SI"}</td>
                  <td>{propiedad.Galeria && "SI"}</td>
                  <td>{propiedad.Asador && "SI"}</td>
                  <td>{propiedad.Cochera && "SI"}</td>
                  <td>{propiedad.CocheraCubierta && "SI"}</td>
                  <td>{propiedad.Suite && "SI"}</td>
                  <td>{propiedad.SalaEstarPlayroom && "SI"}</td>
                  <td>{propiedad.Internet && "SI"}</td>
                  <td>{propiedad.Electricidad && "SI"}</td>
                  <td>{propiedad.Gas && "SI"}</td>
                  <td>{propiedad.Agua && "SI"}</td>
                  <td>{propiedad.Cloacas && "SI"}</td>
                  <td>{propiedad.Cable && "SI"}</td>
                  <td>{propiedad.Seguridad && "SI"}</td>
                  <td>{propiedad.Expensas && "SI"}</td>
                  <td>{propiedad.activo && "SI"}</td>
                  <td>{propiedad.mostrar_portada && "SI"}</td>
                  <td>{propiedad.latitud}</td>
                  <td>{propiedad.longitud}</td>   
                  {/* <td>{usuario.nombre}</td> */}
                  <td>
                    <button id="acepto"
                      className="btn btn-primary"
                      onClick={() => {
                        modificaPropiedad(propiedad._id);
                      }}
                    >
                      <i
                        className="fa fa-pencil-square-o"
                        aria-hidden="true"
                      ></i>
                    </button>
                    <button id="acepto"
                      className="btn btn-danger ml-2"
                      onClick={() => {
                        deletePropiedad(propiedad._id);
                      }}
                    >
                      <i className="fa fa-trash-o" aria-hidden="true"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          </div>
          <ModalPropiedad
            show={show}
            handleClose={handleClose}
            propiedad={propiedad.propiedad}
          />
        </>
      )}
    </div>
  );
};

export default TablePropiedades;
