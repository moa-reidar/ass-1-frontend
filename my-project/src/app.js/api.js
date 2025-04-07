export async function fetchFilms() {
    try {
      const response = await fetch("https://swapi.py4e.com/api/films/");
      if (!response.ok) {
        throw new Error("Noe gikk galt med å hente filmene.");
      }
  
      const data = await response.json();
      return data.results; // returnerer bare arrayet med filmene
    } catch (error) {
      console.error("Feil ved henting av filmer:", error);
      throw error;
    }
  }
  