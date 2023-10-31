export const DOG_UPDATE_KEY = "localDogUpdated";
const DOG_UPDATE_EVENT = new Event(DOG_UPDATE_KEY);
const DOG_KEY = "dog";
type DogUrl = string;

export const getAllDogs = ():DogUrl[] => {
    const hunderString = localStorage.getItem(DOG_KEY);
    let hunder: DogUrl[] = [];
    if (hunderString !== null) {
        hunder = JSON.parse(hunderString) as DogUrl[];
    }
    return hunder;
}
const setDogs = (dogUrlArray: DogUrl[]) => {
    const dogUrlArrayString = JSON.stringify(dogUrlArray);
    localStorage.setItem(DOG_KEY, dogUrlArrayString);
    window.dispatchEvent(DOG_UPDATE_EVENT);
}
export const addDog = (url: DogUrl) => {
    const dogs = getAllDogs();
    if (!dogs.includes(url)) {
        dogs.push(url);
    }
    setDogs(dogs);
}

export const removeDog = (url: DogUrl) => {
    const dogs = getAllDogs();
    const dogsRemoved = dogs.filter((element) => element !== url);
    setDogs(dogsRemoved);
}
export const resetAllDogs = () => {
    setDogs([]);
}