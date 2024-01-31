import Image from "next/image";
import Header from "@/components/Header";
import { jose } from "@/app/font"

export default function Home() {

  const imagesArr = [
    { image: "image-deep-earth", title: "Deep Earth" },
    { image: "image-night-arcade", title: "Night Arcade" },
    { image: "image-soccer-team", title: "Soccer Team VR" },
    { image: "image-grid", title: "The Grid" },
    { image: "image-from-above", title: "From up above vr" },
    { image: "image-pocket-borealis", title: "Pocket Borealis" },
    { image: "image-curiosity", title: "The Curiosity" },
    { image: "image-fisheye", title: "Make it fisheye" }
  ]

  return (
    <main className="flex flex-col">
      <div className={`hero sm:h-[650px] pb-[285px] sm:pb-0 bg-opacity-10 w-full md:bg-[url('imagehero.jpg')] bg-[url('image-hero.jpg')] z-0`}>
        <div className="relative h-full px-[30px]">
          <Header />
          <div className="max-w-[1110px] w-full m-auto flex flex-col justify-center">
            <h1 className={`${jose.className} my-auto h-full md:text-[70px] text-[36px] leading-[36px] md:leading-[70px] text-white uppercase max-w-[650px] w-full p-8 md:px-[47px] border-4 md:py-[42px] mt-[208px] md:mt-[135px]`}>Immersive Experiences that deliver</h1>
          </div>
          <div className="absolute inset-0 sm:block hidden bg-black bg-opacity-30 -z-10"></div>
        </div>
      </div>

      <div className="max-w-[1170px] w-full m-auto md:pt-[159px] pt-[124px] mb-[132px] md:mb-[180px] relative px-[30px]">
        <Image
          src={"/desktop/image-interactive.jpg"}
          alt="interactive"
          width={731}
          height={500}
          className=""
        />
        <div className="md:pt-[98px] pt-[60px] md:pl-[100px] md:absolute bg-white bottom-0 right-0 max-w-[570px]">
          <h2 className={`${jose.className} uppercase md:text-[44px] text-[39px] leading-[39px] md:leading-[44px] mb-[42px] md:text-start text-center`}>The leader in interactive vr</h2>
          <p className="text-[#8c8c8c] md:pr-[30px] pl-[35px] md:pl-0 pr-[35px] text-center md:text-start">Founded in 2011, Loopstudios has been producing world-class virtual reality
            projects for some of the best companies around the globe. Our award-winning
            creations have transformed businesses through digital experiences that bind
            to their brand. </p>
        </div>
      </div>
      <div className="max-w-[1170px] w-full m-auto flex justify-center md:justify-between items-center pb-[70px] md:pb-[90px] px-[30px]">
        <h2 className={`${jose.className} uppercase  md:text-[44px] text-[39px] leading-[44px] md:text-start text-center`}>Our creations </h2>
        <button className="border-2 tracking-[4.38px] px-[38px] py-[14px] border-[#8c8c8c] transition-all duration-300 hover:bg-black hover:border-black hover:text-white md:block hidden">SEE ALL</button>
      </div>
      <div className="max-w-[1170px] w-full m-auto flex items-center justify-center md:justify-between flex-wrap gap-[30px] px-[30px] pb-[120px] md:pb-[184px]">
        {
          imagesArr.map((images: any, index: number) => (
            <div key={index} className="md:max-w-[255px] w-full relative group hover:cursor-pointer">
              <div>
                <Image
                  src={`/desktop/${images.image}.jpg`}
                  alt={images.image}
                  width={255}
                  height={450}
                  className="basis-1/2 md:block hidden"
                />
              </div>
              <div>
                <Image
                  src={`/mobile/${images.image}.jpg`}
                  alt={images.image}
                  width={654}
                  height={240}
                  className="basis-full md:hidden block"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t group-hover:from-[rgba(0,0,0,0)] from-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0%)] group-hover:bg-white bg-opacity-30 group-hover:bg-opacity-50 transition-all duration-300"></div>
              <h3 className={`${jose.className} max-w-[250px] uppercase text-[33px] p-[30px] md:p-[43px] leading-[33px] absolute bottom-0 text-white group-hover:text-black md:group-hover:pb-[80px] group-hover:pb-[45px] transition-all duration-300`}>{images.title}</h3>
            </div>
          ))
        }
        <button className="border-2 tracking-[4.38px] px-[38px] mt-[43px] py-[14px] border-[#8c8c8c] transition-all duration-300 hover:bg-black hover:border-black hover:text-white md:hidden block">SEE ALL</button>
      </div>
    </main>
  );
}
