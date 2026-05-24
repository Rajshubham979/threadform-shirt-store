"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function AuthPanel() {
  const [mode, setMode] = useState<"signin" | "register">("signin");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  async function handleSubmit() {
    if (mode === "register") {
      const registerResponse = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (!registerResponse.ok) {
        toast.error("Could not create account");
        return;
      }
    }

    const result = await signIn("credentials", {
      email: formData.email,
      password: formData.password,
      redirect: true,
      callbackUrl: "/account"
    });

    if (result?.error) {
      toast.error(result.error);
    }
  }

  return (
    <Card className="mx-auto max-w-xl p-6">
      <div className="mb-6 flex gap-2">
        <Button variant={mode === "signin" ? "solid" : "outline"} onClick={() => setMode("signin")}>
          Sign in
        </Button>
        <Button variant={mode === "register" ? "solid" : "outline"} onClick={() => setMode("register")}>
          Register
        </Button>
      </div>
      <div className="space-y-4">
        {mode === "register" ? (
          <Input
            placeholder="Full name"
            value={formData.name}
            onChange={(event) => setFormData((current) => ({ ...current, name: event.target.value }))}
          />
        ) : null}
        <Input
          placeholder="Email"
          type="email"
          value={formData.email}
          onChange={(event) => setFormData((current) => ({ ...current, email: event.target.value }))}
        />
        <Input
          placeholder="Password"
          type="password"
          value={formData.password}
          onChange={(event) => setFormData((current) => ({ ...current, password: event.target.value }))}
        />
        <Button className="w-full" onClick={handleSubmit}>
          {mode === "signin" ? "Continue" : "Create account"}
        </Button>
        <Button variant="outline" className="w-full" onClick={() => signIn("google", { callbackUrl: "/account" })}>
          Continue with Google
        </Button>
      </div>
    </Card>
  );
}
