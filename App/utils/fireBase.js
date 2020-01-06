import firebase from 'firebase/app';
//configuracion privada
const firebaseConfig = {
  apiKey: 'AIzaSyDRqqsxRdq4rxFsFtKL_xQDjVZWk4OhOvM',
  authDomain: 'tenedores-e3a43.firebaseapp.com',
  databaseURL: 'https://tenedores-e3a43.firebaseio.com',
  projectId: 'tenedores-e3a43',
  storageBucket: 'tenedores-e3a43.appspot.com',
  messagingSenderId: '672713199764',
  appId: '1:672713199764:web:f6e7325f052f3f64d5e481',
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
