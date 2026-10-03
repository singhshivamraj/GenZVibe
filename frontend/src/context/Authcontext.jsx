// import React, { Children, createContext, useState } from "react";
// export const AuthContext = createContext();
// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   const login = (userData) => {
//     setUser(userData);
//     localStorage.setItem("userinfo", JSON.stringify(userData));
//   };
//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem("userInfo");
//   };
//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };







import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Refresh ke baad user ko localStorage se load karega
  useEffect(() => {
    const storedUser = localStorage.getItem("userinfo");

    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Invalid user data:", error);
        localStorage.removeItem("userinfo");
      }
    }
  }, []);

  const login = (userData) => {
    setUser(userData);

    localStorage.setItem("userinfo", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);

    localStorage.removeItem("userinfo");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

