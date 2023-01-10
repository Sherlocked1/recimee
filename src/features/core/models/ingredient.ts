export type Ingredient = {
    id:number,
    name:string,
    image_url:string
}

export type IngredientsDTO = {
    data:Ingredient[]
}