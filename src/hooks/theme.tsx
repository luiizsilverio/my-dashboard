import { createContext, useState, useContext, ReactNode } from 'react'

import dark from '../styles/themes/dark'
import light from '../styles/themes/light'

interface ITheme {
  title: string

  colors: {
    primary: string
    secundary: string
    complementar: string
    white: string
    black: string
    gray: string
    success: string
    info: string
    warning: string
  }
}

interface IThemeContext {
  toggleTheme(): void
  theme: ITheme
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext)

interface ProviderProps {
  children: ReactNode;
}

function ThemeProvider ({ children }: ProviderProps) {
  const [theme, setTheme] = useState<ITheme>(() => {
    const saved = localStorage.getItem('@my-dashboard:theme')

    if (saved) {
      return JSON.parse(saved)
    } else {
      return dark
    }
  })

  const toggleTheme = () => {
    if (theme.title === 'dark') {
      setTheme(light);
      localStorage.setItem('@my-dashboard:theme', JSON.stringify(light) )
    }
    else {
      setTheme(dark);
      localStorage.setItem('@my-dashboard:theme', JSON.stringify(dark) )
    }
  }

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      { children }
    </ThemeContext.Provider>
  )
}


function useTheme(): IThemeContext {
  const context = useContext(ThemeContext)
  return context
}

export { ThemeProvider, useTheme }