import React, { useState } from "react";
import {addPropiedad} from "../helpers/rutaPropiedades";
import "../css/addpropiedadform.css";



const AddPropiedadForm = ({ setShow }) => {
  const id = JSON.parse(localStorage.getItem("id"));
  const [formValues, setFormValues] = useState({
    CodigoPropiedad: "",
    Titulo: "",   
    EstadoPropiedad: "",
    TipoPropiedad: "",
    DireccionFisica: "",
    Descripcion: "",
    Barrio: "",
    Lugar: "",
    Valor: "",
    SuperficieTotal: "",
    SuperficieComun: "",
    SuperficiePropia: "",
    SuperficieCubierta: "",
    SuperficieSemiCubierta: "",
    Ambientes: "",
    Dormitorio: "",
    Baño: "",
    InformacionAdicional:"",
    Cocina:"false",
    Comedor:"false",
    CocinaComedor:"false",
    Placard:"false",
    ComedorDiario:"false",
    Dependencia:"false",
    BañoServicio:"false",
    Lavadero:"false",
    Living:"false",
    LivingComedor:"false",
    Escritorio:"false",
    Toillete:"false",
    Balcon:"false",
    Baulera:"false",
    Jardin:"false",
    SUM:"false",
    Solarium:"false",
    Patio:"false",
    Quincho:"false",
    Pileta:"false",
    Galeria:"false",
    Asador:"false",
    Cochera:"false",
    CocheraCubierta:"false",
    Suite:"false",
    SalaEstarPlayroom:"false",
    Internet:"false",
    Electricidad:"false",
    Gas:"false",
    Agua:"false",
    Cloacas:"false",
    Cable:"false",
    Seguridad:"false",
    Expensas:"false",
    Latitud:"-26.855188",
    Longitud:"-65.204110",
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
    addPropiedad(formValues).then((resp) => {
      console.log(resp);

      setFormValues({
        CodigoPropiedad: "",

        Titulo: "",

        EstadoPropiedad: "",
      });

      setShow(false);
    });
  };

  return (
    
    <form onSubmit={handleSubmit}>
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
        <label className="form-check-label mr-5 mb-5" for="defaultCheck1">
          Cocina
        </label>
        <input className="form-check-input mr-5" 
               name="Cocina"
               type="checkbox" 
               value={1}
               onChange={handleChange}
               id="defaultCheck1"
    
        />
        <label className="form-check-label ml-5 mr-5 mb-5" for="defaultCheck1">
          Comedor
        </label>
        <input className="form-check-input mr-5" 
               name="Comedor"
               type="checkbox" 
               value={1}
               onChange={handleChange}
               id="defaultCheck1"
        />
        <label className="form-check-label ml-5 mr-5 mb-5" for="defaultCheck1">
          Cocina Comedor
        </label>
        <input className="form-check-input" 
               name="CocinaComedor"
               type="checkbox" 
               value={1}
               onChange={handleChange}
               id="defaultCheck1"
        />
        <label className="form-check-label ml-5 mr-5 mb-5" for="defaultCheck1">
          Placard
        </label>
        <input className="form-check-input" 
               name="Placard"
               type="checkbox" 
               value={1}
               onChange={handleChange}
               id="defaultCheck1"
        />
        <label className="form-check-label ml-5 mr-5 mb-5" for="defaultCheck1">
          Comedor Diario
        </label>
        <input className="form-check-input" 
               name="ComedorDiario"
               type="checkbox" 
               value={1}
               onChange={handleChange}
               id="defaultCheck1"
        />
      </div>

      <div className="form-check">
        <label className="form-check-label mr-5 mb-5" for="defaultCheck1">
          Dependencia
        </label>
        <input className="form-check-input mr-5" 
               name="Dependencia"
               type="checkbox" 
               value={1}
               onChange={handleChange}
               id="defaultCheck1"
        />
        <label className="form-check-label ml-5 mr-5 mb-5" for="defaultCheck1">
          Baño Servicio
        </label>
        <input className="form-check-input" 
               name="BañoServicio"
               type="checkbox" 
               value={1}
               onChange={handleChange}
               id="defaultCheck1"
        />
        <label className="form-check-label ml-5 mr-5 mb-5" for="defaultCheck1">
          Lavadero
        </label>
        <input className="form-check-input" 
               name="Lavadero"
               type="checkbox" 
               value={1}
               onChange={handleChange}
               id="defaultCheck1"
        />
        <label className="form-check-label ml-5 mr-5 mb-5" for="defaultCheck1">
          Living
        </label>
        <input className="form-check-input" 
               name="Living"
               type="checkbox" 
               value={1}
               onChange={handleChange}
               id="defaultCheck1"
        />
        <label className="form-check-label ml-5 mr-5 mb-5" for="defaultCheck1">
          Living Comedor
        </label>
        <input className="form-check-input" 
               name="LivingComedor"
               type="checkbox" 
               value={1}
               onChange={handleChange}
               id="defaultCheck1"
        />
      </div>

      <div className="form-check">
        <label className="form-check-label mr-5 mb-5" for="defaultCheck1">
          Escritorio
        </label>
        <input className="form-check-input mr-5" 
               name="Escritorio"
               type="checkbox" 
               value={1}
               onChange={handleChange}
               id="defaultCheck1"
        />
        <label className="form-check-label ml-5 mr-5 mb-5" for="defaultCheck1">
          Toillette
        </label>
        <input className="form-check-input" 
               name="Toillette"
               type="checkbox" 
               value={1}
               onChange={handleChange}
               id="defaultCheck1"
        />
        <label className="form-check-label ml-5 mr-5 mb-5" for="defaultCheck1">
          Balcon
        </label>
        <input className="form-check-input" 
               name="Balcon"
               type="checkbox" 
               value={1}
               onChange={handleChange}
               id="defaultCheck1"
        />
        <label className="form-check-label ml-5 mr-5 mb-5" for="defaultCheck1">
          Baulera
        </label>
        <input className="form-check-input" 
               name="Baulera"
               type="checkbox" 
               value={1}
               onChange={handleChange}
               id="defaultCheck1"
        />
        <label className="form-check-label ml-5 mr-5 mb-5" for="defaultCheck1">
          Jardin
        </label>
        <input className="form-check-input" 
               name="Jardin"
               type="checkbox" 
               value={1}
               onChange={handleChange}
               id="defaultCheck1"
        />
         <label className="form-check-label ml-5 mr-5 mb-5" for="defaultCheck1">
          SUM
        </label>
        <input className="form-check-input" 
               name="SUM"
               type="checkbox" 
               value={1}
               onChange={handleChange}
               id="defaultCheck1"
        />
      </div>

      <div className="form-check">
        <label className="form-check-label mr-5 mb-5" for="defaultCheck1">
          Solarium
        </label>
        <input className="form-check-input mr-5" 
               name="Solarium"
               type="checkbox" 
               value={1}
               onChange={handleChange}
               id="defaultCheck1"
        />
        <label className="form-check-label ml-5 mr-5 mb-5" for="defaultCheck1">
          Patio
        </label>
        <input className="form-check-input" 
               name="Patio"
               type="checkbox" 
               value={1}
               onChange={handleChange}
               id="defaultCheck1"
        />
        <label className="form-check-label ml-5 mr-5 mb-5" for="defaultCheck1">
          Quincho
        </label>
        <input className="form-check-input" 
               name="Quincho"
               type="checkbox" 
               value={1}
               onChange={handleChange}
               id="defaultCheck1"
        />
        <label className="form-check-label ml-5 mr-5 mb-5" for="defaultCheck1">
          Pileta
        </label>
        <input className="form-check-input" 
               name="Pileta"
               type="checkbox" 
               value={1}
               onChange={handleChange}
               id="defaultCheck1"
        />
        <label className="form-check-label ml-5 mr-5 mb-5" for="defaultCheck1">
          Galeria
        </label>
        <input className="form-check-input" 
               name="Galeria"
               type="checkbox" 
               value={1}
               onChange={handleChange}
               id="defaultCheck1"
        />
         <label className="form-check-label ml-5 mr-5 mb-5" for="defaultCheck1">
          Asador
        </label>
        <input className="form-check-input" 
               name="Asador"
               type="checkbox" 
               value={1}
               onChange={handleChange}
               id="defaultCheck1"
        />
      </div>   

      <div className="form-check">
        <label className="form-check-label mr-5 mb-5" for="defaultCheck1">
          Cochera
        </label>
        <input className="form-check-input mr-5" 
               name="Cochera"
               type="checkbox" 
               value={1}
               onChange={handleChange}
               id="defaultCheck1"
        />
        <label className="form-check-label ml-5 mr-5 mb-5" for="defaultCheck1">
          Cochera Cubierta
        </label>
        <input className="form-check-input" 
               name="CocheraCubierta"
               type="checkbox" 
               value={1}
               onChange={handleChange}
               id="defaultCheck1"
        />
        <label className="form-check-label ml-5 mr-5 mb-5" for="defaultCheck1">
          Suite
        </label>
        <input className="form-check-input" 
               name="Suite"
               type="checkbox" 
               value={1}
               onChange={handleChange}
               id="defaultCheck1"
        />
        <label className="form-check-label ml-5 mr-5 mb-5" for="defaultCheck1">
          Sala Estar Playroom
        </label>
        <input className="form-check-input" 
               name="SalaEstarPlayroom"
               type="checkbox" 
               value={1}
               onChange={handleChange}
               id="defaultCheck1"
        />
        <label className="form-check-label ml-5 mr-5 mb-5" for="defaultCheck1">
          Internet
        </label>
        <input className="form-check-input" 
               name="Internet"
               type="checkbox" 
               value={1}
               onChange={handleChange}
               id="defaultCheck1"
        />
      </div>   

      <div className="form-check">
        <label className="form-check-label mr-5 mb-5" for="defaultCheck1">
          Electricidad
        </label>
        <input className="form-check-input mr-5" 
               name="Electricidad"
               type="checkbox" 
               value={1}
               onChange={handleChange}
               id="defaultCheck1"
        />
        <label className="form-check-label ml-5 mr-5 mb-5" for="defaultCheck1">
          Gas
        </label>
        <input className="form-check-input" 
               name="Gas"
               type="checkbox" 
               value={1}
               onChange={handleChange}
               id="defaultCheck1"
        />
        <label className="form-check-label ml-5 mr-5 mb-5" for="defaultCheck1">
          Agua
        </label>
        <input className="form-check-input" 
               name="Agua"
               type="checkbox" 
               value={1}
               onChange={handleChange}
               id="defaultCheck1"
        />
        <label className="form-check-label ml-5 mr-5 mb-5" for="defaultCheck1">
          Cloacas
        </label>
        <input className="form-check-input" 
               name="Cloacas"
               type="checkbox" 
               value={1}
               onChange={handleChange}
               id="defaultCheck1"
        />
        <label className="form-check-label ml-5 mr-5 mb-5" for="defaultCheck1">
          Cable
        </label>
        <input className="form-check-input" 
               name="Cable"
               type="checkbox" 
               value={1}
               onChange={handleChange}
               id="defaultCheck1"
        />
        <label className="form-check-label ml-5 mr-5 mb-5" for="defaultCheck1">
          Seguridad
        </label>
        <input className="form-check-input" 
               name="Seguridad"
               type="checkbox" 
               value={1}
               onChange={handleChange}
               id="defaultCheck1"
        />
      </div>   

      <div className="form-check">
        <label className="form-check-label mr-5 mb-5" for="defaultCheck1">
          Expensas
        </label>
        <input className="form-check-input mr-5" 
               name="Expensas"
               type="checkbox" 
               value={1}
               onChange={handleChange}
               id="defaultCheck1"
        />
      </div>  
      
      <div className="form-group">
        <label>Latitud</label>
        <input
          type="number"
          className="form-control"
          name="Latitud"
          value={formValues.latitud}
          onChange={handleChange}
        />
        <label>Longitud</label>
        <input
          type="number"
          className="form-control"
          name="Longitud"
          value={formValues.longitud}
          onChange={handleChange}
        />
      </div>
      
{/* 
      <div className="p-field-checkbox">
          <Controller name="accept" control={control} rules={{ required: true }} render={({ field, fieldState }) => (
          <Checkbox 
          inputId={formValues.Cocina} 
          onChange={(e) => field.onChange(e.checked)} 
          checked={fformValues.Cocina} 
          className={classNames({ 'p-invalid': fieldState.invalid })} />
                            )} />
          <label htmlFor="accept" className={classNames({ 'p-error': errors.accept })}>I agree to the terms and conditions*</label>
      </div> */}
     


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
      <div>
        <button type="submit" className="btn btn-outline-info">
          Guardar
        </button>
      </div>
    </form>
  );
};

export default AddPropiedadForm;
