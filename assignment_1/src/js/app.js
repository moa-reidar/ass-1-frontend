import { fetchFilms, fetchPeople, fetchPlanets, fetchVehicles } from './api.js';
import { displayFilms, displayPeople, displayPlanets, displayVehicles } from './ui.js';


function toggleSections(sectionToShow) {
  const sections = document.querySelectorAll('.category');
  sections.forEach((section) => {
    if (section.id === sectionToShow) {
      section.style.display = 'block'; 
    } else {
      section.style.display = 'none'; 
    }
  });
}


document.getElementById('films-btn').addEventListener('click', async () => {
  try {
    const films = await fetchFilms();
    displayFilms(films);
    toggleSections('films'); 
  } catch (error) {
    console.error("Error loading films:", error);
  }
});


document.getElementById('people-btn').addEventListener('click', async () => {
  try {
    const people = await fetchPeople();
    displayPeople(people);
    toggleSections('people'); 
  } catch (error) {
    console.error("Error loading people:", error);
  }
});


document.getElementById('planets-btn').addEventListener('click', async () => {
  try {
    const planets = await fetchPlanets();
    displayPlanets(planets);
    toggleSections('planets'); 
  } catch (error) {
    console.error("Error loading planets:", error);
  }
});


document.getElementById('vehicles-btn').addEventListener('click', async () => {
  try {
    const vehicles = await fetchVehicles();
    displayVehicles(vehicles);
    toggleSections('vehicles'); 
  } catch (error) {
    console.error("Error loading vehicles:", error);
  }
});


document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('films-btn').click();
});
