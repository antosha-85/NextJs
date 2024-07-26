import React from "react";
import Hero from "@/components/Hero";
import InfoBoxes from "@/components/InfoBoxes";
import HomeProperties from "@/components/HomeProperties";
import connectDB from "@/config/database";

const HomePage = () => {
    console.log(process.env.MONGODB_URI);
    return (
        <>
            <Hero />
            <InfoBoxes />
            <HomeProperties />
        </>
    );
};

export default HomePage;
