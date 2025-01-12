import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Navbar = ({ scrollToSection }) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.logo}>My Logo</Text>
      <View style={styles.navLinks}>
        <TouchableOpacity onPress={() => scrollToSection(section1Ref)}>
          <Text style={styles.navLinkText}>Section 1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => scrollToSection(section2Ref)}>
          <Text style={styles.navLinkText}>Section 2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => scrollToSection(section3Ref)}>
          <Text style={styles.navLinkText}>Section 3</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => scrollToSection(section4Ref)}>
          <Text style={styles.navLinkText}>Section 4</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => scrollToSection(section5Ref)}>
          <Text style={styles.navLinkText}>Section 5</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#333",
    padding: 15,
    zIndex: 100,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  navLinks: {
    display: "flex",
    flexDirection: "row",
  },
  navLinkText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 15,
  },
});

export default Navbar;
