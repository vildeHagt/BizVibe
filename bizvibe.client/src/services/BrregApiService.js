export const fetchOrganizations = async () => {
  try {
    const response = await fetch(
      "https://localhost:53942/api/business/GetOrganisations",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // Include any necessary headers, such as Authorization
        },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch organizations:", error);
    throw error;
  }
};
