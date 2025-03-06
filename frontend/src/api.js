export const getProperties = async () => {
    try {
        const response = await fetch("/api/properties"); // 访问后端 API
        return await response.json();
    } catch (error) {
        console.error("Error fetching properties:", error);
        return [];
    }
};
