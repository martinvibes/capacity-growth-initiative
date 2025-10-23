"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import hero_img1 from "../../../../public/hero-img1.svg";
import Marque from "@/app/components/Marque";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const DEMO_EMAIL = "Capacitygrowthinitiative@gmail.com";
  const DEMO_PASSWORD = "admin123";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
      // Set authentication cookie
      document.cookie = "admin_authenticated=true; path=/; max-age=86400; secure; samesite=strict";
      document.cookie = `admin_email=${email}; path=/; max-age=86400; secure; samesite=strict`;
      router.push("/admin");
    } else {
      setError("Invalid email or password");
    }

    setLoading(false);
  };

  return (
    <>
      <div className="min-h-screen bg-[#F9F9F9] flex flex-col justify-center mt-[-4rem]  sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="flex justify-center">
            <Image
              src="/logo.png"
              alt="Capacity Growth Initiative"
              width={150}
              height={150}
              className="rounded-full"
            />
          </div>

          <p className="mt-1 text-center text-sm text-gray-600">
            Sign in to access the admin dashboard
          </p>
        </div>

        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-[#F9F9F9] rounded-[10px] border border-[#F9F9F9] py-8 px-4  shadow-2xl shadow-[#00000033] sm:rounded-lg sm:px-10">
            <form className="space-y-3" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="appearance-none block w-full px-3 py-1 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="appearance-none block w-full px-3 py-1 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              {error && (
                <div className="rounded-md bg-red-50 p-4">
                  <div className="text-sm text-red-700">{error}</div>
                </div>
              )}

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-md font-bold rounded-md text-white bg-[#019B83] hover:bg-teal-700 focus:outline-none   disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Signing in..." : "Sign in"}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="absolute right-[-7rem] top-40 hidden sm:hidden md:hidden lg:block overflow-hidden ">
          <Image
            src={hero_img1}
            alt="Africa map with human face collage"
            className=" w-[60%]  "
            priority
          />
        </div>
      </div>
      <div className="mt-[-4rem]">

      <Marque />
      </div>
    </>
  );
}
