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
  
  export function displayPlanets(planets) {
    const container = document.querySelector('#planets .content');
    container.innerHTML = ''; // Tømmer tidligere innhold
  
    planets.forEach(planet => {
      const card = document.createElement('div');
      card.classList.add('planet-card');
  
      const name = document.createElement('h3');
      name.textContent = planet.name;
  
      const climate = document.createElement('p');
      const climateLabel = document.createElement('strong');
      climateLabel.textContent = 'Climate: ';
      climate.appendChild(climateLabel);
      climate.append(planet.climate);
  
      const terrain = document.createElement('p');
      const terrainLabel = document.createElement('strong');
      terrainLabel.textContent = 'Terrain: ';
      terrain.appendChild(terrainLabel);
      terrain.append(planet.terrain);
  
      const population = document.createElement('p');
      const populationLabel = document.createElement('strong');
      populationLabel.textContent = 'Population: ';
      population.appendChild(populationLabel);
      population.append(planet.population);
  
      card.appendChild(name);
      card.appendChild(climate);
      card.appendChild(terrain);
      card.appendChild(population);
  
      container.appendChild(card);
    });
  }
  
  export function displayVehicles(vehicles) {
    const container = document.querySelector('#vehicles .content');
    container.innerHTML = ''; // Tømmer tidligere innhold
  
    vehicles.forEach(vehicle => {
      const card = document.createElement('div');
      card.classList.add('vehicle-card');
  
      const name = document.createElement('h3');
      name.textContent = vehicle.name;
  
      const model = document.createElement('p');
      const modelLabel = document.createElement('strong');
      modelLabel.textContent = 'Model: ';
      model.appendChild(modelLabel);
      model.append(vehicle.model);
  
      const manufacturer = document.createElement('p');
      const manufacturerLabel = document.createElement('strong');
      manufacturerLabel.textContent = 'Manufacturer: ';
      manufacturer.appendChild(manufacturerLabel);
      manufacturer.append(vehicle.manufacturer);
  
      const costInCredits = document.createElement('p');
      const costInCreditsLabel = document.createElement('strong');
      costInCreditsLabel.textContent = 'Cost in Credits: ';
      costInCredits.appendChild(costInCreditsLabel);
      costInCredits.append(vehicle.cost_in_credits);
  
      card.appendChild(name);
      card.appendChild(model);
      card.appendChild(manufacturer);
      card.appendChild(costInCredits);
  
      container.appendChild(card);
    });
  }
  