import { AuthService } from "@/services/auth.service";
import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { jwtDecode } from "jwt-decode";

export interface JwtPayload {
  user_id: string;
  name: string;
  email: string;
  username?: string;
  is_superuser?: boolean;
  exp: number;
}

type AuthUser = {
  name: string;
  email: string;
};

interface AuthContextType {
  accessToken: string | null;
  user: AuthUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;

  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;

  getAccessToken: () => string | null;
  handleTokenUpdate: (token: string | null) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // INIT AUTH (RESTORE SESSION)
  useEffect(() => {
    const initAuth = async () => {
      try {
        const res = await AuthService.refresh();
        setAuthFromToken(res.access_token);
      } catch {
        setAccessToken(null);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    initAuth();
  }, []);

  const login = async (email: string, password: string) => {
    const res = await AuthService.login({ email, password });
    setAuthFromToken(res.access_token);
  };

  const accessTokenRef = useRef<string | null>(null);

  const setAuthFromToken = (token: string) => {
    const payload = jwtDecode<JwtPayload>(token);

    accessTokenRef.current = token;
    setAccessToken(token);

    setUser({
      name: payload.name,
      email: payload.email,
    });
  };

  const handleTokenUpdate = (token: string | null) => {
    accessTokenRef.current = token;
    setAccessToken(token);

    if (!token) {
      setUser(null);
      return;
    }

    const payload = jwtDecode<JwtPayload>(token);
    setUser({
      name: payload.name,
      email: payload.email,
    });
  };

  const getAccessToken = () => accessTokenRef.current;

  const logout = useCallback(async () => {
    try {
      await AuthService.logout();
    } catch {
      // do nothing
    } finally {
      accessTokenRef.current = null;
      setAccessToken(null);
      setUser(null);
      setIsLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        user,
        isAuthenticated: !!accessToken,
        isLoading,
        login,
        logout,
        getAccessToken,
        handleTokenUpdate,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return ctx;
};
