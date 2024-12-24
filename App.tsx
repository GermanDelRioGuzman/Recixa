import React, {useRef,useState} from "react";
import { Dimensions,ScrollView, View, Text, StyleSheet, ImageBackground, StatusBar, TouchableOpacity, TextInput } from "react-native";

const App = () => {
  const { width, height } = Dimensions.get("window"); // Obtén las dimensiones de la pantalla

  const scrollViewRef = useRef();
  const [currentSection, setCurrentSection] = useState(0);
  const sections = [0,750,1500,2250,3000,3750]; 

  const [inputText, setInputText] = useState("");
  const handlePress = () => {
    alert(inputText);
  };

  const goToNextSection = () => {
    const nextSection = currentSection + 1;
    if (nextSection < sections.length) {
      scrollViewRef.current.scrollTo({
        y: sections[nextSection], 
        animated:true,
      });
      setCurrentSection(nextSection);
    }
  };

  const reload = () => {
   setCurrentSection(0);
  };

  return (
    <>
    <ScrollView ref ={scrollViewRef}>
      {/* Sección 1 */}
      <View style={styles.section}>
        <TouchableOpacity onPress={goToNextSection}>
          <ImageBackground
            source={require("/home/german/Escritorio/RECIXA/RECIXA/assets/1.png")}
            style={[styles.background, {width, height}]}
            resizeMode="contain" // Ajusta la imagen para que no se distorsione
          >
          </ImageBackground>
        </TouchableOpacity>
      </View>

      {/* Sección 2 */}
      <View style={styles.section}>
      <TouchableOpacity onPress={goToNextSection}>
          <ImageBackground
            source={require("/home/german/Escritorio/RECIXA/RECIXA/assets/2.png")}
            style={[styles.background, {width, height}]}
            resizeMode="contain" // Ajusta la imagen para que no se distorsione
          >
          </ImageBackground>
        </TouchableOpacity>
      </View>

      {/* Sección 3 */}
      <View style={styles.section}>
      <TouchableOpacity onPress={goToNextSection}>
          <ImageBackground
            source={require("/home/german/Escritorio/RECIXA/RECIXA/assets/3.png")}
            style={[styles.background, {width, height}]}
            resizeMode="contain" // Ajusta la imagen para que no se distorsione
          >
          </ImageBackground>
        </TouchableOpacity>
      </View>

      {/* Sección 4 */}
      <View style={styles.section}>
      <TouchableOpacity onPress={goToNextSection}>
          <ImageBackground
            source={require("/home/german/Escritorio/RECIXA/RECIXA/assets/4.png")}
            style={[styles.background, {width, height}]}
            resizeMode="contain" // Ajusta la imagen para que no se distorsione
          >
            
          </ImageBackground>
        </TouchableOpacity>
      </View>

      {/* Sección 5 */}
      <View style={styles.section}>
      <TouchableOpacity onPress={goToNextSection}>
          <ImageBackground
            source={require("/home/german/Escritorio/RECIXA/RECIXA/assets/5.png")}
            style={[styles.background, {width, height}]}
            resizeMode="contain" // Ajusta la imagen para que no se distorsione
          >
          </ImageBackground>
        </TouchableOpacity>
      </View>

      {/* Sección 6 */}
      <View>
        <ImageBackground
              source={require("/home/german/Escritorio/RECIXA/RECIXA/assets/6.png")}
              style={[styles.background, {width, height}]}
              resizeMode="contain" // Ajusta la imagen para que no se distorsione
            >
          <Text>Ingresa tu mensaje</Text>
          <TextInput
            style={styles.textInput}
            placeholder = "Escriba su mensaje"
            placeholderTextColor = "#000"
            value= {inputText}
            onChangeText = {(text) => setInputText(text)}
          />
          <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  section: {
    width: "100%", // Ocupa todo el ancho del contenedor padre
    marginBottom: 0, // Espaciado entre secciones

  },
  background: {
    width: "100%", // Ocupa el ancho completo del contenedor
    aspectRatio: 16 / 9, // Relación de aspecto (ajusta según tu imagen)
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"black",
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo semitransparente para el texto
    padding: 10,
    borderRadius: 10,
  },
  textInput: {
    width: "100%", // Ocupa todo el ancho del contenedor
    height: 50, // Altura del cuadro de texto
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: "#fff",
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default App;
