"use client";
import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
    diplay: "block !important",
    margin: "100px auto",
};

const Spinner = ({ loading }) => {
    return (
        <ClipLoader
            color="red"
            loading={loading}
            size={150}
            cssOverride={{ override }}
            aria-label="Loading Spinner"
        />
    );
};

export default Spinner;
