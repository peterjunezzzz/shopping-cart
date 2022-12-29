export type apiType = {
    category:string;
    description:string;
    id:number;
    image:string;
    price:number;
    rating:rating;
    title:string;


}

type rating = {rate:number;count:number}