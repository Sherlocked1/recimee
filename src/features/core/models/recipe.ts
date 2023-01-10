export type AbstractRecipe ={ 
    id:number,
    image:string,
    imageType:string,
    title:string,
}

export type AbstractRecipesDTO = {
    number:       number;
    offset:       number;
    results:      AbstractRecipe[];
    totalResults: number;
}

export type Recipe = {
    id:number,
    title:string,
    image:string,
    rating:number,
    readyInMinutes:number,
}