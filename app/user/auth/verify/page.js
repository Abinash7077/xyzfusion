"use client";
import { useRouter } from "next/navigation";
export default function TwoFactorPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md">
        <div className="mb-6 text-center">
          <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center mx-auto">
              <span className="text-white font-bold">XYZ</span>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 text-center">
          Two-Factor Authentication
        </h2>

        <p className="text-sm text-gray-600 text-center mt-2">
          Enter the 6-digit code sent to your email
        </p>

        <form className="mt-8 space-y-6">
          <input
            type="text"
            maxLength={6}
            placeholder="Enter 6-digit code"
            className="w-full text-center tracking-widest text-xl px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />

          <button
            type="button"
            onClick={() => router.push("/")}
            className="w-full bg-indigo-600 text-white py-2.5 rounded-lg hover:bg-indigo-700 transition font-medium"
          >
            Verify
          </button>

          <p className="text-sm text-center text-gray-500">
            Didn’t receive code?{" "}
            <button className="text-indigo-600 hover:underline">Resend</button>
          </p>
        </form>
      </div>
    </div>
  );
}
