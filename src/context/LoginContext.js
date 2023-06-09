import { createContext, useState } from "react";

export const LoginContext = createContext();

export function LoginContextProvider({ children }) {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  //   const [sampleData, setSampleData] = useState("");

  //   async function fetchData() {
  //     try {
  //       const response = await fetch("https://randomuser.me/api/?results=2000");
  //       const data = response.json();
  //       console.log(data);
  //       setSampleData(data.results);
  //     } catch (error) {
  //       console.log("Error in fetching data");
  //       setSampleData("");
  //     }
  //   }

  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  const value = { loginData, setLoginData };

  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
}
