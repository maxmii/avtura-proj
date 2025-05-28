export async function getStands() {
  try {
    const response = await fetch("/data/stands.json");
    console.log(response.json())
  } catch (error) {
    console.error("Error fetching stands:", error);
    throw error;
  }
}
