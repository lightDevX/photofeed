import { getPhotosData } from "@/lib/photoData";
import { getDictionary } from "./dictionaries";

export default async function Home({ params: { lang } }) {

  const dictionary = await getDictionary(lang);
  const photosData = getPhotosData();

  const response = await fetch(`${process.env.BASE_API_URL}/photos`);
  const photos = await reponse.json();

  return (
    <>
      <h1>{dictionary.followers}</h1>
    </>
  );
}
