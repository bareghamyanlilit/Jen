"use client";

import { useEffect, useState } from "react";
import {
  FaChurch,
  FaHome,
  FaUtensils,
  FaMapMarkedAlt,
  FaArrowUp,
} from "react-icons/fa";
import Calendar from "../components/calendar";
import { motion } from "framer-motion";
import { MusicPlayer } from "@/components/music";

const anim: any = {
  initial: { opacity: 0, y: 10 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeIn",
    },
  },
  viewport: { once: true },
};

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [open, setOpen] = useState(false);

  const weddingDate: any = new Date("2026-06-17T12:00:00");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    finished: false,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now: any = new Date();
      const diff = weddingDate - now;

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
          finished: false,
        });
      } else {
        setTimeLeft((prev) => ({ ...prev, finished: true }));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const program = [
    {
      icon: <FaHome />,
      time: "12:00",
      title: "Հարսի տուն",
      address: "Գեղակերտ",
    },
    {
      icon: <FaChurch />,
      time: "14:30",
      title: "Պսակադրություն",
      address: "Սուրբ Հռիփսիմե եկեղեցի",
    },
    {
      icon: <FaUtensils />,
      time: "17:30",
      title: "Հարսանյաց հանդիսություն",
      address: "Արև Ռեստորանային Համալիր",
    },
  ];
  return (
    <main className="max-w-xl m-auto">
      <div>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="fixed z-10 bg-[#3a2f2f] text-[#fdf8f5] right-4 top-4 rounded-full w-10 h-10 flex justify-center items-center"
        >
          {isPlaying ? "||" : "▶"}
        </button>

        <MusicPlayer isPlaying={isPlaying} />
      </div>

      <div
        className={`bg-no-repeat bg-center fixed z-100 w-full h-full flex flex-col gap-10 justify-center items-center text-white transition ${open ? "hidden -z-10" : ""}`}
        style={{
          backgroundImage: "url('/first copy.jpg')",
        }}
      >
        <p>Ժենիի և Վլոի հարսանեկան հրավիրատոմս</p>
        <button
          onClick={() => {
            setIsPlaying(!isPlaying);
            setOpen(!open);
          }}
          className="p-2 border rounded-xl"
        >
          Բացել
        </button>
      </div>

      <div
        className="min-h-screen max-w-xl m-auto bg-cover  bg-no-repeat  bg-center   text-[#fdf8f5]  flex flex-col items-center justify-end text-center p-8 "
        style={{
          backgroundImage: "url('/first.jpg')",
        }}
      >
        <h1 className="absolute backdrop-blur-xl  p-2 rounded-2xl text-4xl md:text-7xl font-serif! tracking-wider">
          Ժենի <span className="mx-2">և</span> Վլո
        </h1>
      </div>

      <section className=" flex flex-col gap-5 text-center bg-white text-[#3a2f2f]  px-6 py-10">
        <motion.h2 {...anim} className=" font-bold text-lg">
          Միջոցառմանը մնաց
        </motion.h2>
        <motion.div {...anim} className="">
          {timeLeft.finished ? (
            <div className="text-white text-2xl font-semibold px-4 bg-red-500 rounded-xl shadow">
              Հարսանիքն արդեն սկսվել է 🎉
            </div>
          ) : (
            <div className="flex justify-center text-base ">
              <TimeBox label="Օր" value={timeLeft.days} /> :
              <TimeBox label="Ժամ" value={timeLeft.hours} /> :
              <TimeBox label="Րոպե" value={timeLeft.minutes} /> :
              <TimeBox label="Վայրկյան" value={timeLeft.seconds} />
            </div>
          )}
        </motion.div>

        <motion.h2 {...anim} className=" font-bold text-lg">
          Սիրելի՛ ընկերներ և բարեկամներ
        </motion.h2>
        <motion.p {...anim} className=" text-base  opacity-90">
          Սիրով հրավիրում ենք Ձեզ մասնակցելու մեր կյանքի կարևոր և հիշարժան օրվան
        </motion.p>
      </section>

      <section
        className="text-6xl text-[#fdf8f5] min-h-[95vh] bg-center"
        style={{
          backgroundImage: "url('/second.jpg')",
        }}
      >
        <div className="min-h-[95vh]  px-4 py-8 backdrop-brightness-50 flex flex-col justify-between text-center ">
          <motion.div {...anim} className="flex flex-col gap-4">
            <p className=" ">Save</p>
            <p className="text-end pr-8">The</p>
            <p className=" ">Date</p>
          </motion.div>

          <motion.h2 {...anim} className="text-3xl">
            17 / 06 / 2026
          </motion.h2>

          <motion.p {...anim} className=" text-base opacity-90">
            Գեղեցիկ օր երբ մենք կդառնանք ամուսիններ
          </motion.p>
        </div>
      </section>

      <section className="bg-[#fdf8f5] text-[#3a2f2f]  px-6 py-12">
        <motion.h2 {...anim} className="text-center text-lg mb-10 font-serif">
          Ժամանակացույց
        </motion.h2>
        {program.map((item, index) => (
          <Program
            key={index}
            icon={item.icon}
            time={item.time}
            title={item.title}
            address={item.address}
          />
        ))}
      </section>

      <section
        className="min-h-[80vh] bg-fixed bg-center text-white brightness-50 "
        style={{
          backgroundImage: "url('/last.jpg')",
        }}
      ></section>

      <Calendar year={2026} month={6} highlightDay={17} />

      <section className="text-center bg-white text-[#3a2f2f]  px-2 py-8">
        <motion.h2 {...anim} className="my-4 font-bold text-base">
          Խնդրում ենք նախապես տեղեկացնել Ձեր մասնակցության մասին մինչև Մայիսի
          15-ը
        </motion.h2>

        <motion.p {...anim} className=" text-base font-bold  opacity-90">
          Սիրո՛վ սպասում ենք
        </motion.p>
      </section>

      <footer className="py-10 text-center text-sm bg-[#b4aba5]   text-[#fdf8f5]">
        <p>
          <a href="tel:+37498914109">Ժենյա | 098 91 41 09</a>
        </p>
        <p>
          <a href="tel:+37499611016">Վլո | 099 61 10 16</a>
        </p>
        <p className="mt-2 opacity-80">Պատրաստվել է հարսնաքրոջ կողմից</p>
      </footer>

      <button
        onClick={scrollTop}
        className="fixed bottom-6 right-6 p-3 rounded-full bg-[#3a2f2f] text-white shadow-lg"
      >
        <FaArrowUp />
      </button>
    </main>
  );
}

const TimeBox = ({ label, value }) => (
  <div className="px-2 text-center ">
    <h2>{value}</h2>
    <p>{label}</p>
  </div>
);

const Program = ({ icon, time, title, address }) => (
  <div className="my-8 flex items-center text-xl flex-col">
    <motion.p {...anim} className="text-[#8b5d5d] text-4xl">
      {icon}
    </motion.p>
    <motion.p {...anim} className=" opacity-80">
      {time}
    </motion.p>
    <motion.h3 {...anim} className="">
      {title}
    </motion.h3>
    <motion.p {...anim} className="text-sm  opacity-80">
      {address}
    </motion.p>

    {title === "Պսակադրություն" && (
      <img src="/ekexeci.jpg" className="my-2 max-w-full" />
    )}
    {title === "Հարսանյաց հանդիսություն" && (
      <img src="/restoran.jpg" className="my-2 max-w-full" />
    )}
    {address == "Գեղակերտ" ? (
      <motion.a
        {...anim}
        href="https://maps.app.goo.gl/BDyxceF5CcrehGZR6?g_st=com.google.maps.preview.copy"
        target="_blank"
        className="inline-flex items-center gap-2 mt-3 px-4 py-1.5 text-sm "
      >
        <FaMapMarkedAlt />
        Ինչպես հասնել
      </motion.a>
    ) : (
      <motion.a
        {...anim}
        href={`https://www.google.com/maps/search/${address}`}
        target="_blank"
        className="inline-flex items-center gap-2 mt-3 px-4 py-1.5 text-sm "
      >
        <FaMapMarkedAlt />
        Ինչպես հասնել
      </motion.a>
    )}
    {title !== "Հարսանյաց հանդիսություն" && (
      <img
        src="https://static.thenounproject.com/png/arrow-icon-5953741-512.png"
        className="rotate-215 w-20 h-20 object-cover opacity-60 my-8"
        alt=""
      />
    )}
  </div>
);
