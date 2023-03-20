
        // Import the functions you need from the SDKs you need
      
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
      
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-analytics.js";
      
        import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";
        // TODO: Add SDKs for Firebase products that you want to use
      
        // https://firebase.google.com/docs/web/setup#available-libraries
      
      
        // Your web app's Firebase configuration
      
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
      
        const firebaseConfig = {
      
          apiKey: "AIzaSyA86pU7UjqYf0WONz6Q92BhViGt1HXuEs0",
      
          authDomain: "trashmarket-e84ca.firebaseapp.com",
      
          projectId: "trashmarket-e84ca",
      
          storageBucket: "trashmarket-e84ca.appspot.com",
      
          messagingSenderId: "887542065701",
      
          appId: "1:887542065701:web:110e6ca398709669ecedcc",
      
          measurementId: "G-RE9T5N2LY2"
      
        };
      
      
        // Initialize Firebase
      
        const app = initializeApp(firebaseConfig);
      
        const analytics = getAnalytics(app);

        const db = getFirestore();                                                

        export const saveUsuario = (nombre, apellido, correo, tel, password) =>
          addDoc(collection(db,'usuarios'),
          {
            nombre,
            apellido,
            correo,
            tel,
            password
        });
      