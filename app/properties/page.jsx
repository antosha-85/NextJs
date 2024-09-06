import React from "react";
import PropertyCard from "@/components/PropertyCard";
import { fetchProperties } from "@/utils/requests";

const PropertiesPage = async () => {
    const properties = await fetchProperties();

    //sort properties by date
    properties.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
    });
    return (
        <section className="px-4 py-6">
            <div className="container-xl lg:container m-auto px-4 py-6">
                {!properties.length ? (
                    <p>No properties found</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {properties.map((property) => (
                            <PropertyCard
                                key={property._id}
                                property={property}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default PropertiesPage;
