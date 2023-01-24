import { createTheme, ThemeProvider } from '@mui/material'

const theme = createTheme({
   palette: {
      primary: {
         main: '#FFFFFF',
         dark: '#222222',
         lightDark: '#4d4e51',
         green: '#048741',
         greenGradient: 'linear-gradient(180deg, #0CBB6B, #027B44)',
         adminBackground: '#f5f5f5',
      },
      secondary: {
         main: '#d9d9d9',
         orange: '#e4772f',
      },
      tertiary: {
         main: '#f91515',
         blue: '#3977c0',
      },
   },
})

export const ThemeSetup = ({ children }) => {
   return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
