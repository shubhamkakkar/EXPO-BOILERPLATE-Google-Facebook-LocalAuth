import React, { PureComponent, Fragment } from 'react';
import { View } from "react-native"

import LoginScreen from "../LoginSignup/LoginSignup"
import GoogleAuth from '../GoogleAuth/GoogleAuth';
import FacebookAuth from '../FacebookAuth/FacebookAuth';

class AuthScreen extends PureComponent {

  render() {

    return (
      <Fragment>
        <View style={{ flex: 3 }}>
          <LoginScreen />
        </View>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <GoogleAuth />
          <FacebookAuth />
        </View>
      </Fragment>
    );
  }
}


export default AuthScreen;
