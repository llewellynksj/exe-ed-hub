import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import axios from "axios";
import { axiosReq, axiosRes } from "../api/axiosDefaults";
import { useNavigate } from "react-router";

interface CurrentUserProviderProps {
  children: React.ReactNode;
}

interface User {
  id: number;
  username: string;
}

// Code adapted from Code Institute Moments walkthrough: http://tinyurl.com/yc6jabj3

export const CurrentUserContext = createContext<User | null>(null);
export const SetCurrentUserContext = createContext<
  React.Dispatch<React.SetStateAction<User | null>> | undefined
>(undefined);

export const useCurrentUser = () => useContext(CurrentUserContext);
export const useSetCurrentUser = () => {
  const context = useContext(SetCurrentUserContext);
  if (!context) {
    throw new Error(
      "useSetCurrentUser must be used within a CurrentUserProvider"
    );
  }
  return context;
};

export const CurrentUserProvider: React.FC<CurrentUserProviderProps> = ({
  children,
}) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const navigate = useNavigate();

  const handleMount = async () => {
    try {
      const { data } = await axiosRes.get<User>("dj-rest-auth/user/");
      setCurrentUser(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleMount();
  }, []);

  useMemo(() => {
    if (currentUser) {
      axiosReq.interceptors.request.use(
        async (config) => {
          try {
            await axios.post("/dj-rest-auth/token/refresh/");
          } catch (err) {
            setCurrentUser((prevCurrentUser) => {
              if (prevCurrentUser) {
                navigate("/login");
              }
              return null;
            });
            return config;
          }
          return config;
        },
        (err) => {
          return Promise.reject(err);
        }
      );

      axiosRes.interceptors.response.use(
        (response) => response,
        async (err) => {
          if (err.response?.status === 401) {
            try {
              await axios.post("/dj-rest-auth/token/refresh/");
            } catch (err) {
              setCurrentUser((prevCurrentUser) => {
                if (prevCurrentUser) {
                  navigate("/login");
                }
                return null;
              });
            }
            return axios(err.config);
          }
          return Promise.reject(err);
        }
      );
    }
  }, [navigate]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SetCurrentUserContext.Provider value={setCurrentUser}>
        {children}
      </SetCurrentUserContext.Provider>
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserProvider;
