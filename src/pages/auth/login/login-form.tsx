import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

export const LoginForm = ({
  className,
  ...props
}: React.ComponentProps<"form">) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await login(email, password);

      navigate(from, { replace: true });
    } catch (err: any) {
      if (
        err?.response?.status === 401 &&
        err?.response?.data?.message === "email or password is incorrect"
      ) {
        setError("Email atau kata sandi salah");
        setPassword("");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("flex flex-col gap-6", className)}
      {...props}
    >
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Masuk ke akun anda</h1>
          <p className="text-muted-foreground text-base text-balance">
            Gunakan email untuk masuk ke akun anda
          </p>
        </div>

        {error && (
          <div className="text-sm text-red-500 text-center">{error}</div>
        )}

        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white"
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="password">Kata Sandi</FieldLabel>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Masukkan kata sandi"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pr-10 bg-white"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </Field>

        <Field>
          <Button type="submit" disabled={loading}>
            {loading ? (
              <>
                <svg
                  className="w-5 h-5 animate-spin"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                <span>Memeriksa...</span>
              </>
            ) : (
              <span>Masuk</span>
            )}
          </Button>
        </Field>
      </FieldGroup>

      <div className="text-center text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()} SIMS. Hak cipta dilindungi undang-undang.
        </p>
      </div>
    </form>
  );
};
