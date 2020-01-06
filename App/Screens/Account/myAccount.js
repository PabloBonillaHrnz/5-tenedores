import React, {useEffect, useState} from 'react';
import * as firebase from 'firebase';

import Loading from '../../Components/Loading';
import UserGuest from './userGuest';
import UserLogged from './userLogged';

export default function myAccount() {
  const [login, setLogin] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      !user ? setLogin(false) : setLogin(true); //si user es false o null (!)
      console.log(user);
    });
  }, []);

  if (login === null) {
    return <Loading isVisible={true} text="Cargando...." />;
  }

  if (login) {
    return <UserLogged />;
  } else {
    return <UserGuest />;
  }
}
