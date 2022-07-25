import { useContext, useState } from "react";
import { Alert } from "react-native";
import { AuthContent } from "../components/Auth/AuthContent";
import { LoadingOverLay } from "../components/UI/LoadingOverLay";
import { createUser } from "../util/auth";
import { AuthContext } from "../store/auth-context";

export const SignUpScreen = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authCtx = useContext(AuthContext);

  const signupHandler = async ({ email, password }) => {
    setIsAuthenticating(true);
    try {
      const token = await createUser(email, password);
      authCtx.authenticate(token);
    } catch {
      Alert.alert(
        'Authentification failed!',
        'Could not crete user. Please check your input and try again later'
      );
    }
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverLay message="Creating user... " />
  }
  return (
    <AuthContent onAuthenticate={signupHandler} />
  )
}
