import DefaultTheme from '@assets/theme';
import {useColorScheme} from 'react-native';

export function useTheme() {
  const colorScheme = useColorScheme();
  if (colorScheme === 'dark') {
    return DefaultTheme;
  }
  return DefaultTheme;
}
