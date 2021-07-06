import { React} from "react";
import { Carousel } from "react-bootstrap";
import SimpleMap from "../components/GoogleMaps";
import Rss from "../components/Rss";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/propiedaddetail.css";

const PropiedadDetail = ({ data }) => {
  const { propiedad } = data;

  return (
    <div>
      <div>
        <div className="row mt-5">
          {" "}
          <div id="carousel-inner" className="col-lg-8">
            <Carousel>
              {propiedad?.imag1 !== "" && (
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={propiedad?.imag1}
                    alt="Third slide"
                  />
                </Carousel.Item>
              )}

              {propiedad?.imag2 !== "" && (
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={propiedad?.imag2}
                    alt="Third slide"
                  />
                </Carousel.Item>
              )}

              {propiedad?.imag3 !== "" && (
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={propiedad?.imag3}
                    alt="Third slide"
                  />
                </Carousel.Item>
              )}

              {propiedad?.imag4 !== "" && (
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={propiedad?.imag4}
                    alt="Third slide"
                  />
                </Carousel.Item>
              )}

              {propiedad?.imag5 !== "" && (
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={propiedad?.imag5}
                    alt="Third slide"
                  />
                </Carousel.Item>
              )}

              {propiedad?.imag6 !== "" && (
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={propiedad?.imag6}
                    alt="Third slide"
                  />
                </Carousel.Item>
              )}

              {propiedad?.imag7 !== "" && (
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={propiedad?.imag7}
                    alt="Third slide"
                  />
                </Carousel.Item>
              )}

              {propiedad?.imag8 !== "" && (
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={propiedad?.imag8}
                    alt="Third slide"
                  />
                </Carousel.Item>
              )}

              {propiedad?.imag9 !== "" && (
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={propiedad?.imag9}
                    alt="Third slide"
                  />
                </Carousel.Item>
              )}

              {propiedad?.imag10 !== "" && (
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={propiedad?.imag10}
                    alt="Third slide"
                  />
                </Carousel.Item>
              )}
            </Carousel>
          </div>{" "}
          <div className="col-lg-4">
            <h3 className="card-title mt-3">Datos de la Propiedad</h3>
            <hr></hr>
            <h4 className="card-title mb-2">
              {" "}
              Codigo: {propiedad?.CodigoPropiedad}
            </h4>
            <h3 className="card-titulo mb-2">{propiedad?.Titulo}</h3>
            <h4 className="card-precio mb-2"> Valor: {propiedad?.Valor}</h4>
            <h4 className="card-title mb-2 mt-3">
              {" "}
              Estado: {propiedad?.EstadoPropiedad}
            </h4>
            <h4 className="card-title mb-2"> Tipo: {propiedad?.TipoPropiedad}</h4>
            <h4 className="card-title mb-2">
              {" "}
              Dirección: {propiedad?.DireccionFisica}
            </h4>
            <h4 className="card-title mb-2"> Barrio: {propiedad?.Barrio}</h4>
            <h4 className="card-title mb-2"> Lugar: {propiedad?.Lugar}</h4>
            <hr className></hr>
            {propiedad?.SuperficieTotal ? (
                  <h5 className="card-title mb-2 mt-3">
                     {" "}
                     Sup. Total: {propiedad?.SuperficieTotal}
                   </h5>
                ) : (
                  ""
                )}
            {propiedad?.SuperficiePropia ? (
                  <h5 className="card-title mb-2 mt-3">
                     {" "}
                     Sup. Propia: {propiedad?.SuperficiePropia}
                   </h5>
                ) : (
                  ""
                )}
            {propiedad?.SuperficieComun ? (
                  <h5 className="card-title mb-2 mt-3">
                     {" "}
                     Sup. Comun: {propiedad?.SuperficieComun}
                   </h5>
                ) : (
                  ""
                )}
            {propiedad?.SuperficieCubierta ? (
                  <h5 className="card-title mb-2 mt-3">
                     {" "}
                     Sup. Cubierta: {propiedad?.SuperficieCubierta}
                   </h5>
                ) : (
                  ""
                )}
            {propiedad?.SuperficieSemiCubierta ? (
                  <h5 className="card-title mb-2 mt-3">
                     {" "}
                     Sup. Semi Cubierta: {propiedad?.SuperficieSemiCubierta}
                   </h5>
                ) : (
                  ""
                )}
            <hr></hr>
         
              <div className="col-4 mt-5 offset-4">
                <a title="Whatsapp" 
                  href="https://wa.link/0zbip1"
                  target="_blank">
                  <img src="https://play-lh.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN" 
                      alt="Whatsapp" 
                      width="100" 
                      height="100"
                  />
                </a>
              </div>
         
           </div>
        </div>


        <div className="row">
          <div className="col-8">
            <h3 className="card-title mt-5">Descripción de la Propiedad</h3>
            <hr></hr>
            <h4 className="mt-5">{propiedad?.Descripcion}</h4>
            <h4>{propiedad?.InformacionAdicional}</h4>
      
            <h3 className="card-title mt-5">Adicionales y Servicios</h3>
            <hr></hr>
            <div className="col">
              <div className="row">
                <ul className="fa-ul mt-5">
                  <li>
                    <i id="check1" className="fa fa-check-circle mr-2"></i>
                    Ambientes: {propiedad?.Ambientes}
                  </li>
                </ul>
                <ul className="fa-ul mt-5">
                  <li>
                    <i id="check1" className="fa fa-check-circle mr-2"></i>
                    Dormitorios: {propiedad?.Dormitorio}
                  </li>
                </ul>
                <ul className="fa-ul mt-5">
                  <li>
                    <i id="check1" className="fa fa-check-circle mr-2"></i>
                    Baños: {propiedad?.Baño}
                  </li>
                </ul>
              </div>

              <div className="row mt-5">
                {propiedad?.Cocina ? (
                  <ul className="fa-ul">
                    <li>
                      <i id="check" className="fa fa-check-circle mr-2"></i>
                      Cocina
                    </li>
                  </ul>
                ) : (
                  ""
                )}

                {propiedad?.Comedor ? (
                  <ul className="fa-ul">
                    <li>
                      <i id="check" className="fa fa-check-circle mr-2"></i>
                      Comedor
                    </li>
                  </ul>
                ) : (
                  ""
                )}

                {propiedad?.CocinaComedor ? (
                  <ul className="fa-ul">
                    <li>
                      <i id="check" className="fa fa-check-circle mr-2"></i>
                      Cocina Comedor
                    </li>
                  </ul>
                ) : (
                  ""
                )}

                {propiedad?.Placard ? (
                  <ul className="fa-ul">
                    <li>
                      <i id="check" className="fa fa-check-circle mr-2"></i>
                      Placard
                    </li>
                  </ul>
                ) : (
                  ""
                )}

                {propiedad?.ComedorDiario ? (
                  <ul className="fa-ul">
                    <li>
                      <i id="check" className="fa fa-check-circle mr-2"></i>
                      Comedor Diario
                    </li>
                  </ul>
                ) : (
                  ""
                )}

                {propiedad?.Dependencia ? (
                  <ul className="fa-ul">
                    <li>
                      <i id="check" className="fa fa-check-circle mr-2"></i>
                      Dependencia
                    </li>
                  </ul>
                ) : (
                  ""
                )}

                {propiedad?.BañoServicio ? (
                  <ul className="fa-ul">
                    <li>
                      <i id="check" className="fa fa-check-circle mr-2"></i>
                      Baño Servicio
                    </li>
                  </ul>
                ) : (
                  ""
                )}

                {propiedad?.Lavadero ? (
                  <ul className="fa-ul">
                    <li>
                      <i id="check" className="fa fa-check-circle mr-2"></i>
                      Lavadero
                    </li>
                  </ul>
                ) : (
                  ""
                )}

                {propiedad?.Living ? (
                  <ul className="fa-ul">
                    <li>
                      <i id="check" className="fa fa-check-circle mr-2"></i>
                      Living
                    </li>
                  </ul>
                ) : (
                  ""
                )}
                {propiedad?.LivingComedor ? (
                  <ul className="fa-ul">
                    <li>
                      <i id="check" className="fa fa-check-circle mr-2"></i>
                      Living Comedor
                    </li>
                  </ul>
                ) : (
                  ""
                )}

                {propiedad?.Escritorio ? (
                  <ul className="fa-ul">
                    <li>
                      <i id="check" className="fa fa-check-circle mr-2"></i>
                      Escritorio
                    </li>
                  </ul>
                ) : (
                  ""
                )}

                {propiedad?.Toillette ? (
                  <ul className="fa-ul">
                    <li>
                      <i id="check" className="fa fa-check-circle mr-2"></i>
                      Toillette
                    </li>
                  </ul>
                ) : (
                  ""
                )}

                {propiedad?.Balcon ? (
                  <ul className="fa-ul">
                    <li>
                      <i id="check" className="fa fa-check-circle mr-2"></i>
                      Balcon
                    </li>
                  </ul>
                ) : (
                  ""
                )}

                {propiedad?.Baulera ? (
                  <ul className="fa-ul">
                    <li>
                      <i id="check" className="fa fa-check-circle mr-2"></i>
                      Baulera
                    </li>
                  </ul>
                ) : (
                  ""
                )}

                {propiedad?.Jardin ? (
                  <ul className="fa-ul">
                    <li>
                      <i id="check" className="fa fa-check-circle mr-2"></i>
                      Jardin
                    </li>
                  </ul>
                ) : (
                  ""
                )}

                {propiedad?.SUM ? (
                  <ul className="fa-ul">
                    <li>
                      <i id="check" className="fa fa-check-circle mr-2"></i>
                      SUM
                    </li>
                  </ul>
                ) : (
                  ""
                )}

                {propiedad?.Solarium ? (
                  <ul className="fa-ul">
                    <li>
                      <i id="check" className="fa fa-check-circle mr-2"></i>
                      Solarium
                    </li>
                  </ul>
                ) : (
                  ""
                )}

                {propiedad?.Patio ? (
                  <ul className="fa-ul">
                    <li>
                      <i id="check" className="fa fa-check-circle mr-2"></i>
                      Patio
                    </li>
                  </ul>
                ) : (
                  ""
                )}

                {propiedad?.Quincho ? (
                  <ul className="fa-ul">
                    <li>
                      <i id="check" className="fa fa-check-circle mr-2"></i>
                      Quincho
                    </li>
                  </ul>
                ) : (
                  ""
                )}

                {propiedad?.Pileta ? (
                  <ul className="fa-ul">
                    <li>
                      <i id="check" className="fa fa-check-circle mr-2"></i>
                      Pileta
                    </li>
                  </ul>
                ) : (
                  ""
                )}

                {propiedad?.Galeria ? (
                  <ul className="fa-ul">
                    <li>
                      <i id="check" className="fa fa-check-circle mr-2"></i>
                      Galeria
                    </li>
                  </ul>
                ) : (
                  ""
                )}

                {propiedad?.Asador ? (
                  <ul className="fa-ul">
                    <li>
                      <i id="check" className="fa fa-check-circle mr-2"></i>
                      Asador
                    </li>
                  </ul>
                ) : (
                  ""
                )}

                {propiedad?.Cochera ? (
                  <ul className="fa-ul">
                    <li>
                      <i id="check" className="fa fa-check-circle mr-2"></i>
                      Cochera
                    </li>
                  </ul>
                ) : (
                  ""
                )}

                {propiedad?.CocheraCubierta ? (
                  <ul className="fa-ul">
                    <li>
                      <i id="check" className="fa fa-check-circle mr-2"></i>
                      Cochera Cubierta
                    </li>
                  </ul>
                ) : (
                  ""
                )}

                {propiedad?.Suite ? (
                  <ul className="fa-ul">
                    <li>
                      <i id="check" className="fa fa-check-circle mr-2"></i>
                      Suite
                    </li>
                  </ul>
                ) : (
                  ""
                )}

                {propiedad?.SalaEstarPlayroom ? (
                  <ul className="fa-ul">
                    <li>
                      <i id="check" className="fa fa-check-circle mr-2"></i>
                      Sala Estar Playroom
                    </li>
                  </ul>
                ) : (
                  ""
                )}

                {propiedad?.Internet ? (
                  <ul className="fa-ul">
                    <li>
                      <i id="check" className="fa fa-check-circle mr-2"></i>
                      Internet
                    </li>
                  </ul>
                ) : (
                  ""
                )}

                {propiedad?.Electricidad ? (
                  <ul className="fa-ul">
                    <li>
                      <i id="check" className="fa fa-check-circle mr-2"></i>
                      Electricidad
                    </li>
                  </ul>
                ) : (
                  ""
                )}

                {propiedad?.Gas ? (
                  <ul className="fa-ul">
                    <li>
                      <i id="check" className="fa fa-check-circle mr-2"></i>
                      Gas
                    </li>
                  </ul>
                ) : (
                  ""
                )}

                {propiedad?.Agua ? (
                  <ul className="fa-ul">
                    <li>
                      <i id="check" className="fa fa-check-circle mr-2"></i>
                      Agua
                    </li>
                  </ul>
                ) : (
                  ""
                )}

                {propiedad?.Cloacas ? (
                  <ul className="fa-ul">
                    <li>
                      <i id="check" className="fa fa-check-circle mr-2"></i>
                      Cloacas
                    </li>
                  </ul>
                ) : (
                  ""
                )}

                {propiedad?.Cable ? (
                  <ul className="fa-ul">
                    <li>
                      <i id="check" className="fa fa-check-circle mr-2"></i>
                      Cable
                    </li>
                  </ul>
                ) : (
                  ""
                )}

                {propiedad?.Seguridad ? (
                  <ul className="fa-ul">
                    <li>
                      <i id="check" className="fa fa-check-circle mr-2"></i>
                      Seguridad
                    </li>
                  </ul>
                ) : (
                  ""
                )}

                {propiedad?.Expensas ? (
                  <ul className="fa-ul">
                    <li>
                      <i id="check" className="fa fa-check-circle mr-2"></i>
                      Expensas
                    </li>
                  </ul>
                ) : (
                  ""
                )}
              </div>
            </div>


             {/* mapa google maps      */}
            <div className="mt-5"> 
            <SimpleMap  data={propiedad?.Latitud} data2={propiedad?.Longitud} />
            </div>
          </div>


                {/* RSS */}
          <div className=" rss col-4">
            {/* <link rel="stylesheet" href="https://cdn.fromdoppler.com/formgenerator/latest/styles.css?47288510" />
            <div data-dp-form="F%2bIkYzut2FJAl1HY6i9dxQ%3d%3d"></div>  */}
            <Rss />         
          </div>

        </div>
     
      </div>
    </div>
  );
};

export default PropiedadDetail;
