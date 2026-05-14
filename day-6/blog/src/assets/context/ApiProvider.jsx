import {  useState } from "react";
import { themeContext } from "./themeApi";

const ApiProvider = ({ children }) => {
  const [isLogged, setLogged] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
  
  const userdata = [
    { username: "testuser", password: "pass123" ,fullname:"testuser",role:"tester",profile:""},
    { username: "gokul", password: "pass123",fullname:"Gokulakrishnan" ,role:"developer" , profile:"/favicon.png"}
  ];

    const [userDatas ,setUserDatas] = useState(userdata)
  const [user, setUser] = useState(userdata);
  

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  // useEffect(() => {
  //   localStorage.setItem("theme", theme);
    
  //   const root = window.document.documentElement;
  //   root.classList.remove("light", "dark");
  //   root.classList.add(theme);
  // }, [theme]);

  return (
    <themeContext.Provider value={{ theme, setTheme, user, isLogged, setLogged , currentUser ,setCurrentUser,userDatas ,setUserDatas }}>
      {children}
    </themeContext.Provider>
  );
};

export default ApiProvider;
  