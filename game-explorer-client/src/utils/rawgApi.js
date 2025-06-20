const BASE_URL = "https://api.rawg.io/api";

export function fetchTrendingGames() {
  const apiKey = import.meta.env.VITE_RAWG_API_KEY;
  const url = `${BASE_URL}/games?key=${apiKey}&ordering=-rating&page_size=20`;

  return fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to fetch games");
      }
      return res.json();
    })
    .catch((err) => {
      console.error("API Error:", err);
      throw err;
    });
}
