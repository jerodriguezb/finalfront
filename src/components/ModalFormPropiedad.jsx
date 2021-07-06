import React, { useState } from "react";
import { modifPropiedad } from "../helpers/rutaPropiedades";
import { Modal, Button } from "react-bootstrap";

const ModalFormPropiedad = ({ propiedad, handleClose }) => {
  const id = JSON.parse(localStorage.getItem("id"));
  const [formValues, setFormValues] = useState({
    CodigoPropiedad: propiedad.CodigoPropiedad,
    Titulo: propiedad.Titulo,
    EstadoPropiedad:propiedad.EstadoPropiedad, 
    TipoPropiedad:propiedad.TipoPropiedad,
    DireccionFisica:propiedad.DireccionFisica,
    Descripcion:propiedad.Descripcion,
    Barrio:propiedad.Barrio,
    Lugar:propiedad.Lugar,
    Valor:propiedad.Valor,
    SuperficieTotal:propiedad.SuperficieTotal,
    SuperficieComun:propiedad.SuperficieComun,
    SuperficiePropia:propiedad.SuperficiePropia,
    SuperficieCubierta:propiedad.SuperficieCubierta,
    SuperficieSemiCubierta:propiedad.SuperficieSemiCubierta,
    Ambientes:propiedad.Ambientes,
    Dormitorio:propiedad.Dormitorio,
    Baño:propiedad.Baño,
    Cocina:propiedad.Cocina,
    Comedor:propiedad.Comedor,
    CocinaComedor:propiedad.CocinaComedor,
    Placard:propiedad.Placard,
    ComedorDiario:propiedad.ComedorDiario,
    Dependencia:propiedad.Dependencia,
    BañoServicio:propiedad.BañoServicio,
    Lavadero:propiedad.Lavadero,
    Living:propiedad.Living,
    LivingComedor:propiedad.LivingComedor,
    Escritorio:propiedad.Escritorio,
    Toillette:propiedad.Toillette,
    Balcon:propiedad.Balcon,
    Baulera:propiedad.Baulera,
    Jardin:propiedad.Jardin,
    SUM:propiedad.SUM,
    Solarium:propiedad.Solarium,
    Patio:propiedad.Patio,
    Quincho:propiedad.Quincho,
    Pileta:propiedad.Pileta,
    Galeria:propiedad.Galeria,
    Asador:propiedad.Asador,
    Cochera:propiedad.Cochera,
    CocheraCubierta:propiedad.CocheraCubierta,
    Suite:propiedad.Suite,
    SalataEstarPlayroom:propiedad.SalataEstarPlayroom,
    Internet:propiedad.Internet,
    Electricidad:propiedad.Electricidad,
    Gas:propiedad.Gas,
    Agua:propiedad.Agua,
    Cloacas:propiedad.Cloacas,
    Cable:propiedad.Cable,
    Seguridad:propiedad.Seguridad,
    Expensas:propiedad.Expensas,
    Latitud:propiedad.Latitud,
    Longitud:propiedad.Longitud,
    usuario: id,
  });

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    modifPropiedad(formValues, propiedad._id).then((respuesta) => {
      console.log(respuesta);

      handleClose();
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Modal.Body>
      <div className="form-group">
        <label>Codigo Propiedad</label>
        <input 
          rows="1"
          type="text"
          className="form-control"
          name="CodigoPropiedad"
          maxLength="7"
          minLength="7"
          required
          value={formValues.CodigoPropiedad}
          onChange={handleChange}
        />
        {/* <small>Url de imagen</small> */}
      </div>

      <div className="form-group">
        <label>Título</label>
        <input
          type="text"
          className="form-control"
          name="Titulo"
          maxLength="20"
          required
          value={formValues.Titulo}
          onChange={handleChange}
        />
      </div>
     
      <div className="form-group">
        <label>Estado Propiedad</label>
        <select 
          className="form-control"
          name="EstadoPropiedad"
          value={formValues.EstadoPropiedad} 
          onChange={handleChange}
          required>
          <option selected value="">Elija la opcion adecuada</option>
          <option value="Venta">Venta</option>
          <option value="Alquiler">Alquiler</option>
          <option value="Venta-Alquiler">Venta-Alquiler</option>
        </select>
      </div>

      <div className="form-group">
        <label>Tipo Propiedad</label>
        <select 
          className="form-control"
          name="TipoPropiedad"
          value={formValues.TipoPropiedad} 
          onChange={handleChange}
          required>
          <option selected value="">Elija la opcion adecuada</option>  
          <option value="Casa">Casa</option>
          <option value="Departamento">Departamento</option>
          <option value="Terreno">Terreno</option>
          <option value="Local Comercial">Local Comercial</option>
          <option value="Galpon">Galpon</option>
          <option value="Cochera">Cochera</option>
          <option value="Oficina">Oficina</option>
          <option value="Campos">Campos</option>
        </select>
      </div>
    
      <div className="form-group">
        <label>Direccion</label>
        <input
          type="text"
          className="form-control"
          name="DireccionFisica"
          maxLength="50"
          value={formValues.DireccionFisica}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Descripcion</label>
        <input
          type="text"
          className="form-control"
          name="Descripcion"
          maxLength="250"
          value={formValues.Descripcion}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Barrio</label>
        <input
          type="text"
          className="form-control"
          name="Barrio"
          maxLength="20"
          value={formValues.Barrio}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Lugar</label>
        <input
          type="text"
          className="form-control"
          name="Lugar"
          maxLength="20"
          value={formValues.Lugar}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Valor</label>
        <input
          type="text"
          className="form-control"
          name="Valor"
          maxLength="20"
          value={formValues.Valor}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Superficie Total</label>
        <input
          type="text"
          className="form-control"
          name="SuperficieTotal"
          maxLength="10"
          value={formValues.SuperficieTotal}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Superficie Comun</label>
        <input
          type="text"
          className="form-control"
          name="SuperficieComun"
          maxLength="10"
          value={formValues.Comun}
          onChange={handleChange}
        />
      </div>   
      
      <div className="form-group">
        <label>Superficie Propia</label>
        <input
          type="text"
          className="form-control"
          name="SuperficiePropia"
          value={formValues.Propia}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Superficie Cubierta</label>
        <input
          type="text"
          className="form-control"
          name="SuperficieCubierta"
          maxLength="10"
          value={formValues.SuperficieCubierta}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Superficie Semi Cubierta</label>
        <input
          type="text"
          className="form-control"
          name="SuperficieSemiCubierta"
          maxLength="10"
          value={formValues.SuperficieSemiCubierta}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Ambientes</label>
        <input
          type="text"
          className="form-control"
          name="Ambientes"
          maxLength="1"
          value={formValues.Ambientes}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Dormitorio</label>
        <input
          type="text"
          className="form-control"
          name="Dormitorio"
          maxLength="1"
          value={formValues.Dormitorio}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Baño</label>
        <input
          type="text"
          className="form-control"
          name="Baño"
          maxLength="1"
          value={formValues.Baño}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Informacion Adicional</label>
        <input
          type="text"
          className="form-control"
          name="InformacionAdicional"
          maxLength="250"
          value={formValues.InformacionAdicional}
          onChange={handleChange}
        />
      </div>

       <div className="form-check">
          <label className="form-check-label mr-5" for="defaultCheck1">
              Cocina
          </label>
          {formValues.Cocina ? (
              
                    <input className="form-check-input mr-5" 
                      defaultChecked
                      name="Cocina"
                      type="checkbox" 
                      value={0}
                      onChange={handleChange}
                      id="flexCheckChecked"
                    />
                  
                ) : (
                    <input className="form-check-input mr-5" 
                      name="Cocina"
                      type="checkbox" 
                      value={1}
                      onChange={handleChange}
                      id="flexCheckChecked"
                    />
                )}
          
            <label className="form-check-label ml-5 mr-5" for="defaultCheck1">
                Comedor
            </label>
            {formValues.Comedor ? (
                      <input  className="form-check-input" 
                        defaultChecked
                        name="Comedor"
                        type="checkbox" 
                        value={0}
                        onChange={handleChange}
                        id="flexCheckChecked" 
                      />
                    
                  ) : (
                      <input className="form-check-input mr-5" 
                        name="Comedor"
                        type="checkbox" 
                        value={1}
                        onChange={handleChange}
                        id="flexCheckChecked" 
                      />
                  )}

            <label className="form-check-label ml-5 mr-5" for="defaultCheck1">
                Cocina Comedor 
            </label>
            {formValues.CocinaComedor ? (
                      <input className="form-check-input" 
                        defaultChecked
                        name="CocinaComedor"
                        type="checkbox" 
                        value={0}
                        onChange={handleChange}
                        id="flexCheckChecked" 
                      />
                    
                  ) : (
                      <input className="form-check-input mr-5" 
                        name="CocinaComedor"
                        type="checkbox" 
                        value={1}
                        onChange={handleChange}
                        id="flexCheckChecked" 
                      />
                  )}
      </div>

      <div className="form-check">
          <label className="form-check-label mr-5" for="defaultCheck1">
              Placard
          </label>
          {formValues.Placard ? (
              
                    <input className="form-check-input mr-5" 
                      defaultChecked
                      name="Placard"
                      type="checkbox" 
                      value={0}
                      onChange={handleChange}
                      id="flexCheckChecked"
                    />
                  
                ) : (
                    <input className="form-check-input mr-5" 
                      name="Placard"
                      type="checkbox" 
                      value={1}
                      onChange={handleChange}
                      id="flexCheckChecked"
                    />
                )}
          
            <label className="form-check-label ml-5 mr-5" for="defaultCheck1">
                Comedor Diario
            </label>
            {formValues.ComedorDiario ? (
                      <input  className="form-check-input" 
                        defaultChecked
                        name="ComedorDiario"
                        type="checkbox" 
                        value={0}
                        onChange={handleChange}
                        id="flexCheckChecked" 
                      />
                    
                  ) : (
                      <input className="form-check-input mr-5" 
                        name="ComedorDiario"
                        type="checkbox" 
                        value={1}
                        onChange={handleChange}
                        id="flexCheckChecked" 
                      />
                  )}

            <label className="form-check-label ml-5 mr-5" for="defaultCheck1">
                Dependencia 
            </label>
            {formValues.Dependencia ? (
                      <input className="form-check-input" 
                        defaultChecked
                        name="Dependencia"
                        type="checkbox" 
                        value={0}
                        onChange={handleChange}
                        id="flexCheckChecked" 
                      />
                    
                  ) : (
                      <input className="form-check-input mr-5" 
                        name="Dependencia"
                        type="checkbox" 
                        value={1}
                        onChange={handleChange}
                        id="flexCheckChecked" 
                      />
                  )}
      </div>

      <div className="form-check">
          <label className="form-check-label mr-5" for="defaultCheck1">
              Baño Servicio
          </label>
          {formValues.BañoServicio ? (
              
                    <input className="form-check-input mr-5" 
                      defaultChecked
                      name="BañoServicio"
                      type="checkbox" 
                      value={0}
                      onChange={handleChange}
                      id="flexCheckChecked"
                    />
                  
                ) : (
                    <input className="form-check-input mr-5" 
                      name="BañoServicio"
                      type="checkbox" 
                      value={1}
                      onChange={handleChange}
                      id="flexCheckChecked"
                    />
                )}
          
            <label className="form-check-label ml-5 mr-5" for="defaultCheck1">
                Lavadero
            </label>
            {formValues.Lavadero ? (
                      <input  className="form-check-input" 
                        defaultChecked
                        name="Lavadero"
                        type="checkbox" 
                        value={0}
                        onChange={handleChange}
                        id="flexCheckChecked" 
                      />
                    
                  ) : (
                      <input className="form-check-input mr-5" 
                        name="Lavadero"
                        type="checkbox" 
                        value={1}
                        onChange={handleChange}
                        id="flexCheckChecked" 
                      />
                  )}

            <label className="form-check-label ml-5 mr-5" for="defaultCheck1">
                Living 
            </label>
            {formValues.Living ? (
                      <input className="form-check-input" 
                        defaultChecked
                        name="Living"
                        type="checkbox" 
                        value={0}
                        onChange={handleChange}
                        id="flexCheckChecked" 
                      />
                    
                  ) : (
                      <input className="form-check-input mr-5" 
                        name="Living"
                        type="checkbox" 
                        value={1}
                        onChange={handleChange}
                        id="flexCheckChecked" 
                      />
                  )}
      </div>


      <div className="form-check">
          <label className="form-check-label mr-5" for="defaultCheck1">
              Living Comedor
          </label>
          {formValues.LivingComedor ? (
              
                    <input className="form-check-input mr-5" 
                      defaultChecked
                      name="LivingComedor"
                      type="checkbox" 
                      value={0}
                      onChange={handleChange}
                      id="flexCheckChecked"
                    />
                  
                ) : (
                    <input className="form-check-input mr-5" 
                      name="LivingComedor"
                      type="checkbox" 
                      value={1}
                      onChange={handleChange}
                      id="flexCheckChecked"
                    />
                )}
          
            <label className="form-check-label ml-5 mr-5" for="defaultCheck1">
                Escritorio
            </label>
            {formValues.Escritorio ? (
                      <input  className="form-check-input" 
                        defaultChecked
                        name="Escritorio"
                        type="checkbox" 
                        value={0}
                        onChange={handleChange}
                        id="flexCheckChecked" 
                      />
                    
                  ) : (
                      <input className="form-check-input mr-5" 
                        name="Escritorio"
                        type="checkbox" 
                        value={1}
                        onChange={handleChange}
                        id="flexCheckChecked" 
                      />
                  )}

            <label className="form-check-label ml-5 mr-5" for="defaultCheck1">
                Toillette 
            </label>
            {formValues.Toillette ? (
                      <input className="form-check-input" 
                        defaultChecked
                        name="Toillette"
                        type="checkbox" 
                        value={0}
                        onChange={handleChange}
                        id="flexCheckChecked" 
                      />
                    
                  ) : (
                      <input className="form-check-input mr-5" 
                        name="Toillette"
                        type="checkbox" 
                        value={1}
                        onChange={handleChange}
                        id="flexCheckChecked" 
                      />
                  )}
      </div>

      <div className="form-check">
          <label className="form-check-label mr-5" for="defaultCheck1">
              Balcon
          </label>
          {formValues.Balcon ? (
              
                    <input className="form-check-input mr-5" 
                      defaultChecked
                      name="Balcon"
                      type="checkbox" 
                      value={0}
                      onChange={handleChange}
                      id="flexCheckChecked"
                    />
                  
                ) : (
                    <input className="form-check-input mr-5" 
                      name="Balcon"
                      type="checkbox" 
                      value={1}
                      onChange={handleChange}
                      id="flexCheckChecked"
                    />
                )}
          
            <label className="form-check-label ml-5 mr-5" for="defaultCheck1">
                Baulera
            </label>
            {formValues.Baulera ? (
                      <input  className="form-check-input" 
                        defaultChecked
                        name="Baulera"
                        type="checkbox" 
                        value={0}
                        onChange={handleChange}
                        id="flexCheckChecked" 
                      />
                    
                  ) : (
                      <input className="form-check-input mr-5" 
                        name="Baulera"
                        type="checkbox" 
                        value={1}
                        onChange={handleChange}
                        id="flexCheckChecked" 
                      />
                  )}

            <label className="form-check-label ml-5 mr-5" for="defaultCheck1">
                Jardin 
            </label>
            {formValues.Jardin ? (
                      <input className="form-check-input" 
                        defaultChecked
                        name="Jardin"
                        type="checkbox" 
                        value={0}
                        onChange={handleChange}
                        id="flexCheckChecked" 
                      />
                    
                  ) : (
                      <input className="form-check-input mr-5" 
                        name="Jardin"
                        type="checkbox" 
                        value={1}
                        onChange={handleChange}
                        id="flexCheckChecked" 
                      />
                  )}
            <label className="form-check-label ml-5 mr-5" for="defaultCheck1">
                SUM 
            </label>
            {formValues.SUM ? (
                      <input className="form-check-input" 
                        defaultChecked
                        name="SUM"
                        type="checkbox" 
                        value={0}
                        onChange={handleChange}
                        id="flexCheckChecked" 
                      />
                    
                  ) : (
                      <input className="form-check-input mr-5" 
                        name="SUM"
                        type="checkbox" 
                        value={1}
                        onChange={handleChange}
                        id="flexCheckChecked" 
                      />
                  )}
      </div>

      <div className="form-check">
          <label className="form-check-label mr-5" for="defaultCheck1">
              Solarium
          </label>
          {formValues.Solarium ? (
              
                    <input className="form-check-input mr-5" 
                      defaultChecked
                      name="Solarium"
                      type="checkbox" 
                      value={0}
                      onChange={handleChange}
                      id="flexCheckChecked"
                    />
                  
                ) : (
                    <input className="form-check-input mr-5" 
                      name="Solarium"
                      type="checkbox" 
                      value={1}
                      onChange={handleChange}
                      id="flexCheckChecked"
                    />
                )}
          
            <label className="form-check-label ml-5 mr-5" for="defaultCheck1">
                Patio
            </label>
            {formValues.Patio ? (
                      <input  className="form-check-input" 
                        defaultChecked
                        name="Patio"
                        type="checkbox" 
                        value={0}
                        onChange={handleChange}
                        id="flexCheckChecked" 
                      />
                    
                  ) : (
                      <input className="form-check-input mr-5" 
                        name="Patio"
                        type="checkbox" 
                        value={1}
                        onChange={handleChange}
                        id="flexCheckChecked" 
                      />
                  )}

            <label className="form-check-label ml-5 mr-5" for="defaultCheck1">
                Quincho 
            </label>
            {formValues.Quincho ? (
                      <input className="form-check-input" 
                        defaultChecked
                        name="Quincho"
                        type="checkbox" 
                        value={0}
                        onChange={handleChange}
                        id="flexCheckChecked" 
                      />
                    
                  ) : (
                      <input className="form-check-input mr-5" 
                        name="Quincho"
                        type="checkbox" 
                        value={1}
                        onChange={handleChange}
                        id="flexCheckChecked" 
                      />
                  )}
            <label className="form-check-label ml-5 mr-5" for="defaultCheck1">
                Pileta 
            </label>
            {formValues.Pileta ? (
                      <input className="form-check-input" 
                        defaultChecked
                        name="Pileta"
                        type="checkbox" 
                        value={0}
                        onChange={handleChange}
                        id="flexCheckChecked" 
                      />
                    
                  ) : (
                      <input className="form-check-input mr-5" 
                        name="Pileta"
                        type="checkbox" 
                        value={1}
                        onChange={handleChange}
                        id="flexCheckChecked" 
                      />
                  )}
      </div>

      <div className="form-check">
          <label className="form-check-label mr-5" for="defaultCheck1">
              Galeria
          </label>
          {formValues.Galeria ? (
              
                    <input className="form-check-input mr-5" 
                      defaultChecked
                      name="Galeria"
                      type="checkbox" 
                      value={0}
                      onChange={handleChange}
                      id="flexCheckChecked"
                    />
                  
                ) : (
                    <input className="form-check-input mr-5" 
                      name="Galeria"
                      type="checkbox" 
                      value={1}
                      onChange={handleChange}
                      id="flexCheckChecked"
                    />
                )}
          
            <label className="form-check-label ml-5 mr-5" for="defaultCheck1">
                Asador
            </label>
            {formValues.Asador ? (
                      <input  className="form-check-input" 
                        defaultChecked
                        name="Asador"
                        type="checkbox" 
                        value={0}
                        onChange={handleChange}
                        id="flexCheckChecked" 
                      />
                    
                  ) : (
                      <input className="form-check-input mr-5" 
                        name="Asador"
                        type="checkbox" 
                        value={1}
                        onChange={handleChange}
                        id="flexCheckChecked" 
                      />
                  )}

            <label className="form-check-label ml-5 mr-5" for="defaultCheck1">
                Cochera 
            </label>
            {formValues.Cochera ? (
                      <input className="form-check-input" 
                        defaultChecked
                        name="Cochera"
                        type="checkbox" 
                        value={0}
                        onChange={handleChange}
                        id="flexCheckChecked" 
                      />
                    
                  ) : (
                      <input className="form-check-input mr-5" 
                        name="Cochera"
                        type="checkbox" 
                        value={1}
                        onChange={handleChange}
                        id="flexCheckChecked" 
                      />
                  )}
      </div>

      <div className="form-check">
          <label className="form-check-label mr-5" for="defaultCheck1">
              Cochera Cubierta
          </label>
          {formValues.CocheraCubierta ? (
              
                    <input className="form-check-input mr-5" 
                      defaultChecked
                      name="CocheraCubierta"
                      type="checkbox" 
                      value={0}
                      onChange={handleChange}
                      id="flexCheckChecked"
                    />
                  
                ) : (
                    <input className="form-check-input mr-5" 
                      name="CocheraCubierta"
                      type="checkbox" 
                      value={1}
                      onChange={handleChange}
                      id="flexCheckChecked"
                    />
                )}
          
            <label className="form-check-label ml-5 mr-5" for="defaultCheck1">
                Suite
            </label>
            {formValues.Suite ? (
                      <input  className="form-check-input" 
                        defaultChecked
                        name="Suite"
                        type="checkbox" 
                        value={0}
                        onChange={handleChange}
                        id="flexCheckChecked" 
                      />
                    
                  ) : (
                      <input className="form-check-input mr-5" 
                        name="Suite"
                        type="checkbox" 
                        value={1}
                        onChange={handleChange}
                        id="flexCheckChecked" 
                      />
                  )}

            <label className="form-check-label ml-5 mr-5" for="defaultCheck1">
                Sala Estar Playroom 
            </label>
            {formValues.SalataEstarPlayroom ? (
                      <input className="form-check-input" 
                        defaultChecked
                        name="SalataEstarPlayroom"
                        type="checkbox" 
                        value={0}
                        onChange={handleChange}
                        id="flexCheckChecked" 
                      />
                    
                  ) : (
                      <input className="form-check-input mr-5" 
                        name="SalataEstarPlayroom"
                        type="checkbox" 
                        value={1}
                        onChange={handleChange}
                        id="flexCheckChecked" 
                      />
                  )}
      </div>

      <div className="form-check">
          <label className="form-check-label mr-5" for="defaultCheck1">
              Internet
          </label>
          {formValues.Internet ? (
              
                    <input className="form-check-input mr-5" 
                      defaultChecked
                      name="Internet"
                      type="checkbox" 
                      value={0}
                      onChange={handleChange}
                      id="flexCheckChecked"
                    />
                  
                ) : (
                    <input className="form-check-input mr-5" 
                      name="Internet"
                      type="checkbox" 
                      value={1}
                      onChange={handleChange}
                      id="flexCheckChecked"
                    />
                )}
          
            <label className="form-check-label ml-5 mr-5" for="defaultCheck1">
                Electricidad
            </label>
            {formValues.Electricidad ? (
                      <input  className="form-check-input" 
                        defaultChecked
                        name="Electricidad"
                        type="checkbox" 
                        value={0}
                        onChange={handleChange}
                        id="flexCheckChecked" 
                      />
                    
                  ) : (
                      <input className="form-check-input mr-5" 
                        name="Electricidad"
                        type="checkbox" 
                        value={1}
                        onChange={handleChange}
                        id="flexCheckChecked" 
                      />
                  )}

            <label className="form-check-label ml-5 mr-5" for="defaultCheck1">
                Gas 
            </label>
            {formValues.Gas ? (
                      <input className="form-check-input" 
                        defaultChecked
                        name="Gas"
                        type="checkbox" 
                        value={0}
                        onChange={handleChange}
                        id="flexCheckChecked" 
                      />
                    
                  ) : (
                      <input className="form-check-input mr-5" 
                        name="Gas"
                        type="checkbox" 
                        value={1}
                        onChange={handleChange}
                        id="flexCheckChecked" 
                      />
                  )}
 
            <label className="form-check-label ml-5 mr-5" for="defaultCheck1">
                Agua 
            </label>
            {formValues.Agua ? (
                      <input className="form-check-input" 
                        defaultChecked
                        name="Agua"
                        type="checkbox" 
                        value={0}
                        onChange={handleChange}
                        id="flexCheckChecked" 
                      />
                    
                  ) : (
                      <input className="form-check-input mr-5" 
                        name="Agua"
                        type="checkbox" 
                        value={1}
                        onChange={handleChange}
                        id="flexCheckChecked" 
                      />
                  )}
      </div>

      <div className="form-check">
          <label className="form-check-label mr-5" for="defaultCheck1">
              Cloacas
          </label>
          {formValues.Cloacas ? (
              
                    <input className="form-check-input mr-5" 
                      defaultChecked
                      name="Cloacas"
                      type="checkbox" 
                      value={0}
                      onChange={handleChange}
                      id="flexCheckChecked"
                    />
                  
                ) : (
                    <input className="form-check-input mr-5" 
                      name="Cloacas"
                      type="checkbox" 
                      value={1}
                      onChange={handleChange}
                      id="flexCheckChecked"
                    />
                )}
          
            <label className="form-check-label ml-5 mr-5" for="defaultCheck1">
                Cable
            </label>
            {formValues.Cable ? (
                      <input  className="form-check-input" 
                        defaultChecked
                        name="Cable"
                        type="checkbox" 
                        value={0}
                        onChange={handleChange}
                        id="flexCheckChecked" 
                      />
                    
                  ) : (
                      <input className="form-check-input mr-5" 
                        name="Cable"
                        type="checkbox" 
                        value={1}
                        onChange={handleChange}
                        id="flexCheckChecked" 
                      />
                  )}

            <label className="form-check-label ml-5 mr-5" for="defaultCheck1">
                Seguridad 
            </label>
            {formValues.Seguridad ? (
                      <input className="form-check-input" 
                        defaultChecked
                        name="Seguridad"
                        type="checkbox" 
                        value={0}
                        onChange={handleChange}
                        id="flexCheckChecked" 
                      />
                    
                  ) : (
                      <input className="form-check-input mr-5" 
                        name="Seguridad"
                        type="checkbox" 
                        value={1}
                        onChange={handleChange}
                        id="flexCheckChecked" 
                      />
                  )}
 
            <label className="form-check-label ml-5 mr-5" for="defaultCheck1">
                Expensas 
            </label>
            {formValues.Expensas ? (
                      <input className="form-check-input" 
                        defaultChecked
                        name="Expensas"
                        type="checkbox" 
                        value={0}
                        onChange={handleChange}
                        id="flexCheckChecked" 
                      />
                    
                  ) : (
                      <input className="form-check-input mr-5" 
                        name="Expensas"
                        type="checkbox" 
                        value={1}
                        onChange={handleChange}
                        id="flexCheckChecked" 
                      />
                  )}
      </div>

      <div className="form-group mt-2">
        <label>Latitud</label>
        <input
          type="number"
          className="form-control"
          name="latitud"
          value={formValues.Latitud}
          onChange={handleChange}
        />
      </div>

      <div className="form-group mt-2">
        <label>Longitud</label>
        <input
          type="number"
          className="form-control"
          name="longitud"
          value={formValues.Longitud}
          onChange={handleChange}
        />
      </div>


{/* //////////////////////////////////////////////////////// */}
        {/* <div className="form-group">
          <label>Video</label>
          <input
            type="text"
            className="form-control"
            name="video"
            value={formValues.video}
            onChange={handleChange}
          />
          <small>Url del video de youtube</small>
        </div>
        <div className="form-group">
          <label>Mentor</label>
          <input
            type="text"
            className="form-control"
            placeholder="Nombre del mentor"
            name="mentor"
            required
            value={formValues.mentor}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Avatar Mentor</label>
          <input
            type="text"
            className="form-control"
            name="img_mentor"
            value={formValues.img_mentor}
            onChange={handleChange}
          />
          <small>Url de imagen</small>
        </div> */}
      </Modal.Body>
      <Modal.Footer>
        <Button type="submit" variant="outline-info">
          Guardar
        </Button>
      </Modal.Footer>
    </form>
  );
};

export default ModalFormPropiedad;
