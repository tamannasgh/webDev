const API = "https://dog.ceo/api/breeds/image/random";

export async function getImage(){
   const res = await fetch(API);
   const data = await res.json();
   return data.message;
}