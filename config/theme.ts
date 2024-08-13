import {
  extendTheme,
  ColorMode,
  ChakraTheme,
  ThemeComponentProps,
  useColorModeValue,
} from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

interface IThemeMode {
  Light: ColorMode
  Dark: ColorMode
}

export const ThemeMode: IThemeMode = {
  Light: 'light',
  Dark: 'dark',
}

export const mobileBreakpointsMap = {
  base: true,
  md: true,
  lg: true,
  xl: false,
}

// Theme Config
const config = {
  initialColorMode: ThemeMode.Dark,
  useSystemColorMode: false,
}

const colors = {
  black: '#121212',
}

const styles = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  global: (props: any) => ({
    body: {
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('gray.100', '#121212')(props),
    },
  }),
}

const textVariants = {
  emphasis: () => ({
    color: useColorModeValue('teal.500', 'cyan.200'),
  }),
  description: () => ({
    color: useColorModeValue('gray.800', 'gray.400'),
  }),
  accent: () => ({
    color: useColorModeValue('black.400', 'cyan.200'),
  }),
  accentAlternative: () => ({
    color: useColorModeValue('#595959', '#A6A6A6'),
  }),
}

const theme = extendTheme({
  config,
  fonts: {
    body: 'Poppins',
  },
  colors,
  styles,
  components: {
    Link: {
      baseStyle: () => ({
        color: useColorModeValue('teal.500', 'cyan.200'),
      }),
      variants: {
        ...textVariants,
        description: () => ({
          color: useColorModeValue('gray.800', 'gray.400'),
          _hover: {
            color: useColorModeValue('teal.500', 'cyan.200'),
            textDecoration: 'none',
          },
        }),
      },
    },
    Text: {
      variants: textVariants,
    },
    Heading: {
      variants: textVariants,
    },
    Button: {
      variants: {
        outline: () => ({
          borderColor: useColorModeValue('black.400', 'cyan.200'),
          _hover: {
            backgroundColor: useColorModeValue(
              'rgba(49, 151, 149, 0.06)',
              'rgba(157, 236, 249, 0.06)'
            ),
          },
        }),
        outlineAlternative: () => ({
          borderWidth: '1px',
          borderRadius: 0,
          borderColor: useColorModeValue('#595959', 'whiteAlpha.500'),
          _hover: {
            backgroundColor: useColorModeValue(
              'rgba(49, 151, 149, 0.06)',
              'rgba(157, 236, 249, 0.06)'
            ),
          },
        }),
      },
    },
    Icon: {
      variants: {
        accent: () => ({
          borderColor: useColorModeValue('gray.800', 'gray.400'),
        }),
      },
    },
    Divider: {
      variants: {
        solid: () => ({
          borderColor: useColorModeValue('gray.800', 'gray.400'),
          marginLeft: 'auto',
          marginRight: 'auto',
        }),
      },
    },
  },
})
export default theme
