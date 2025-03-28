import { ApplicationTheme } from "@assets/theme";
import { StyleSheet } from "react-native";

export const useStyles = ({ colors, fonts }: ApplicationTheme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
    },
    content: {
      flex: 1,
      paddingHorizontal: 24,
    },
    title: {
      fontSize: 20,
      fontWeight: 700,
      marginBottom: 16,
      color: colors.white,
      marginTop: 60,
    },
    formContainer: { gap: 16 },
    imageBackground: {
      ...StyleSheet.absoluteFillObject,
      width: "100%",
      height: "100%",
    },
    logoText: { fontSize: 70, color: colors.norwayGreen },
    logoText2: {
      fontFamily: fonts.MTDPortraitScriptBounceRegular,
      position: "absolute",
      fontSize: 70,
      color: colors.white,
    },
    forgotPassword: {
      textDecorationLine: "underline",
      color: colors.white,
      fontSize: 14,
      marginBottom: -18,
    },
    staySignedIn: { fontSize: 14, color: colors.white },
    icon: { color: colors.white },
    staySignedInWrapper: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 10,
      gap: 4,
    },
    signInButton: { borderRadius: 70, marginTop: 32, height: 44 },
    signInWithText: { color: colors.white, fontSize: 14 },
    line: { height: 1, flex: 1, backgroundColor: colors.heatherBlue },
    signInWithWrapper: {
      flexDirection: "row",
      alignItems: "center",
      gap: 24,
      marginTop: 31,
    },
    iconRow: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: 24,
      marginTop: 24,
    },
    iconItem: {
      width: 52,
      height: 53,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 30,
      borderWidth: 1,
      borderColor: colors.white,
    },
    iconColor: {
      color: colors.white,
    },
    terms: {
      justifyContent: "flex-end",
      flex: 1,
    },
    termText: {
      textAlign: "center",
      fontSize: 12,
      color: colors.white,
    },
    termBold: { fontWeight: "700", fontSize: 12, color: colors.white },
    logoAppContainer: {
      justifyContent: "center",
      alignItems: "center",
      marginTop: "40%",
    },
  });
};
