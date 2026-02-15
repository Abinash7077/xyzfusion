"use client";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useRouter } from "next/navigation";
export default function LoginPage() {
  const router=useRouter();
  return (
    <div className="min-h-screen flex bg-gray-100">
       {/* RIGHT SIDE IMAGE */}
      <div className="hidden md:block md:w-[60%] relative">
        <img
          src="/Images/loginImage.avif"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Soft overlay */}
        <div className="absolute inset-0 " />
      </div>
      {/* LEFT SIDE */}
      <div className="w-full md:w-[40%] flex items-center justify-center p-10 bg-white">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="mb-8">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">XYZ</span>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900">
            Sign in to your account
          </h2>

          <p className="mt-2 text-sm text-gray-600">
            Not a member?{" "}
            <a href="#" className="text-indigo-600 hover:underline">
              Start a 14 day free trial
            </a>
          </p>

          <form className="mt-8 space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="text-gray-600">Remember me</span>
              </div>
              <a href="#" className="text-indigo-600 hover:underline">
                Forgot password?
              </a>
            </div>

            {/* Sign In Button */}
            <button
            type='button'
              onClick={()=>router.push('/user/auth/verify')}
              className="w-full bg-indigo-600 text-white py-2.5 rounded-lg hover:bg-indigo-700 transition font-medium"
            >
              Sign in
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4 my-4">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-sm text-slate-500">Or continue with</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className="flex items-center justify-center gap-2 border text-slate-500 border-gray-300 rounded-lg py-2 hover:bg-gray-50 transition"
              >
                <FcGoogle size={20} />
                Google
              </button>

              <button
                type="button"
                className="flex items-center justify-center text-slate-500 gap-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-50 transition"
              >
                <FaGithub size={20} />
                GitHub
              </button>
            </div>
          </form>
        </div>
      </div>

     
    </div>
  );
}
