import Image from "next/image";
import Header from "@/components/Header";
import { jose } from "@/app/font"

export default function Home() {

  const imagesArr = ["image-deep-earth", "image-night-arcade", "image-soccer-team", "image-grid", "image-from-above", "image-pocket-borealis", "image-curiosity", "image-fisheye"]

  return (
    <main className="flex flex-col">
      <div className={`hero h-[650px] bg-opacity-10 w-full bg-[url('imagehero.jpg')]`}>
        <Header />
        <div className="max-w-[1110px] w-full m-auto flex flex-col justify-center">
          <h1 className={`${jose.className} my-auto h-full text-[70px] leading-[70px] text-white uppercase max-w-[650px] w-full px-[47px] border-4 py-[42px] mt-[135px]`}>Immersive Experiences that deliver</h1>
        </div>
      </div>
      <div className="max-w-[1110px] w-full m-auto pt-[159px] mb-[180px] relative">
        <Image
          src={"/desktop/image-interactive.jpg"}
          alt="interactive"
          width={731}
          height={500}
          className=""
        />
        <div className="pt-[98px] pl-[100px] absolute bg-white bottom-0 right-0 max-w-[570px]">
          <h2 className={`${jose.className} uppercase text-[44px] leading-[44px] mb-[42px]`}>The leader in interactive vr</h2>
          <p className="text-[#8c8c8c]">Founded in 2011, Loopstudios has been producing world-class virtual reality
            projects for some of the best companies around the globe. Our award-winning
            creations have transformed businesses through digital experiences that bind
            to their brand. </p>
        </div>
      </div>
      <div className="max-w-[1110px] w-full m-auto flex justify-between items-center pb-[90px]">
        <h2 className={`${jose.className} uppercase text-[44px] leading-[44px]`}>Our creations </h2>
        <button className="border-2 tracking-[4.38px] px-[38px] py-[14px] border-[#8c8c8c]">SEE ALL</button>
      </div>
      <div className="max-w-[1110px] w-full m-auto flex justify-between flex-wrap gap-[30px]">
        {
          imagesArr.map((image: string) => (
            <Image
              src={`/desktop/${image}.jpg`}
              alt="interactive"
              width={256}
              height={450}
              className=""
              key={image}
            />
          ))
        }


      </div>
    </main>
  );
}
