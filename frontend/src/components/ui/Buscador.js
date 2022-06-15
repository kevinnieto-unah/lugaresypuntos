import React from 'react'



export const Buscador = () => {
    
   
  return (
    
        <div className="pt-4 max-w-5xl mx-auto justify-center">
            <div className="center">
	

	<input type="text" placeholder="Search by listing, location, bedroom number..." className="px-8 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"/>
	  </div>

	<div className="flex items-center justify-between mt-4">
	  <p className="font-medium">
		Filters
	  </p>

	  <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md">
		Reset Filter
	  </button>
	</div>

	<div>
	  <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
		<select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
		  <option value="">Tipo de Lugar</option>
		  <option value="colonia">Colonia</option>
		  <option value="inst-gub">Instituciones Gubernamentales</option>
		  <option value="instituciones-educactivas">Instituciones Educativas</option>
		  <option value="centros-comerciales">Centros Comerciales</option>
		</select>
	  </div>
	</div>
  </div>
  )
}
