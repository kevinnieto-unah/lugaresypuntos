import React, { useEffect, useMemo} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { lugarLoadingNombre, lugarLoadingTipo, lugarStartLoading} from '../../actions/lugares';
import queryString from 'query-string'
import { useForm } from '../../hooks/UseForm';
import { getLugarByName } from '../../selectors/getLugarByName';
//import { finishLoading, startLoading } from '../../actions/ui';



export const Buscador = () => {
	const { lugares } = useSelector( state => state.lugares );
	const navigate = useNavigate();
	const location = useLocation();
	const dispatch = useDispatch();
	const {q=''} = queryString.parse(location.search)

	  const [ formValues, handleInputChange, reset ] = useForm({
		searchText: q,
		tipoLugar: 'todos',
		});
	

	const {searchText, tipoLugar } = formValues;
	

	const lugaresFiltered =useMemo(()=>getLugarByName(searchText, lugares), [searchText,lugares]) 
	

	const handleBuscador = (e) => {
		e.preventDefault()
		navigate(`?q=${searchText}`)
		dispatch( lugarLoadingNombre( lugaresFiltered ) );
	
	}
	const handleReset = (e) => {
		e.preventDefault()
		reset({
			searchText: '',
			tipoLugar: 'todos',
		})
		navigate('/')
		dispatch( lugarStartLoading() );
	
	}
	useEffect(() => {
      if (tipoLugar === "todos") {

		dispatch( lugarStartLoading() );
	  }else{
		dispatch(lugarLoadingTipo(tipoLugar))
		
	  }

	
	   
	  }, [dispatch, tipoLugar ]);

	  
	

   
  return (
    	<div className="pt-4 max-w-5xl mx-auto justify-center">
    	    <div className="center">
				<input 
					type="text" 
					placeholder="Busca un lugar por nombre" 
					className="px-8 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
					name="searchText"
					value={searchText}
					onChange={handleInputChange}
				/>
			</div>

			<div className="flex items-center justify-between mt-4">
			  <p className="font-medium">
				Filters
			  </p>
			  <div>
					<button onClick={handleReset} className="px-4 py-2 bg-gray-100 m-2 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md justify-end">
						Reset Filter
					</button>
					<button onClick={handleBuscador} className="px-4 py-2 bg-gray-100 m-2 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md justify-end">
						Buscar
					</button>

			  </div>
			</div>
			<div>
			  <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
				<select 
					className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
					value={tipoLugar}
					name="tipoLugar"
                    onChange={handleInputChange}
				>
				  <option value={"todos"}>Tipo de Lugar</option>
				  <option value="colonia">Colonia</option>
				  <option value="institucion-gubernamental">Instituciones Gubernamentales</option>
				  <option value="centro-educativo">Instituciones Educativas</option>
				  <option value="centro-comercial">Centros Comerciales</option>
				</select>
			  </div>
			</div>
  		</div>
  )
}
