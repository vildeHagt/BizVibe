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

    const data = await response.json();
    console.info(data);
    return data;
  } catch (error) {
    console.error("Failed to fetch organizations:", error);
    throw error;
  }
}

export async function fetchOrganizationData(orgNum: string) {
  try {
    const response = await fetch(
      "https://localhost:7081/business/GetOrganisationData?orgNum=" + orgNum,
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

    const data = await response.json();
    console.info(data);
    return data;
  } catch (error) {
    console.error("Failed to fetch organizations:", error);
    throw error;
  }
}
