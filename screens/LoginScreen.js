import { useContext, useState } from 'react';
import { Alert } from 'react-native';
import { AuthContent } from "../components/Auth/AuthContent";
import { LoadingOverLay } from '../components/UI/LoadingOverLay';
import { login } from '../util/auth';

export const LoginScreen = () => {

  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authCtx = useContext(AuthContent);


  const loginHandler = async ({ email, password }) => {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        'Authentification failed!',
        'Could not log you in. Please check your credentials or try again later'
      );
    }
    setIsAuthenticating(false);
  };

  if (isAuthenticating) {
    return <LoadingOverLay message="Logging you in... " />
  }
  return (
    <AuthContent isLogin onAuthenticate={loginHandler} />
  )
}
