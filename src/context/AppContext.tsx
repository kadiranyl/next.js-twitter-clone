import { createContext, useContext, useEffect, useState } from 'react'


const AppContext = createContext({})

export const useApp = () => useContext(AppContext)

export const AppContextProvider = ({ children }: any) => {
  
  const [theme, setTheme] = useState()

  useEffect(() => {
    if (typeof window !== 'undefined') {
        
    
        if (!localStorage.getItem("theme")) {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                localStorage.setItem("theme", "3")
            } else {
                localStorage.setItem("theme", "1")
            }
        } else {
            setTheme(localStorage.getItem("theme"))
        }
      }
  }, [])

  const changeTheme = (e: any) => {    
    localStorage.setItem("theme", e)
    setTheme(e)
  }

  useEffect(() => {
    console.log(theme);
    
    document.body.className = 'theme-' + (theme == "1" ? "light" : theme == "2" ? "loess" : theme == "3" && "dark")
  }, [theme]);

  return (
    <AppContext.Provider value={{ theme, changeTheme }}>
      {children}
    </AppContext.Provider>
  )
}