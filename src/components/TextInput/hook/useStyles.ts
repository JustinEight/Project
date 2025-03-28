import { INPUT_HEIGHT } from "@constants/index";
import { useTheme } from "@hooks/useTheme";
import { StyleSheet } from "react-native";

export const useStyles = () => {
  const { colors, alpha, fonts } = useTheme();
  return StyleSheet.create({
    container: {
      height: INPUT_HEIGHT,
      justifyContent: "center",
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
    },
    textInput: {
      height: "100%",
      flex: 1,
      color: colors.midnightExpressBlue,
      fontSize: 16,
      fontFamily: fonts.Quicksand,
    },
    placeholder: {
      color: colors.baliBlue,
    },
    border: {
      borderRadius: 8,
      paddingHorizontal: 16,
      backgroundColor: colors.white,
      borderWidth: 1,
      borderColor: colors.baliBlue + alpha.alpha_30,
    },
    bottomBorder: {
      borderBottomWidth: 1,
      borderBottomColor: colors.white,
    },
    bottomBorderText: {
      color: colors.white,
      marginBottom: -18,
    },
    label: {
      color: colors.gunmetalBlue,
      fontSize: 13,
      fontWeight: "600",
      marginBottom: 2,
    },
    noteText: { fontSize: 12, color: colors.manateeBlue, marginTop: 2 },
  });
};
