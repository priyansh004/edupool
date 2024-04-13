'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import landing from '@/asset/landing.png'; // Adjust the path as necessary
import { useRouter } from 'next/navigation';
import signUp from '../api/auth/signup';

function SignupPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMatchError, setPasswordMatchError] = useState(false);

    const handleSignupForm = async (e) => {
        e.preventDefault();

        // Check if passwords match
        if (password !== confirmPassword) {
            setPasswordMatchError(true);
            return;
        }

        // Reset the password match error flag
        setPasswordMatchError(false);

        const { result, error } = await signUp(email, password);

        if (error) {
            return console.log(error)
        }

        // else successful
        console.log(result)
        return router.push("/courses")
    };

    const handleLoginClick = () => {
        router.push('/login');
    };

    return (
        <div className="flex flex-row justify-center items-center m-2 gap-36 h-screen">
            <div className="flex justify-center items-center m-16">
                <Image src={landing} height={300} width={400} className="max-h-200 min-h-100 max-w-400 min-w-200" />
            </div>

            <div className="flex flex-col items-center gap-10">
                <div>
                    <p className="font-medium font-mono text-3xl mt-10 text-center">Sign Up</p>
                </div>
                <div>
                    <form onSubmit={handleSignupForm} className="form flex flex-col gap-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            required
                            className="border border-emerald-700 px-4 py-2 rounded-lg w-full focus:outline-none focus:ring focus:ring-emerald-300"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                            className="border border-emerald-700 px-4 py-2 rounded-lg w-full focus:outline-none focus:ring focus:ring-emerald-300"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="Confirm your password"
                            required
                            className="border border-emerald-700 px-4 py-2 rounded-lg w-full focus:outline-none focus:ring focus:ring-emerald-300"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />

                        {passwordMatchError && (
                            <p className="text-red-600 text-sm mt-2">
                                Passwords do not match.
                            </p>
                        )}

                        <button
                            type="submit"
                            className="bg-emerald-700 text-white py-2 px-4 rounded-lg w-full mt-4"
                        >
                            Sign Up
                        </button>
                    </form>

                    <div className="flex flex-row py-2 px-2 gap-4 justify-center">
                        <p>Already have an account?</p>
                        <button
                            onClick={handleLoginClick}
                            className="text-emerald-700"
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignupPage;
