import { useState } from "react";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

// note: A React compoment returns a collection of React elements
function SearchParams() {
  const [animal, updateAnimal] = useState("");

  /*
     if you didn't array destructure, you would have to do this:
     const animalTuple = useState(""); => returns an array of two elements
     const animal = animalTuple[0];
     const updateAnimal = animalTuple[1];
 */

  const [location, updateLocation] = useState("");
  const [breed, updateBreed] = useState("");
  const breeds = [];

  return (
    <div>
      <div className="search-params">
        <form>
          <label htmlFor="location">
            Location
            <input
              id="location"
              value={location}
              placeholder="Location"
              onChange={(e) => updateLocation(e.target.value)}
            />
          </label>
          <label htmlFor="animal">
            Animal
            <select
              id="animal"
              value={animal}
              onChange={(e) => updateAnimal(e.target.value)}
              onBlur={(e) => updateAnimal(e.target.value)}
            >
              <option />
              {ANIMALS.map((animal) => (
                <option key={animal} value={animal}>
                  {animal}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="breed">
            Breed
            <select
              disabled={!breeds.length}
              id="breed"
              value={breed}
              onChange={(e) => updateBreed(e.target.value)}
              onBlur={(e) => updateBreed(e.target.value)}
            >
              <option />
              {breeds.map((breed) => (
                <option key={breed} value={breed}>
                  {breed}
                </option>
              ))}
            </select>
          </label>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default SearchParams;
