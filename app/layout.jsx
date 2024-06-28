import React from "react";
import "@/assets/styles/globals.css";

export const metadata = {
    title: "Property Pulse | Find the perfect Rental",
    description: "Find the perfect rental property in your area",
    keywords: "rental, property, real estate",
}

const MainLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <div>{children}</div>
            </body>
        </html>
    );
};

export default MainLayout;
