import { createContext, ReactNode, useContext, useState } from "react";

interface IAuthContext {
  logged: boolean;
  signIn(email: string, password: string): void;
  signOut(): void
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext)

interface ProviderProps {
  children: ReactNode;
}

function AuthProvider ({ children }: ProviderProps) {
  const [logged, setLogged] = useState<boolean>(() => {
    const isLogged = localStorage.getItem('@my-dashboard:logged')
    return !!isLogged
  })

  const signIn = (email: string, password: string) => {
    if (password === '123') {
      localStorage.setItem('@my-dashboard:logged', 'true')
      setLogged(true)
    } else {
      localStorage.setItem('@my-dashboard:logged', 'false')
      setLogged(false)
      alert('Senha ou usuário inválido')
    }
  }

  const signOut = () => {
    localStorage.removeItem('@my-dashboard:logged')
    setLogged(false)
  }

  return (
    <AuthContext.Provider value={{logged, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(): IAuthContext {
  const context = useContext(AuthContext)
  return context
}

export { AuthProvider, useAuth }