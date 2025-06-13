
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Mail, Lock, Code2 } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });
    // Handle login logic here
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        {/* Logo/Brand */}
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/20">
              <Code2 className="w-8 h-8 text-blue-400" />
            </div>
          </div>
          <h1 className="text-3xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Developer Portal
            </span>
          </h1>
          <p className="text-muted-foreground mt-2 font-mono text-sm">
            Sign in to your account
          </p>
        </div>

        {/* Login Card */}
        <Card className="glass border-white/10 shadow-2xl">
          <CardHeader className="space-y-1 pb-6">
            <CardTitle className="text-2xl font-semibold text-center">
              เข้าสู่ระบบ
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-400" />
                  อีเมล
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-11 bg-background/50 border-white/10 focus:border-blue-400/50 focus:ring-blue-400/20 font-mono"
                  required
                />
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-400" />
                  รหัสผ่าน
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-11 bg-background/50 border-white/10 focus:border-blue-400/50 focus:ring-blue-400/20 font-mono"
                  required
                />
              </div>

              {/* Forgot Password Link */}
              <div className="flex justify-end">
                <Link 
                  to="#" 
                  className="text-sm text-blue-400 hover:text-blue-300 transition-colors font-mono"
                >
                  ลืมรหัสผ่าน?
                </Link>
              </div>

              {/* Login Button */}
              <Button
                type="submit"
                className="w-full h-11 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold shadow-lg shadow-blue-500/25 transition-all duration-200 hover:shadow-blue-500/40"
              >
                เข้าสู่ระบบ
              </Button>
            </form>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-3 text-muted-foreground font-mono">
                  หรือ
                </span>
              </div>
            </div>

            {/* Sign Up Link */}
            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground font-mono">
                ยังไม่มีบัญชี?
              </p>
              <Link
                to="/signup"
                className="inline-flex items-center text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors duration-200 group"
              >
                สมัครสมาชิก
                <span className="ml-1 group-hover:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center">
          <p className="text-xs text-muted-foreground font-mono">
            © 2024 Developer Portal. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
