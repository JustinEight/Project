const commonColors = {
  white: "#ffffff",
  transparent: "rgba(0,0,0,0)",
  black: "#000000",
  baliBlue: "#919EAB", //rgb(145, 158, 171)
  fireBrickRed: "#A51C30", //rgb(165, 28, 48)
  midnightExpressBlue: "#212B36", //rgb(33, 43, 54)
  bayouxBlue: "#637381",
};

export const lightColors = {
  ...commonColors,
};
export const darkColors = {
  ...commonColors,
};

export const alpha = {
  alpha_100: "FF",
  alpha_95: "F2",
  alpha_90: "E6",
  alpha_85: "D9",
  alpha_80: "CC",
  alpha_75: "BF",
  alpha_70: "B3",
  alpha_65: "A6",
  alpha_60: "99",
  alpha_55: "8C",
  alpha_50: "80",
  alpha_45: "73",
  alpha_40: "66",
  alpha_35: "59",
  alpha_30: "4D",
  alpha_25: "40",
  alpha_20: "33",
  alpha_15: "26",
  alpha_10: "1A",
  alpha_5: "0D",
  alpha_0: "00",
};
export const fonts = {
  MTDPortraitScriptBounceRegular: "PortraitScriptBounceRegular",
  Quicksand: "Quicksand",
};
interface ApplicationTheme {
  colors: typeof lightColors;
  alpha: typeof alpha;
  fonts: typeof fonts;
}
export type ColorsTheme = typeof lightColors;
export type AlphaTheme = typeof alpha;

const LightTheme: ApplicationTheme = {
  colors: lightColors,
  alpha,
  fonts,
};
export const DarkTheme: ApplicationTheme = {
  colors: darkColors,
  alpha,
  fonts,
};
const DefaultTheme = LightTheme;
export default DefaultTheme;
