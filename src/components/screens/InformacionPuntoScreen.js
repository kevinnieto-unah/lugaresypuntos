import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { eventClearActiveLugar} from '../../actions/lugares';
import { temporalesLogout } from '../../actions/temporales';

import {
  GoogleMap,
  useLoadScript,

} from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";
import Swal from 'sweetalert2';
import { BannerMapa } from '../ui/BannerMapa';
import { BannerInformacion } from '../ui/BannerInformacion';



const containerStyle = {
  width: "90vh",
  height: "250px",
};



const options = {
  disableDefaultUI: true,
  zoomControl: true,
};


export const InformacionPuntoScreen = () => {
  //LO DEMAS
  const [tocado, setTocado] = useState(true);
  const dispatch = useDispatch();  
  const { activePunto } = useSelector( state => state.puntos );
  const {id, nombre, latitud,longitud } = activePunto;
  const newLatitud = parseFloat(latitud)
  const newlongitud = parseFloat(longitud)
  const center = {
    lat: newLatitud,
    lng: newlongitud
  };
 
  



    const navigate = useNavigate()
    const handleReturn = (e) => {
      e.preventDefault()
      dispatch(eventClearActiveLugar())
      dispatch(temporalesLogout())
      navigate('/')
    }

  //GOOGLE MAPS 
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCSq_3C4tfeMTc5K1zJWEEKbaDD0jJ6R5A",
  });
  const [markers, setMarkers] = React.useState([]);

  // useEffect(() => {
  //   // Creamos una función para actualizar el estado con el clientWidth
  //   const updateWidth = () => {
  //     const width = document.body.clientWidth
  //     console.log(`updateWidth con ${width}`)
  //     setWidth(width)
  //   })
  const onMapMarker = React.useCallback((e) => {
    if (tocado) {
      setMarkers((current) => [
        ...current,
        {
          lat: e.latLng.lat(),
          lng: e.latLng.lng(),
        },
      ]);
      
      setTocado(false)
    }else{
      Swal.fire({
        icon: 'success',
        title: 'Lugar visualizado',
        text: 'Ya tienes toda la informacion necesaria en pantalla',
      })
    }

  }, [tocado]);

  if (loadError) return "Error";
  if (!isLoaded) return "Cargando...";


  return (
    <div>
        {/* TITULO */}
      <div className="pt-10 mb-10 flex justify-center items-start">
        <h1 className="text-3xl leading-6 font-medium text-gray-900">
          Informacion del Punto
        </h1>
      </div>
      { (tocado)? <BannerMapa/> : <BannerInformacion/>
          
        } 
      
      <div className="max-w-7xl mx-auto px-2 mt-30 sm:px-6 lg:px-8">
            {/* Description and details */}
            {/* AQUI COMIENZA */}
            <div className=" px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={handleReturn}
              >
                Regresar
              </button>
          </div>
            <div className="grid grid-cols-6 gap-6 pt-4">
                              <div className="col-span-6 sm:col-span-3">
                                  {/* Aqui metes esa  papada */}
                                  <ul className="pl-4 text-md space-y-2">
                                     <li className="text-gray-900"> <b>Nombre del Lugar: </b> {nombre}</li>
                                       <li className="text-gray-900"> <b>Latitud: </b>{latitud}</li>
                                     <li className="text-gray-900"> <b>Longitud: </b>{longitud}</li>
                                 </ul>

                              </div>
                              <div className="col-span-6 sm:col-span-3">
                           
                              </div>
                            </div>
                            {/* AQUI TERMINA */}
            
            
        </div>
        <div className="max-w-7xl mx-auto mt-5 flex justify-center px-2 mt-30 sm:px-6 lg:px-8">
            <GoogleMap
              mapContainerStyle={containerStyle}
              options={options}
              center={center}
              loadingElement={<p> Cargando </p>}
              zoom={12}
              onClick={onMapMarker}
            >
              {markers.map((marker) => (
                <Marker
                  key={id}
                  position={center}
                />
              ))}




            </GoogleMap>
                                
        </div>
    </div>
  )
}
