import { createContext, useEffect, useState } from "react"
import DataDoc from "../Helpers/login.json";
import Datapatient from "../Helpers/loginPatient.json";
import DataAdmin from "../Helpers/loginAdmin.json";


export const AuthContext = createContext();


const AuthProvider = ({children}) => {
  
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

  useEffect(() => {
    try{
      localStorage.setItem("user",JSON.stringify(user));
    }catch(e){
      localStorage.removeItem("user");
      console.log(e);
    }
    
  }, [user]);
  

  const contextValue = {
    user,
    login(type) {
      if (type === "D"){
        setUser(DataDoc);
      }else if(type === "P"){
        setUser(Datapatient);
      }else if (type === "A"){
        setUser(DataAdmin)
      }
    },
    logout() {
      setUser(null);
    },
    isLogged() {
      return !!user;
    },
  };

  return (<AuthContext.Provider value={contextValue}>
    {children}
  </AuthContext.Provider>)
}


export default AuthProvider;
