import { extendTheme } from '@chakra-ui/react';
import { FONT_FAMILIES } from './constants';

const theme = extendTheme({
  initialColorMode: 'light',
  useSystemColorMode: false,
  fonts: { body: FONT_FAMILIES, heading: FONT_FAMILIES },
  components: {
    Input: { defaultProps: { variant: 'filled' } },
    NumberInput: { defaultProps: { variant: 'filled' } },
    Button: { defaultProps: { variant: 'solid' } },
    Link: { defaultProps: { color: 'orange' } },
  },
});

export { theme };
