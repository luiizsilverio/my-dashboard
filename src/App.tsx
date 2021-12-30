import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from 'styled-components'

import Layout from "./components/Layout";
import light from "./styles/themes/light";

const App = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Layout />
    </ThemeProvider>
  )
}

export default App
