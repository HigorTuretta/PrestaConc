import { createContext } from "react";
import { useContext, useState, useEffect } from "react";
import { api } from "../services/api";
import { Notification } from "../components/Notification";
export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});
  const [notification, setNotification] = useState(null);

  const showNotification = (message, type) => {
    const notification = (
      <Notification
        message={message}
        type={type}
        onClose={() => {
          setTimeout(() => {
            setNotification(null);
          }, 500);
        }}
      />
    );
    setNotification(notification);
  };

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;
      localStorage.setItem("@prestaConc:user", JSON.stringify(user));
      localStorage.setItem("@prestaConc:token", token);
      api.defaults.headers.authorization = `Bearer ${token}`; // inserindo um token do tipo bearer de autorização em todas as requisições a partir de agora.
      setData({ user, token });
    } catch (error) {
      if (error.response) {
        console.log(error.response)
        showNotification(error.response.data.message, "error");
      } else {
        showNotification("Não foi possível realizar o login.", "error");
      }
    }
  }
  
  function signOut() {
    localStorage.removeItem("@prestaConc:user");
    localStorage.removeItem("@prestaConc:token");
    api.defaults.headers.authorization = "";
    setData({});
  }

  useEffect(() => {
    const token = localStorage.getItem("@prestaConc:token");
    const user = localStorage.getItem("@prestaConc:user");

    if (token && user) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`; // inserindo um token do tipo bearer de autorização em todas as requisições a partir de agora.
      setData({ token, user: JSON.parse(user) });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        user: data.user,
      }}
    >
      {children}
      {notification}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
export { AuthProvider, useAuth };
