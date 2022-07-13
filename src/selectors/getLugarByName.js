export const getLugarByName = ( name ='',lugares)=>{

    if( name === ''){
        return []

    }
    name = name.toLowerCase()
    return lugares.filter( hero => hero.nombre.toLowerCase().includes(name));

}