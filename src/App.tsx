import { GlobalStyle } from './styles/global'
import { theme } from './styles/theme'
import { ThemeProvider } from 'styled-components'
import { Router } from './router/index'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router/>
    </ThemeProvider>
  )
}

export default App
