import { useEffect, useState } from "react";
import { Logo } from "@/assets";
import { LoginForm } from "@/pages/auth/login/login-form";

const LoginPage = () => {
  const [loaded, setLoaded] = useState(false);

	useEffect(() => {
    document.title = "Login - SIMS";
  }, []);

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-6 p-6 md:p-10">
        <div className="flex justify-center lg:hidden relative w-full h-48">
          {!loaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg"></div>
          )}
          <img
            src={Logo}
            alt="Logo"
            className={`w-40 md:w-48 object-contain transition-opacity duration-500 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setLoaded(true)}
          />
        </div>

        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>

      <div className="hidden lg:flex flex-col items-center justify-center gap-6 relative w-full h-full">
        {!loaded && (
          <div className="absolute w-80 h-80 bg-gray-200 animate-pulse rounded-lg"></div>
        )}
        <img
          src={Logo}
          alt="Logo"
          className={`w-80 object-contain transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setLoaded(true)}
        />
        <h1 className="text-center text-2xl font-bold mt-6">
          SISTEM MANAJEMEN INFORMASI SEKOLAH
        </h1>
      </div>
    </div>
  );
};

export default LoginPage;
