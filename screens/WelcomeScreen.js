import axios from 'axios';
import { useContext, useEffect } from 'react';
import { View, StyleSheet, Text } from "react-native"
import { AuthContext } from '../store/auth-context';

export const WelcomeScreen = () => {
  const [fetchedMessage, setFetchedMessage] = useState('');
  const authCtx = useContext(AuthContext);
  const token = authCtx.token;
  useEffect(() => {
    axios.get('https://react-native-app-aedcf-default-rtdb.firebaseio.com/message.json?auth=' + token)
      .then((response) => {
        setFetchedMessage(response.data);
      })
  }, [token]);
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{fetchedMessage}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32
  },
  title: {

  }
})