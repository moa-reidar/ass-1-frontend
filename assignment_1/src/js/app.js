import { fetchFilms, fetchPeople, fetchPlanets, fetchVehicles } from './api.js';
import { displayFilms, displayPeople, displayPlanets, displayVehicles } from './ui.js';

// Function to toggle sections visibility
function toggleSections(sectionToShow) {
  const sections = document.querySelectorAll('.category');
  sections.forEach((section) => {
    if (section.id === sectionToShow) {
      section.style.display = 'block'; // Show the selected section
    } else {
      section.style.display = 'none'; // Hide the other sections
    }
  });
}

// Handle click on films button
document.getElementById('films-btn').addEventListener('click', async () => {
  try {
    const films = await fetchFilms();
    displayFilms(films);
    toggleSections('films'); // Show only the films section
  } catch (error) {
    console.error("Error loading films:", error);
  }
});

// Handle click on people button
document.getElementById('people-btn').addEventListener('click', async () => {
  try {
    const people = await fetchPeople();
    displayPeople(people);
    toggleSections('people'); // Show only the people section
  } catch (error) {
    console.error("Error loading people:", error);
  }
});

// Handle click on planets button
document.getElementById('planets-btn').addEventListener('click', async () => {
  try {
    const planets = await fetchPlanets();
    displayPlanets(planets);
    toggleSections('planets'); // Show only the planets section
  } catch (error) {
    console.error("Error loading planets:", error);
  }
});

// Handle click on vehicles button
document.getElementById('vehicles-btn').addEventListener('click', async () => {
  try {
    const vehicles = await fetchVehicles();
    displayVehicles(vehicles);
    toggleSections('vehicles'); // Show only the vehicles section
  } catch (error) {
    console.error("Error loading vehicles:", error);
  }
});

// When the page loads, show films section by default
document.addEventListener('DOMContentLoaded', () => {
  // Simulate the click event for films-btn to show the films section immediately
  document.getElementById('films-btn').click();
});
