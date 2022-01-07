import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from 'styled-components'

import { useTheme } from './hooks/theme'
import Routes from "./routes";

const App = () => {
  const { theme } = useTheme()

  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  )
}

export default App
