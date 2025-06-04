// Henter filmer
export async function fetchFilms() {
  try {
    const response = await fetch("https://swapi.py4e.com/api/films/");
    if (!response.ok) {
      throw new Error("Noe gikk galt med å hente filmene.");
    }
    const data = await response.json();
    return data.results; 
  } catch (error) {
    console.error("Feil ved henting av filmer:", error);
    throw error;
  }
}

// Henter personer
export async function fetchPeople() {
  try {
    const response = await fetch("https://swapi.py4e.com/api/people/");
    if (!response.ok) {
      throw new Error("Feil ved å hente personer.");
    }
    const data = await response.json();
    return data.results; 
  } catch (error) {
    console.error("Feil ved henting av personer:", error);
    throw error;
  }
}

// Henter planeter
export async function fetchPlanets() {
  try {
    const response = await fetch("https://swapi.py4e.com/api/planets/");
    if (!response.ok) {
      throw new Error("Feil ved å hente planeter.");
    }
    const data = await response.json();
    return data.results; 
  } catch (error) {
    console.error("Feil ved henting av planeter:", error);
    throw error;
  }
}

// Henter kjøretøy
export async function fetchVehicles() {
  try {
    const response = await fetch("https://swapi.py4e.com/api/vehicles/");
    if (!response.ok) {
      throw new Error("Feil ved å hente kjøretøy.");
    }
    const data = await response.json();
    return data.results; 
  } catch (error) {
    console.error("Feil ved henting av kjøretøy:", error);
    throw error;
  }
}
