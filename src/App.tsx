import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from 'styled-components'

import Layout from "./components/Layout";
// import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import Details from "./pages/Details";

const App = () => {
  return (
    <ThemeProvider theme={ dark }>
      <GlobalStyle />
      <Layout>
        <Details />
      </Layout>
    </ThemeProvider>
  )
}

export default App
