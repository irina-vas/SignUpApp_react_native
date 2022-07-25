import { View, StyleSheet, Text, TextInput } from "react-native"

export const Input = ({
  label,
  keyboardType,
  secure,
  onUpdateValue,
  value,
  isInvalid
}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.label, isInvalid && styles.labelInvalid]}>{label}</Text>
      <TextInput
        style={[styles.input, isInvalid && styles.linputInvalid]}
        autoCapitalize="none"
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={onUpdateValue}
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  label: {

  },
  labelInvalid: {

  },
  input: {

  },
  linputInvalid: {

  }
})