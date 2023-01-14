export type User = {
    id:number,
    name:string,
    token:string,
    data:{
        birthdate:string,
        phonenumber:string,
        favoriteRecipes:number[],
    }
}