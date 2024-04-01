import { baseURL } from "../app/shared/baseURL";

export const mapImageURL = (arr) => {
    return arr.map((item) => {
        return {
            ...item,
            image: baseURL + item.image
        };
    });
};

//This custom utility function takes an argument of an array. It maps over that array, pulling out each array item in turn into the item parameter. It returns a new array of objects, using the spread operator to prepend each image property with the baseUrl.
