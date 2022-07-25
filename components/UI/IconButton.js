import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export const IconButton = ({ icon, color, size, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Ionicons name={icon} color={color} size={size} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {

  },
  buttonText: {

  },
  pressed: {
    
  }
})