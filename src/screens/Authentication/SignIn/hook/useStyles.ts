import { useTheme } from "@hooks/useTheme";
import { StyleSheet } from "react-native";

export const useStyles = () => {
  const { colors } = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
    },
    content: {
      flex: 1,
      paddingHorizontal: 24,
    },
    logoImage: { height: 150, marginBottom: "5%" },
    title: {
      fontSize: 20,
      fontWeight: 700,
      // textAlign: 'center',
      marginBottom: 16,
      color: colors.white,
      marginTop: 60,
    },
    noAcc: {
      fontSize: 14,
      marginBottom: 24,
      textAlign: "center",
    },
    signUp: {
      color: colors.fireBrickRed,
      fontSize: 14,
      fontWeight: 600,
    },
    formContainer: { gap: 16 },
    forgotPW: {
      alignSelf: "flex-end",
      textDecorationLine: "underline",
    },
  });
};
