import { getPhotosData } from "@/lib/photoData";

export default function Home() {

  const photosData = getPhotosData();

  console.log(">>>", photosData);

  return (
    <>
      <h1>This is Landing Page</h1>
    </>
  );
}
