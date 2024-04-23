import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { Roboto } from 'next/font/google'
import { TypewriterEffect } from "./components/ui/typewriter-effect";
import Link from "next/link";
// import { WavyBackground } from "./components/ui/wavy-background";
import { TracingBeam } from "./components/ui/tracing-beam";
import { AuroraBackground } from "./components/ui/aurora-background";


const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  }
  const words = [
    {
      text: "Welcome",
    },
    {
      text: "to",
    },
    {
      text: "Website",
    },
    {
      text: "Dormitory",
      className: "text-black",
    },
    {
      text: "BANI_UMAR.",
      className: "text-green-500 dark:text-yellow-600",
      // className: "bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ",
      // className: "bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500",
    },
  ];
  const dummyContent = [
    {
      title: "Pengasuh asrama BANI UMAR.",
      description: (
        <>
          <p>
            Sit duis est minim proident non nisi velit non consectetur. Esse
            adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt
            Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat incididunt
            incididunt enim magna id est qui sunt fugiat. Laboris do duis pariatur
            fugiat Lorem aute sit ullamco. Qui deserunt non reprehenderit dolore
            nisi velit exercitation Lorem qui do enim culpa. Aliqua eiusmod in
            occaecat reprehenderit laborum nostrud fugiat voluptate do Lorem culpa
            officia sint labore. Tempor consectetur excepteur ut fugiat veniam
            commodo et labore dolore commodo pariatur.
          </p>
          <p>
            Dolor minim irure ut Lorem proident. Ipsum do pariatur est ad ad
            veniam in commodo id reprehenderit adipisicing. Proident duis
            exercitation ad quis ex cupidatat cupidatat occaecat adipisicing.
          </p>
          <p>
            Tempor quis dolor veniam quis dolor. Sit reprehenderit eiusmod
            reprehenderit deserunt amet laborum consequat adipisicing officia qui
            irure id sint adipisicing. Adipisicing fugiat aliqua nulla nostrud.
            Amet culpa officia aliquip deserunt veniam deserunt officia
            adipisicing aliquip proident officia sunt.
          </p>
        </>
      ),
      badge: "Pengasuh",
      image: "https://smulandu2-jbg.sch.id/wp-content/uploads/2018/11/WhatsApp-Image-2018-11-03-at-07.51.38.jpeg",
    },
    {
      title: "Kantor Pusat Ponpes Darul Ulum",
      description: (
        <>
          <p>
            Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
            deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
            non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
            sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
            velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
            commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
          </p>
          <p>
            In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse
            veniam fugiat esse qui sint ad sunt reprehenderit do qui proident
            reprehenderit. Laborum exercitation aliqua reprehenderit ea sint
            cillum ut mollit.
          </p>
        </>
      ),
      badge: "Pondok Pesantren Darul Ulum Jombang",
      image:
        "https://www.biayatarif.com/wp-content/uploads/2023/09/Biaya-Pondok-Pesantren-Darul-Ulum-Jombang-Terbaru.jpg",
    },
    {
      title: "SMA DARUL ULUM 2 JOMBANG",
      description: (
        <>
          <p>
            Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
            deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
            non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
            sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
            velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
            commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
          </p>
        </>
      ),
      badge: "Sekolah Darul Ulum",
      image:
        "http://smulandu2-jbg.sch.id/wp-content/uploads/2015/04/Gambar-Gedung1.jpg",
    },
  ];
  return (
    <>
    <AuroraBackground>
  <div className="flex flex-col items-center justify-center h-[40rem]  ">
    <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
      Penjelasan Tentang Asrama Bani Umar Tahun 2024
    </p> <br />
    <br />
    <TypewriterEffect words={words}/>
    <br /> <br />
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          <Link href="#tentang" scroll={false} >Selengkapnya</Link>
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          <Link href="/login">Login</Link>
        </button>
      </div>
    </div>
   </AuroraBackground>
    
    <section>
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>
 
            <p className={twMerge(roboto.className, "text-xl mb-4")}>
              {item.title}
            </p>
 
            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  loading="lazy"
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
    </section>
   
    </>
  );
}
