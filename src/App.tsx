import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from 'styled-components'

import Routes from "./routes";

// import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

const App = () => {
  return (
    <ThemeProvider theme={ dark }>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  )
}

export default App
