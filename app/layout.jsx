import React from "react";
import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";

export const metadata = {
    title: "Property Pulse | Find the perfect Rental",
    description: "Find the perfect rental property in your area",
    keywords: "rental, property, real estate",
};

const MainLayout = ({ children }) => {
    return (
        <AuthProvider>
            <html lang="en">
                <body>
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                </body>
            </html>
        </AuthProvider>
    );
};

export default MainLayout;
