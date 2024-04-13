'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

const Sidebar = () => {
    const router = useRouter();

    const menuItems = [
        { label: 'Courses', path: '/courses' },
        { label: 'Purchased', path: '/purchased' },
        { label: 'Saved', path: '/saved' },
        { label: 'Logout', path: '/logout' },
    ];

    const handleLogout = () => {
        // Implement logout logic here
        console.log('Logged out');
        // Redirect to login page
        router.push('/login');
    };

    return (
        <div className="bg-emerald-600  fixed left-0 w-64 h-screen p-4">
            <nav className="flex flex-col space-y-4 text-center">
                {menuItems.map((item, index) => (
                    <div key={index}>
                        {item.path ? (
                            <a
                                href={item.path}
                                className="block py-2 px-4 rounded hover:bg-emerald-900"
                            >
                                {item.label}
                            </a>
                        ) : (
                            <button
                                onClick={item.action}
                                className="block py-2 px-4 rounded hover:bg-emerald-900"
                            >
                                {item.label}
                            </button>
                        )}
                    </div>
                ))}
            </nav>
        </div>
    );
};

export default Sidebar;
