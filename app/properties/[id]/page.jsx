"use client";
import React from "react";

const PropertyPageId = () => {
    return (
        <div>
            <button
                onClick={() => router.push("/")}
                className="bg-blue-500 p-2"
            >
                Go Home
            </button>
        </div>
    );
};

export default PropertyPageId;
