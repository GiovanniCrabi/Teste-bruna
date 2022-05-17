import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  color: {
    fonts: {
      heading: 'Roboto',
      body: 'Roboto',
    },
    green: {
      '900':'#8aa07c',
      '600': '#dcddd3'
    }
  },
  styles: {
    global: {
      body: {
        bg: '#FFFF',
        color: 'teal.800'
      }
    }
  }
})