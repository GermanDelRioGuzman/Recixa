import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

const ResponsiveButton = ({ onPress, title }) => {
  const { width } = Dimensions.get('window'); // Obtén el ancho de la pantalla

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { width: width * 0.8 }]} // Botón ocupa el 80% del ancho de la pantalla
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ResponsiveButton;
