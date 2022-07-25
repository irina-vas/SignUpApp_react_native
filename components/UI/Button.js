import { Pressable, Text, View, StyleSheet } from "react-native"

export const Button = ({ children, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <View>
        <Text style={StyleSheet.buttonText}>{children}</Text>
      </View>
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