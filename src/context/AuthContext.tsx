import React, { createContext, useState, useContext, useEffect, type ReactNode } from 'react';
import axios from 'axios';
interface User {
    id: string;
    email: string;
    name: string;
    role: string;
}

interface AuthContextType {
    user: User | null;
    login: (email: string, password: string) => Promise<{ success: boolean; message?: string }>;
    logout: () => void;
    loading: boolean;
}

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
});


const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
     
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            
            
    
        }
        setLoading(false);
    }, []);

    const login = async (email: string, password: string) => {
        try {
          
            const response = await api.post<{ token: string; user: User }>('/login', { 
                email, 
                password 
            });

            const { token, user: userData } = response.data;

       
            localStorage.setItem('token', token);
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setUser(userData);

            return { success: true };
        } catch (error: any) {
            const message = error.response?.data?.message || "Login failed";
            return { success: false, message };
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        delete api.defaults.headers.common['Authorization'];
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};


export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};