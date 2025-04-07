export function displayFilms(films) {
    const container = document.querySelector('#films .content');
    container.innerHTML = ''; // Tømmer tidligere innhold
  
    films.forEach(film => {
      const card = document.createElement('div');
      card.classList.add('film-card');
  
      const title = document.createElement('h3');
      title.textContent = film.title;
  
      const episode = document.createElement('p');
      const episodeLabel = document.createElement('strong');
      episodeLabel.textContent = 'Episode: ';
      episode.appendChild(episodeLabel);
      episode.append(film.episode_id);
  
      const director = document.createElement('p');
      const directorLabel = document.createElement('strong');
      directorLabel.textContent = 'Director: ';
      director.appendChild(directorLabel);
      director.append(film.director);
  
      const releaseDate = document.createElement('p');
      const releaseLabel = document.createElement('strong');
      releaseLabel.textContent = 'Release Date: ';
      releaseDate.appendChild(releaseLabel);
      releaseDate.append(film.release_date);
  
      card.appendChild(title);
      card.appendChild(episode);
      card.appendChild(director);
      card.appendChild(releaseDate);
  
      container.appendChild(card);
    });
  }
  
  export function displayPeople(people) {
    const container = document.querySelector('#people .content');
    container.innerHTML = ''; // Tømmer tidligere innhold
  
    people.forEach(person => {
      const card = document.createElement('div');
      card.classList.add('person-card');
  
      const name = document.createElement('h3');
      name.textContent = person.name;
  
      const gender = document.createElement('p');
      const genderLabel = document.createElement('strong');
      genderLabel.textContent = 'Gender: ';
      gender.appendChild(genderLabel);
      gender.append(person.gender);
  
      const birthYear = document.createElement('p');
      const birthYearLabel = document.createElement('strong');
      birthYearLabel.textContent = 'Birth Year: ';
      birthYear.appendChild(birthYearLabel);
      birthYear.append(person.birth_year);
  
      card.appendChild(name);
      card.appendChild(gender);
      card.appendChild(birthYear);
  
      container.appendChild(card);
    });
  }
  