import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Masuk ke akun anda</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Gunakan email atau nomor induk pegawai anda untuk masuk ke akun anda
          </p>
        </div>

        <Field>
          <FieldLabel htmlFor="email">Email atau NIP</FieldLabel>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </Field>

        <Field>
          <FieldLabel htmlFor="password">Kata Sandi</FieldLabel>
          {/* Wrapper relative supaya tombol mata bisa absolute di dalam */}
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Masukkan kata sandi"
              required
              className="pr-10" // padding kanan supaya teks tidak ketutup tombol
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
          <Button type="submit">Masuk</Button>
        </Field>
      </FieldGroup>
    </form>
  );
}
