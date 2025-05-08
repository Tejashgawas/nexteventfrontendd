import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

const SignUp: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSignUp = async (event: React.FormEvent) => {
        event.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const { data, error } = await supabase.auth.signUp({
                email: formData.email,
                password: formData.password,
                options: {
                    emailRedirectTo: 'https://example.com/welcome',
                },
            });

            if (error) {
                console.error('Error signing up:', error.message);
                alert('Error signing up: ' + error.message);
            } else {
                console.log('Sign-up successful:', data);
                alert('Sign-up successful! Please check your email for confirmation.');
            }
        } catch (error) {
            console.error('Unexpected error:', error);
            alert('Unexpected error occurred. Please try again.');
        }
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center px-4"
            style={{
                backgroundImage: "url('https://images.pexels.com/photos/2291462/pexels-photo-2291462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
        >
            <div className="max-w-md w-full bg-white bg-opacity-70 backdrop-blur-sm rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-center text-[#0A2342] mb-6">Sign Up</h2>
                <form className="space-y-5" onSubmit={handleSignUp}>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your Name"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#E6C79C]"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="you@example.com"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#E6C79C]"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            placeholder="••••••••"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#E6C79C]"
                        />
                    </div>

                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            placeholder="••••••••"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#E6C79C]"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#E6C79C] text-[#0A2342] font-medium py-2 rounded-md hover:bg-[#dcbf9f] transition duration-200"
                    >
                        Sign Up
                    </button>
                </form>

                <p className="text-sm text-center text-gray-600 mt-6">
                    Already have an account?{" "}
                    <button
                        onClick={() => window.location.href = '/login'}
                        className="text-[#0A2342] font-medium cursor-pointer hover:underline"
                    >
                        Log in
                    </button>
                </p>
            </div>
        </div>
    );
};

export default SignUp;