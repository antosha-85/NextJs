"use client";
import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
    diplay: "block",
    margin: "100px auto",
};

const LoadingPage = ({ loading }) => {
    return (
        <ClipLoader
            color="#3b82f6"
            loading={loading}
            size={150}
            cssOverride={override}
        />
    );
};

export default LoadingPage;
