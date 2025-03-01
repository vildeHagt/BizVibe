export async function fetchOrganizations(organisationName: string) {
  try {
    const response = await fetch(
      "https://localhost:7081/business/GetOrganisations?organisationName=" +
        organisationName,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    console.info(response);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch organizations:", error);
    throw error;
  }
}
