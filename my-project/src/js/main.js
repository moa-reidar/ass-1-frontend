import { fetchFilms } from './api.js';
import { displayFilms } from './ui.js';

document.getElementById('films-btn').addEventListener('click', async () => {
  try {
    const films = await fetchFilms(); // Hent filmene fra SWAPI
    displayFilms(films); // Vis filmene på siden
  } catch (error) {
    console.error("Feil ved lasting av filmer:", error);
  }
});
