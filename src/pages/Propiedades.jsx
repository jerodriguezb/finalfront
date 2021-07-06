import React, { useEffect, useState } from "react";
import { getPropiedades } from "../helpers/rutaPropiedades";
import PropiedadesItem from "../components/PropiedadesItem";
import Cargando from "../components/Cargando";
import Busqueda from "../components/Busqueda";
import Footer from "../components/Footer";
import "../css/propiedades.css";
import "bootstrap/dist/css/bootstrap.min.css";
//let muestrapagina = true;
const Propiedades = () => {
  const [muestrapagina, setMuestrapagina] = useState(true);
  const [propiedades, setPropiedades] = useState({
    data: [],
    loading: true,
  });
  const [propiedadesFiltradas, setPropiedadesFiltradas] = useState([]);
  const [estadoSelect, setEstadoSelect] = useState("");
  const [tipoSelect, setTipoSelect] = useState("");
  const [lugarSelect, setLugarSelect] = useState("");
  const [ambientesSelect, setAmbientesSelect] = useState("");
  useEffect(() => {
    getPropiedades().then((propiedades) => {
      setPropiedades({
        data: propiedades,
        loading: false,
      });
      //muestrapagina = false;
      //setPropiedadesFiltradas(propiedades);
    });
  }, []);
  const filtrarPropiedades = () => {
    const estadoFilter = propiedades.data.propiedades.filter((inmueble) => {
      return estadoSelect === "" || inmueble.EstadoPropiedad === estadoSelect;
    });
    const tipoFilter = estadoFilter.filter((inmueble) => {
      return tipoSelect === "" || inmueble.TipoPropiedad === tipoSelect;
    });
    const lugarFilter = tipoFilter.filter((inmueble) => {
      return lugarSelect === "" || inmueble.Lugar === lugarSelect;
    });
    const ambientesFilter = lugarFilter.filter((inmueble) => {
      return ambientesSelect === "" || inmueble.Ambientes === ambientesSelect;
    });
    setPropiedadesFiltradas(ambientesFilter);
  };
  return (
    <>
      <Busqueda
        setEstadoSelect={setEstadoSelect}
        setTipoSelect={setTipoSelect}
        setLugarSelect={setLugarSelect}
        setAmbientesSelect={setAmbientesSelect}
        filtrarPropiedades={filtrarPropiedades}
        setMuestrapagina={setMuestrapagina}
      />
      <div>{propiedades.loading && <Cargando />}</div>
      <div className="container">
        <div className="row">
          <div className="col sm-4 mb-2">
            <b>
              <h3>Conoce a las</h3>
            </b>
            <b>
              <h2>Propiedades en Venta y Alquiler</h2>
            </b>
            <hr></hr>
          </div>
        </div>
        {!propiedades.loading && (
          <>
            <div id="card" className="row lg-3">
              {muestrapagina ? (
                propiedades.data.propiedades.map((propiedad) => {
                  return (
                    <PropiedadesItem
                      key={propiedad._id}
                      propiedad={propiedad}
                    />
                  );
                })
              ) : (
                <>
                  {console.log(propiedadesFiltradas)}
                  {propiedadesFiltradas.length === 0 && (
                    <h2>No se encontraron propiedades para la busqueda...</h2>
                  )}{" "}
                </>
              )}
              {propiedadesFiltradas.map((propiedad) => {
                //muestrapagina = false;
                return (
                  <PropiedadesItem key={propiedad._id} propiedad={propiedad} />
                );
              })}
            </div>
            {/* {!muestrapagina && propiedadesFiltradas.length === 0 && (
              <h2>No se encontraron propiedades para la busqueda...</h2>
            )} */}
          </>
        )}
      </div>
      <Footer />
    </>
  );
};
export default Propiedades;