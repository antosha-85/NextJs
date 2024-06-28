import React from "react";

const InfoBox = ({
    heading,
    backgroundColor = "bg-gray-100",
    textColor = "text-grey-800",
    buttonInfo: { link, text, buttonBackgroundColor },
    children,
}) => {
    return (
        <div className={`${backgroundColor} p-6 rounded-lg shadow-md`}>
            <h2 className={`${textColor} text-2xl font-bold`}>{heading}</h2>
            <p className={`${textColor} mt-2 mb-4`}>{children}</p>
            <a
                href={link}
                className={`inline-block ${buttonBackgroundColor} text-white rounded-lg px-4 py-2 hover:bg-opacity-80`}
            >
                {text}
            </a>
        </div>
    );
};

export default InfoBox;
