module.exports = {
  presets: ["module:@react-native/babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["."],
        alias: {
          "@components": "./src/components",
          "@navigation": "./src/navigation",
          "@assets": "./src/assets",
          "@screens": "./src/screens",
          "@constants": "./src/constants",
          "@hooks": "./src/hooks",
          "@utils": "./src/utils",
          "@redux": "./src/redux",
          "@services": "./src/services",
          "@localization": "./src/localization",
        },
      },
    ],
    "react-native-reanimated/plugin",
  ],
};
