export async function fetchProperties() {
    try {
        // handle when domain is not available
        if (!apiDomain) {
            return [];
        }
        const res = await fetch(`${apiDomain}/properties`);
        if (!res.ok) {
            throw new Error("Failed to fetch properties");
        }
        return await res.json();
    } catch (error) {
        console.error(error);
        return null;
    }
}

const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN ?? null;
