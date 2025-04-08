import { fetchFilms, fetchPeople, fetchPlanets, fetchVehicles } from './api.js';
import { displayFilms, displayPeople, displayPlanets, displayVehicles } from './ui.js';


document.getElementById('films-btn').addEventListener('click', async () => {
  try {
    const films = await fetchFilms();
    displayFilms(films);
  } catch (error) {
    console.error("Feil ved lasting av filmer:", error);
  }
});

document.getElementById('people-btn').addEventListener('click', async () => {
  try {
    const people = await fetchPeople(); 
    displayPeople(people); 
  } catch (error) {
    console.error("Feil ved lasting av personer:", error);
  }
});

document.getElementById('planets-btn').addEventListener('click', async () => {
  try {
    const planets = await fetchPlanets(); 
    displayPlanets(planets); 
  } catch (error) {
    console.error("Feil ved lasting av planeter:", error);
  }
});

document.getElementById('vehicles-btn').addEventListener('click', async () => {
  try {
    const vehicles = await fetchVehicles(); 
    displayVehicles(vehicles); 
  } catch (error) {
    console.error("Feil ved lasting av kjøretøy:", error);
  }
});
