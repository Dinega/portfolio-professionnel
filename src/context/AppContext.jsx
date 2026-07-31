import { createContext, useState} from"react";
export const AppContext = createContext();
export function ThemeProvider({ children}) {
    const [dark , setDark] = useState(false);
    return (
        <AppContext.Provider value={{ dark, setDark }}>
        {children}
        </AppContext.Provider>
    );
}