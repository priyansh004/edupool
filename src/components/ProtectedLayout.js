import React from 'react';
import { useAuthContext } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

const ProtectedLayout = ({ children }) => {
    const router = useRouter();
    const { user, loading } = useAuthContext();

    React.useEffect(() => {
        if (!loading && !user) {
            router.push('/login');
        }
    }, [loading, user, router]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user) {
        return null;
    }

    return (
            {children}
    );
};

export default ProtectedLayout;
