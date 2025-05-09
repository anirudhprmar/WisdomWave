import { useState } from "react"
import { useAuthStore } from "../../store/useAuthStore";
import {z} from "zod"
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare, User } from "lucide-react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import AuthImagePattern from "../../components/auth/AuthImagePattern";
import { useNavigate } from 'react-router-dom';



function Signup() {
  
  const navigate = useNavigate()
  const [showPassword,setShowPassword] = useState(false);
  
  const [formData,setFormData] = useState({
    username:"",
    email:"",
    password:""
  })
  
  const {signup,isSigningUp} = useAuthStore();
  
  const signupSchema = z.object({
    username: z.string()
      .min(3, "Username must be at least 3 characters")
      .max(30, "Username must be less than 30 characters"),
    email: z.string()
      .email("Invalid email address"),
    password: z.string()
      .min(6, "Password must be at least 6 characters")
      .regex(/^(?=.*[A-Za-z])(?=.*\d)/, "Password must contain at least one letter and one number")
  });

  const handleSubmit = async (e)=>{
    e.preventDefault();

    try {
      const validatedData = await signupSchema.parseAsync(formData);

      if (!validatedData.username || !validatedData.email || !validatedData.password) {
        toast.error("All fields are required");
        return;
      }

      const success = await signup(validatedData);

      if (success) {
        toast.success('Account created successfully!');
        navigate('/discover')
      }

    } catch (error) {
      if (error instanceof z.ZodError) {
        error.errors.forEach(err => {
          toast.error(err.message)
        })
      }else{
        toast.error(error.message || "Something went wrong")
      }
    }
  }


  return (
      <div className="min-h-screen grid lg:grid-cols-2">
        {/* left side */}
        <div className="flex flex-col justify-center items-center p-6 sm:p-12">
          <div className="w-full max-w-md space-y-8">
            {/* LOGO */}
            <div className="text-center mb-8">
              <div className="flex flex-col items-center gap-2 group">
                <div
                  className="size-12 rounded-xl bg-primary/10 flex items-center justify-center 
                group-hover:bg-primary/20 transition-colors"
                >
                  <MessageSquare className="size-6 text-primary" />
                </div>
                <h1 className="text-2xl font-bold mt-2">Create Account</h1>
                <p className="text-base-content/60">Get started with your free account</p>
              </div>
            </div>
  
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Full Name</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="size-5 text-base-content/40" />
                  </div>
                  <input
                    type="text"
                    className={`input input-bordered w-full pl-10`}
                    placeholder="John Doe"
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  />
                </div>
              </div>
  
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Email</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="size-5 text-base-content/40" />
                  </div>
                  <input
                    type="email"
                    className={`input input-bordered w-full pl-10`}
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>
  
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Password</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="size-5 text-base-content/40" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    className={`input input-bordered w-full pl-10`}
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="size-5 text-base-content/40" />
                    ) : (
                      <Eye className="size-5 text-base-content/40" />
                    )}
                  </button>
                </div>
              </div>
  
              <button type="submit" className="btn btn-primary w-full" disabled={isSigningUp}>
                {isSigningUp ? (
                  <>
                    <Loader2 className="size-5 animate-spin" />
                    Loading...
                  </>
                ) : (
                  "Create Account"
                )}
              </button>
            </form>
  
            <div className="text-center">
              <p className="text-base-content/60">
                Already have an account?{" "}
                <Link to="/login" className="link link-primary">
                  Sign in
                </Link>
              </p>
              <Link 
              to="/" 
              className="mt-4 inline-block font-medium text-primary hover:text-primary-focus"
            >
              Back to home
            </Link>
            </div>
          </div>
        </div>
  
        {/* right side */}
  
        <AuthImagePattern
          title="Join our community"
          subtitle="Learn, Get Ideas , Get Inspired , Save your favourite quotes"
        />
      </div>
    );

}

export default Signup
