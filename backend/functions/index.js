const functions = require("firebase-functions");
const admin = require("firebase-admin");


const serviceAccount = require("./permissions.json");
admin.initializeApp({
// importante el archivo permissions.json
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://lugares-y-puntos-118bd.firebaseio.com",
});

exports.register = functions.https.onRequest( (request, response) => {
    const {name, email, password} = request.body;
  
  
    admin.auth().createUser({email: email, name: name, password: password})
        .then(function(userRecord) {
          // See the UserRecord reference doc for the contents of userRecord.
          console.log("Successfully created new user:", userRecord);
          // eslint-disable-next-line max-len
          response.status(200).send({ok: true, msg: "Usuario creado correctamente"});
        })
        .catch(function(error) {
            console.log("Error creating new user:", error);
            response.status(500).send({ok: false, msg: "Hubo problemas para registrar el usuario"});
        });
  });

// PUNTOS
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

  exports.updatePunto = functions.https.onRequest( (request, response) => {
    const {uid} = request.params.uid;
    const {nombre, latitud, longitud} = request.body;
  
    (async () => {
        try {
          const document = db.collection("puntos").doc(uid);
          await document.update({
            nombre: nombre,
            latitud: latitud,
            longitud: longitud,
          });
          return res.status(200).json();
        } catch (error) {
          console.log(error);
          response.status(500).send({ ok: false, msg:"Hubo problemas para actualizar el punto" });
        }
      })();
  });
