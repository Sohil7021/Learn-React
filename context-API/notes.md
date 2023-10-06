 Context API:- is just passing data globally. 1-Just craete folder and in file create context data
2-context has a provider just provide in fragment <UserContext> Passing Component <UserContext/>


<!-- Another example
 -->
import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}