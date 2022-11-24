import { createContext, useContext, useEffect, useState } from 'react'


const AppContext = createContext({})

export const useApp = () => useContext(AppContext)

export const AppContextProvider = ({ children }: any) => {
  
  const [theme, setTheme]: any = useState()
  const [themeColor, setThemeColor]: any = useState()

  useEffect(() => {
    if (typeof window !== 'undefined') {
        
    
        if (!localStorage.getItem("theme")) {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                localStorage.setItem("theme", "3")
                setTheme(3)
            } else {
                localStorage.setItem("theme", "1")
                setTheme(1)
            }
        } else {
            setTheme(localStorage.getItem("theme"))
        }

        if (!localStorage.getItem("theme-color")) {
            localStorage.setItem("theme-color", "blue")
            setThemeColor(localStorage.getItem("theme-color"))
        } else {
            setThemeColor(localStorage.getItem("theme-color"))            
        }
    }
  }, [typeof window])

  const changeTheme = (e: any) => {    
    localStorage.setItem("theme", e)
    setTheme(e)
  }
  const changeThemeColor = (e: any) => {    
    localStorage.setItem("theme-color", e)
    setThemeColor(e)
  }

  useEffect(() => {

    const html: any = document.querySelector("html")

    html.className = 'theme-' + (theme == "1" ? "light" : theme == "2" ? "loess" : theme == "3" && "dark") + ' theme-' + themeColor

}, [theme, themeColor]);

  return (
    <AppContext.Provider value={{ theme, changeTheme, themeColor, changeThemeColor }}>
      {children}
    </AppContext.Provider>
  )
}