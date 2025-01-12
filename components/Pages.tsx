import React, { useRef, useState } from "react";
import { useWindowDimensions, Dimensions, ScrollView, View, Alert, StyleSheet, ImageBackground, StatusBar, TouchableOpacity, TextInput } from "react-native";
import WhatsAppButton from "../components/WhatsAppButton";
import Navbar from "../components/Navbar";

const Pages = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);

  // Function to scroll to the specified section
  const scrollToSection = (sectionRef) => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const { height } = Dimensions.get("window");
  const { width } = useWindowDimensions();

  const backgroundImage1 = width > 600
    ? require("../assets/1.png")
    : require("../assets/1small.png");

  const backgroundImage2 = width > 600
    ? require("../assets/2.png")
    : require("../assets/2small.png");

  const backgroundImage3 = width > 600
    ? require("../assets/3.png")
    : require("../assets/3small.png");

  const backgroundImage4 = width > 600
    ? require("../assets/4.png")
    : require("../assets/4small.png");

  const backgroundImage5 = width > 600
    ? require("../assets/5.png")
    : require("../assets/5small.png");

  // Use scrollViewRef for horizontal scrolling
  const scrollViewRef = useRef();
  const [currentSection, setCurrentSection] = useState(0);
  const sections = [0, 700, 1400, 2100, 2800];

  const goToNextSection = () => {
    const nextSection = currentSection + 1;
    if (nextSection < sections.length) {
      scrollViewRef.current.scrollTo({
        x: width * nextSection,
      });
      setCurrentSection(nextSection);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Navbar */}
      <Navbar scrollToSection={scrollToSection} />

      {/* ScrollView for Horizontal Scrolling */}
      <ScrollView
        ref={scrollViewRef}
        horizontal={true} // Horizontal Scroll
        nestedScrollEnabled={true}
        style={styles.horizontalScroll}
        contentContainerStyle={styles.contentContainer}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.verticalScroll}>
          {/* Section 1 */}
          <View ref={section1Ref} style={styles.section}>
            <ImageBackground
              source={backgroundImage1}
              style={[styles.background, { width, height }]}
              resizeMode="contain"
            ></ImageBackground>
          </View>

          {/* Section 2 */}
          <View ref={section2Ref} style={styles.section}>
            <ImageBackground
              source={backgroundImage2}
              style={[styles.background, { width, height }]}
              resizeMode="contain"
            ></ImageBackground>
          </View>

          {/* Section 3 */}
          <View ref={section3Ref} style={styles.section}>
            <ImageBackground
              source={backgroundImage3}
              style={[styles.background, { width, height }]}
              resizeMode="contain"
            ></ImageBackground>
          </View>

          {/* Section 4 */}
          <View ref={section4Ref} style={styles.section}>
            <ImageBackground
              source={backgroundImage4}
              style={[styles.background, { width, height }]}
              resizeMode="contain"
            ></ImageBackground>
          </View>

          {/* Section 5 */}
          <View ref={section5Ref} style={styles.section}>
            <ImageBackground
              source={backgroundImage5}
              style={[styles.background, { width, height }]}
              resizeMode="contain"
            >
              <WhatsAppButton />
            </ImageBackground>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    width: "100%", // Full width of the parent container
    marginBottom: 0,
  },
  horizontalScroll: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  verticalScroll: {
    flex: 1,
  },
  contentContainer: {
    flexDirection: "row", // Horizontal scroll
    flexWrap: "nowrap",
  },
  background: {
    width: "100%", // Full width of the container
    height: "100%",
    aspectRatio: 16 / 9,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
});

export default Pages;
