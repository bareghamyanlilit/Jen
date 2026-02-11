"use client";

import { useState } from "react";
import { Calendar } from "../components/calendar";
import { motion } from "framer-motion";
import { MusicPlayer } from "@/components/music";
import { anim } from "@/data/data";
import { Program } from "@/components/Program";
import { TimeBox } from "@/components/TimeBox";
import { ScrollTop } from "@/components/ScrollTop";
import { Footer } from "./footer";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <div className="max-w-xl m-auto h-screen">
      {/* open */}
      <div
        className={`bg-no-repeat justify-self-center bg-center fixed z-100 w-full h-full flex flex-col gap-10 justify-center items-center text-white transition ${open ? "hidden -z-10" : ""}`}
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

      <div className={`max-w-xl m-auto ${open ? "" : "hidden"}`}>
        {/* music button */}
        <div>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="fixed z-10 bg-[#3a2f2f] text-[#fdf8f5] right-4 top-4 rounded-full w-10 h-10 flex justify-center items-center"
          >
            {isPlaying ? "||" : "▶"}
          </button>

          <MusicPlayer isPlaying={isPlaying} />
        </div>

        {/* 1 img */}
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

        <TimeBox />

        {/* 2 img */}
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

        <Program />

        {/* 3 img */}
        <section
          className="min-h-[80vh] bg-fixed bg-center text-white brightness-50 "
          style={{
            backgroundImage: "url('/last.jpg')",
          }}
        ></section>

        <Calendar year={2026} month={6} highlightDay={17} />

        {/* text info */}
        <section className="text-center bg-white text-[#3a2f2f]  px-2 py-8">
          <motion.h2 {...anim} className="my-4 font-bold text-base">
            Խնդրում ենք նախապես տեղեկացնել Ձեր մասնակցության մասին մինչև Մայիսի
            15-ը
          </motion.h2>

          <motion.p {...anim} className=" text-base font-bold  opacity-90">
            Սիրո՛վ սպասում ենք
          </motion.p>
        </section>

        <Footer />
        <ScrollTop />
      </div>
    </div>
  );
}
