import Image from "next/image";
import raccoon1 from "../../public/images/r_beer.jpeg";
import raccoon2 from "../../public/images/r_grapes.jpeg";

export default function Home() {
  return (
    <main className="min-h-screen p-4">
      <h1>raccooons.com</h1>
      <Image src={raccoon1} alt="raccoon with beer" />
      <Image src={raccoon2} alt="raccoon with grape" />
    </main>
  );
}
