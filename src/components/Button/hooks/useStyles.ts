import { useTheme } from "@hooks/useTheme";
import { StyleSheet } from "react-native";

export const useStyles = (
  mainColor?: string,
  textColor?: string,
  radius?: number,
  isDisable?: boolean
) => {
  const { colors, alpha } = useTheme();
  const mainColorOverride =
    (mainColor || colors.white) + (isDisable ? alpha.alpha_10 : "");
  const radiusOverride = radius || 8;
  const isMainColorWithAlpha = isDisable && mainColor && mainColor?.length > 7;
  return StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 16,
      borderRadius: radiusOverride,
      minHeight: 44,
    },
    outlineContainer: {
      borderColor: mainColorOverride,
      borderWidth: 1,
      opacity: isDisable ? 0.5 : 1,
    },
    bgContainer: {
      backgroundColor: isMainColorWithAlpha ? mainColor : mainColorOverride,
      opacity: isMainColorWithAlpha ? 0.5 : 1,
    },
    text: {
      color: textColor,
      fontSize: 16,
      fontWeight: 600,
    },
  });
};
