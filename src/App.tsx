import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from 'styled-components'

import Layout from "./components/Layout";
import light from "./styles/themes/light";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Layout>
        <Dashboard />
      </Layout>
    </ThemeProvider>
  )
}

export default App
