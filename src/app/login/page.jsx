'use client'
import React from "react";
import signIn from "@/app/api/auth/login";
import { useRouter } from 'next/navigation'
import Image from "next/image";
import landing from "@/asset/landing.png"

function Page() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const router = useRouter()

    const handleForm = async (event) => {
        event.preventDefault()

        const { result, error } = await signIn(email, password);

        if (error) {
            return console.log(error)
        }

        // else successful
        console.log(result)
        return router.push("/")
    }
    const handleSignupClick = () => {
        router.push('/signup');
    };
    return (<div className="wrapper">
        <div className="flex flex-row justify-center items-center m-2 gap-36 h-svh">
            <div className="flex justify-center items-center m-8">
                <Image src={landing} height={300} width={400} className=" max-h-200 min-h-100 max-w-400 min-w-200" />

            </div>

            <div className="flex flex-col justify-center gap-10">
                <div className=" ">
                    <p className="font-medium font-mono text-3xl mt-10  text-center">Login</p>
                </div>
                <div>
                    <form onSubmit={handleForm} className="form flex flex-col gap-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>

                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            required
                            onChange={(e) => setEmail(e.target.value)}

                            className="border border-emerald-700 px-4 py-2 rounded-lg w-full focus:outline-none focus:ring focus:ring-emerald-300"
                        />
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>

                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            required
                            onChange={(e) => setPassword(e.target.value)}

                            className="border border-emerald-700 px-4 py-2 rounded-lg w-full focus:outline-none focus:ring focus:ring-emerald-300"
                        />
                        <button
                            type="submit"
                            className="bg-emerald-700 text-white py-2 px-4 rounded-lg w-full mt-4"
                        >
                            Login
                        </button>


                    </form>
                    <div className="flex flex-row py-2 px-2 gap-4 justify-center ">
                        <p>Don't have an account?</p>
                        <button
                            onClick={handleSignupClick}
                            className="text-emerald-700 "
                        >
                            Sign up
                        </button>
                    </div>

                </div>
            </div>

        </div>
    </div>);
}

export default Page;