export function displayFilms(films) {
    const container = document.querySelector('#films .content');
    container.innerHTML = ''; // Tømmer tidligere innhold
  
    films.forEach(film => {
      const card = document.createElement('div');
      card.classList.add('film-card');
  
      const title = document.createElement('h3');
      title.textContent = film.title;
  
      const episode = document.createElement('p');
      episode.textContent = 'Episode: ' + film.episode_id;
  
      const director = document.createElement('p');
      director.textContent = '<strong>Director:</strong> ' + film.director;
  
      const releaseDate = document.createElement('p');
      releaseDate.textContent = 'Release Date: ' + film.release_date;
  
     
      card.appendChild(title);
      card.appendChild(episode);
      
  
      container.appendChild(card);
    });
  }
  