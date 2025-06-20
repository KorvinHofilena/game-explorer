const BASE_URL = "https://api.rawg.io/api";
const API_KEY = import.meta.env.VITE_RAWG_API_KEY;

export async function fetchPopularGames() {
  try {
    const response = await fetch(
      `${BASE_URL}/games?key=${API_KEY}&page_size=20`
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data.results;
  } catch (err) {
    console.error("❌ Failed to fetch games from RAWG:", err);
    return [];
  }
}
