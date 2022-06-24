const functions = require("firebase-functions");
const admin = require("firebase-admin");
// const {signInWithEmailAndPassword}  = require("firebase/auth");



const serviceAccount = require("./permissions.json");
admin.initializeApp({
// importante el archivo permissions.json
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://lugares-y-puntos-118bd.firebaseio.com",
});
//REGISTER
// exports.register = functions.https.onRequest( (request, response) => {
//     const {name, email, password} = request.body;
  
  
//     admin.auth().createUser({email: email, name: name, password: password})
//         .then(function(userRecord) {
//           // See the UserRecord reference doc for the contents of userRecord.
//           console.log("Successfully created new user:", userRecord);
//           // eslint-disable-next-line max-len
//           response.status(200).send({ok: true, msg: "Usuario creado correctamente"});
//         })
//         .catch(function(error) {
//             console.log("Error creating new user:", error);
//             response.status(500).send({ok: false, msg: "Hubo problemas para registrar el usuario"});
//         });
//   });
// //LOGIN
//   exports.login = functions.https.onRequest( (request, response) => {
//     const { email, password} = request.body;
  
  
//     admin.auth().signInWithEmailAndPassword(auth, email,  password)
//         .then(function(firebaseUser) {
//           // See the UserRecord reference doc for the contents of userRecord.
//           console.log("User logueado:", firebaseUser);
//           // eslint-disable-next-line max-len
//           response.status(200).send({ok: true, msg: "Usuario creado correctamente"});
//         })
//         .catch(function(error) {
//             console.log("Error creating new user:", error);
//             response.status(500).send({ok: false, msg: "Hubo problemas para registrar el usuario"});
//         });
//   });


  //CREAR  PUNTOS
 const db = admin.firestore();  

  exports.newPunto = functions.https.onRequest( (request, response) => {
    const {nombre, latitud, longitud} = request.body;
  
    (async () => {
        try {
          await db.collection("puntos").doc().create({
            nombre: nombre,
            latitud: latitud,
            longitud: longitud,
          });
    
          return response.status(200).send({ ok: true, msg: "Punto guardado correctamente" });
        } catch (error) {
          console.log(error);
          response.status(500).send({ ok: false, msg:"Hubo problemas para guardar el punto" });
        }
      })();
  });
//VER TODOS LOS PUNTOS
  exports.obtenerPuntos = functions.https.onRequest( (request, response) => {
    (async () => {
        try {
          let query = db.collection("puntos");
          const querySnapshot = await query.get();
          let docs = querySnapshot.docs;
      
          const respuestadb = docs.map((doc) => ({
            id: doc.id,
            nombre: doc.data().nombre,
            latitud: doc.data().latitud,
            longitud: doc.data().longitud,
          }));
      
          return response.status(200).json(respuestadb);
        } catch (error) {
          console.log(error);
          response.status(500).send({ ok: false, msg:"Hubo problemas para ver el punto" });
        }
      })();
  });
//ACTUALIZAR PUNTO
  exports.updatePunto = functions.https.onRequest( (request, response) => {
    // Extrae el id del path
    const extractor = request.params[0]
    // Le quita el / del inicio
    const id= extractor.split("/")[1]
    const {nombre, latitud, longitud} = request.body;
    (async () => {
        try {
          const document = db.collection("puntos").doc(id);
          await document.update({
            nombre: nombre,
            latitud: latitud,
            longitud: longitud,
          });
          return response.status(200).json(document);
        } catch (error) {
          console.log(error);
          response.status(500).send({ ok: false, msg:"Hubo problemas para actualizar el punto" });
        }
      })();
  });
//ELIMINAR PUNTO
  exports.deletePunto = functions.https.onRequest( (request, response) => {
    // Extrae el id del path
    const extractor = request.params[0]
    // Le quita el / del inicio
    const id= extractor.split("/")[1]

    //Funcion para eliminar un punto
    (async () => {
        try {
          const doc = db.collection("puntos").doc(id);
          await doc.delete();
          return response.status(200).send({ ok: true, msg: "Punto eliminado correctamente" });
        } catch (error) {
          console.log(error);
          response.status(500).send({ ok: false, msg:"Hubo problemas para eliminar el punto" });
        }
      })();
  });

//---------------------------------------------------------------------------------------------//
//CREAR  LUGARES
exports.newLugar = functions.https.onRequest( (request, response) => {
  const {nombre, latitud, longitud, rango, tipo, disponibilidad, puntosDeReferencia} = request.body;

  (async () => {
    try {
       await db.collection("lugares").doc().create({
         nombre: nombre,
         latitud: latitud,
         longitud: longitud,
         rango: rango,
         tipo: tipo,
         disponibilidad: disponibilidad,
         numeroDePuntos: puntosDeReferencia.length

       });

      await db.collection("lugares").where("nombre", "==", nombre)
        .get()
        .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            const idRef = doc.id
            addPuntosDeReferencia(idRef,puntosDeReferencia)
        });
    })
      
      return response.status(200).send({ ok: true, msg: "Peticion logro terminar" });
    } catch (error) {
      console.log(error);
      response.status(500).send({ ok: false, msg:"Hubo problemas para guardar el punto" });
    }
  })();

  
  
});
function addPuntosDeReferencia(id,arreglo) {
  arreglo.map((row) => {
    db.collection(`lugares/${id}/puntosDeReferencia`).doc(row.id).create({
      nombre: row.nombre,
      latitud: row.latitud,
      longitud: row.longitud,

    });
  })
}

//VER TODOS LOS LUGARES
exports.obtenerLugares = functions.https.onRequest( (request, response) => {
  (async () => {
      try {
        let query = db.collection("lugares");
        const querySnapshot = await query.get();
        let docs = querySnapshot.docs;

        const respuestadb = docs.map((doc) =>
        (
              
            {id: doc.id,
              nombre: doc.data().nombre,
              latitud: doc.data().latitud,
              longitud: doc.data().longitud,
              rango: doc.data().rango,
              disponibilidad: doc.data().disponibilidad,
              tipo: doc.data().tipo,
              numeroDePuntos: doc.data().numeroDePuntos,
            }
         ));
        return response.status(200).json(respuestadb);          
      
      } catch (error) {
        console.log(error);
        response.status(500).send({ ok: false, msg:"Hubo problemas para ver el punto" });
      }
    })();
});

//VER LUGAR POR ID
exports.obtenerLugarporId = functions.https.onRequest( (request, response) => {  
  (async () => {
    // Extrae el id del path
    const extractor = request.params[0]
    // Le quita el / del inicio
    const id= extractor.split("/")[1]
    console.log(id);
      try {
        const lugares =  await db.collection("lugares").doc(id).get()


        let query = db.collection(`lugares/${id}/puntosDeReferencia`);
        const querySnapshot =await query.get();
        let docs =querySnapshot.docs;
        const referencias =[]
        docs.map(snapHijo=>{
              referencias.push({
                id: snapHijo.id,
                ...snapHijo.data()
              })
        })

        const respuestadb ={
          id: id,
          nombre: lugares.data().nombre,
          latitud: lugares.data().latitud,
          longitud: lugares.data().longitud,
          rango: lugares.data().rango,
          disponibilidad: lugares.data().disponibilidad,
          tipo: lugares.data().tipo,
          puntosDeReferencia: referencias,
        }

        return response.status(200).json(respuestadb);          
      
      } catch (error) {
        console.log(error);
        response.status(500).send({ ok: false, msg:"Hubo problemas para ver el punto" });
      }
    })();
});


//BUSQUEDA POR NOMBRE
exports.buscarLugarPorNombre = functions.https.onRequest( (request, response) => {
  (async () => {
    const extractor = request.params[0]
    // Le quita el / del inicio
    const nombre= extractor.split("/")[1]
      try {
        db.collection("lugares").where("nombre", "==", nombre)
        .get()
        .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            const respuesta= doc.data();
            return response.status(200).json(respuesta); 
        });
    })
        
      } catch (error) {
        console.log(error);
        response.status(500).send({ ok: false, msg:"Hubo problemas para ver el punto" });
      }
    })();
});

//BUSQUEDA POR TIPO DE LUGAR
exports.buscarLugarPorTipo = functions.https.onRequest( (request, response) => {
  (async () => {
    const extractor = request.params[0]
    // Le quita el / del inicio
    const tipo= extractor.split("/")[1]

      try {
        const lugaresObtenidos =[]
        db.collection("lugares").where("tipo", "==", tipo)
        .get()
        .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            lugaresObtenidos.push({
              ...doc.data()
            })
             
        });
        return response.status(200).json(lugaresObtenidos);
    })
      
      } catch (error) {
        console.log(error);
        response.status(500).send({ ok: false, msg:"Hubo problemas para ver el punto" });
      }
    })();
});


//ACTUALIZAR LUGAR
exports.updateLugar = functions.https.onRequest( (request, response) => {
  // Extrae el id del path
  const extractor = request.params[0]
  // Le quita el / del inicio
  const id= extractor.split("/")[1]
  const {nombre, latitud, longitud, rango, tipo, disponibilidad, puntosDeReferencia} = request.body;
  (async () => {
      try {
        const document = db.collection("lugares").doc(id);
        await document.update({
          nombre: nombre,
          latitud: latitud,
          longitud: longitud,
          rango: rango,
          tipo: tipo,
          disponibilidad: disponibilidad,
        
        });
        actualizarPuntosDeReferencia(id,puntosDeReferencia)
      
        return response.status(200).send({ ok: true, msg:"La peticion se completo" });
      } catch (error) {
        console.log(error);
        response.status(500).send({ ok: false, msg:"Hubo problemas para actualizar el lugar" });
      }
    })();
});
function actualizarPuntosDeReferencia(id,arreglo) {
  
  (async () => {
    console.log(id);
    const doc =db.collection(`lugares/${id}/puntosDeReferencia`).doc()
    await doc.delete()
    // arreglo.map((row) => {
    //   db.collection(`lugares/${id}/puntosDeReferencia`).doc(row.id).create({
    //     nombre: row.nombre,
    //     latitud: row.latitud,
    //     longitud: row.longitud,

    //   });
    // })
  })();
}

//ELIMINAR PUNTO
exports.deleteLugar = functions.https.onRequest( (request, response) => {
  // Extrae el id del path
  const extractor = request.params[0]
  // Le quita el / del inicio
  const id= extractor.split("/")[1]
  console.log(id);

  //Funcion para eliminar un punto
  (async () => {
      try {
        const doc = db.collection("lugares").doc(id);
        await doc.delete();
        return response.status(200).send({ ok: true, msg: "Lugar eliminado correctamente" });
      } catch (error) {
        console.log(error);
        response.status(500).send({ ok: false, msg:"Hubo problemas para eliminar el lugar" });
      }
    })();
});