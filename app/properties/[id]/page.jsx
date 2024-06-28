"use client";
import React from "react";

import { useRouter, useParams, useSearchParams, usePathname } from "next/navigation";

const PropertyPageId = () => {
    const router = useRouter();
    console.log("hello!");
    const { id } = useParams();
    const searchParams = useSearchParams();
    const name = searchParams.get("name");
    const pathName = usePathname();


    return (
        <div>
            <button
                onClick={() => router.push("/")}
                className="bg-blue-500 p-2"
            >
                Go Home {id} {name} {pathName}
            </button>
        </div>
    );
};

export default PropertyPageId;
