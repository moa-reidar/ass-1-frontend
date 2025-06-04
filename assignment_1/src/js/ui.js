export function displayFilms(films) {
  const container = document.querySelector('#films .content');
  container.innerHTML = ''; // Tømmer tidligere innhold

  const limitedFilms = films.slice(0, 6); 

  limitedFilms.forEach((film, index) => {
      const card = document.createElement('div');
      card.classList.add('film-card');

      const title = document.createElement('h3');
      title.textContent = film.title;

     // bilde for filmer
      const filmImage = document.createElement('img');
      filmImage.src = `src/assets/img/film ${index + 1}.jpeg`; 
      filmImage.alt = `Film ${film.title}`; 
      card.appendChild(title); 
      card.appendChild(filmImage); 

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

      const producer = document.createElement('p');
      const producerLabel = document.createElement('strong');
      producerLabel.textContent = 'Producer: ';
      producer.appendChild(producerLabel);
      producer.append(film.producer); 

      const openingCrawl = document.createElement('p');
      const openingCrawlLabel = document.createElement('strong');
      openingCrawlLabel.textContent = 'Opening Crawl: ';
      openingCrawl.appendChild(openingCrawlLabel);
      openingCrawl.append(film.opening_crawl);

      card.appendChild(episode);
      card.appendChild(director);
      card.appendChild(releaseDate);
      card.appendChild(producer);
      card.appendChild(openingCrawl);

      container.appendChild(card);
  });
}
  
export function displayPeople(people) {
  const container = document.querySelector('#people .content');
  container.innerHTML = ''; // Tømmer tidligere innhold

  const limitedPeople = people.slice(0, 6);

  limitedPeople.forEach((person, index) => { // Bruker index som en unik ID
      const card = document.createElement('div');
      card.classList.add('person-card');

      // Bruker index + 1 som ID for bildet
      const personId = index + 1;  
      
      const name = document.createElement('h3');
      name.textContent = person.name;

      // Bilde for personen 
      const personImage = document.createElement('img');
      personImage.src = `src/assets/img/person ${personId}.jpeg`; 
      personImage.alt = `Person: ${person.name}`;
      card.appendChild(name);
      card.appendChild(personImage);

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

      const height = document.createElement('p');
      const heightLabel = document.createElement('strong');
      heightLabel.textContent = 'Height: ';
      height.appendChild(heightLabel);
      height.append(person.height);

      const mass = document.createElement('p');
      const massLabel = document.createElement('strong');
      massLabel.textContent = 'Mass: ';
      mass.appendChild(massLabel);
      mass.append(person.mass);  

      const eyeColor = document.createElement('p');
      const eyeColorLabel = document.createElement('strong');
      eyeColorLabel.textContent = 'Eye Color: ';
      eyeColor.appendChild(eyeColorLabel);
      eyeColor.append(person.eye_color);

      card.appendChild(gender);
      card.appendChild(birthYear);
      card.appendChild(height);
      card.appendChild(mass);
      card.appendChild(eyeColor);

      container.appendChild(card);
  });
}


export function displayPlanets(planets) {
  const container = document.querySelector('#planets .content');
  container.innerHTML = ''; // Tømmer tidligere innhold

  const limitedPlanets = planets.slice(0, 6);

  limitedPlanets.forEach((planet, index) => { // Bruker index som en unik ID
      const card = document.createElement('div');
      card.classList.add('planet-card');

      // Bruker index + 1 som ID for bildet
      const planetId = index + 1;  
      
      const name = document.createElement('h3');
      name.textContent = planet.name;

      // Bilde for planeten 
      const planetImage = document.createElement('img');
      planetImage.src = `src/assets/img/planet ${planetId}.jpeg`;  
      planetImage.alt = `Planet: ${planet.name}`;
      card.appendChild(name); 
      card.appendChild(planetImage); 

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

      const diameter = document.createElement('p');
      const diameterLabel = document.createElement('strong');
      diameterLabel.textContent = 'Diameter: ';
      diameter.appendChild(diameterLabel);
      diameter.append(planet.diameter);

      const orbitalPeriod = document.createElement('p');
      const orbitalPeriodLabel = document.createElement('strong');
      orbitalPeriodLabel.textContent = 'Orbital Period: ';
      orbitalPeriod.appendChild(orbitalPeriodLabel);
      orbitalPeriod.append(planet.orbital_period);

      card.appendChild(climate);
      card.appendChild(terrain);
      card.appendChild(population);
      card.appendChild(diameter);
      card.appendChild(orbitalPeriod);

      container.appendChild(card);
  });
}

export function displayVehicles(vehicles) {
  const container = document.querySelector('#vehicles .content');
  container.innerHTML = ''; // Tømmer tidligere innhold

  const limitedVehicles = vehicles.slice(0, 6);

  limitedVehicles.forEach((vehicle, index) => { // Bruker index som en unik ID
      const card = document.createElement('div');
      card.classList.add('vehicle-card');

      // Bruker index + 1 som ID for bildet
      const vehicleId = index + 1;  
      
      const name = document.createElement('h3');
      name.textContent = vehicle.name;

      // Bilde for kjøretøyet 
      const vehicleImage = document.createElement('img');
      vehicleImage.src = `src/assets/img/vehicle ${vehicleId}.jpeg`; 
      vehicleImage.alt = `Vehicle: ${vehicle.name}`;
      card.appendChild(name); 
      card.appendChild(vehicleImage); 

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

      const passengers = document.createElement('p');
      const passengersLabel = document.createElement('strong');
      passengersLabel.textContent = 'Passengers: ';
      passengers.appendChild(passengersLabel);
      passengers.append(vehicle.passengers);

      const cargoCapacity = document.createElement('p');
      const cargoCapacityLabel = document.createElement('strong');
      cargoCapacityLabel.textContent = 'Cargo Capacity: ';
      cargoCapacity.appendChild(cargoCapacityLabel);
      cargoCapacity.append(vehicle.cargo_capacity);

      
      card.appendChild(model);
      card.appendChild(manufacturer);
      card.appendChild(costInCredits);
      card.appendChild(passengers);
      card.appendChild(cargoCapacity);

      container.appendChild(card);
  });
}
