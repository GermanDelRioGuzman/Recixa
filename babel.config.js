module.exports = {
    presets: [
      ["@babel/preset-env", { targets: { node: "current" } }],
      "@babel/preset-react",
      "babel-preset-expo" // Si estás usando Expo
    ],
  };
  