import Image from "next/image";
import Header from "@/components/Header";
import { jose } from "@/app/font"

export default function Home() {
  return (
    <main className="flex h-full">

      <div className={`hero h-[650px] bg-opacity-10 w-full bg-[url('imagehero.jpg')]`}>
        <Header />
        <div className="max-w-[1110px] w-full m-auto flex flex-col justify-center">
          <h1 className={`${jose.className} my-auto h-full text-[70px] leading-[70px] text-white uppercase max-w-[650px] w-full px-[47px] border-4 py-[42px] mt-[135px]`}>Immersive Experiences that deliver</h1>
        </div>
      </div>
    </main>
  );
}
