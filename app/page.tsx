"use client";

import { useEffect, useState } from "react";
import {
  FaChurch,
  FaHome,
  FaUtensils,
  FaMapMarkedAlt,
  FaHeart,
  FaArrowUp,
} from "react-icons/fa";
import Calendar from "./calendar";

export default function Home() {
  const weddingDate:any = new Date("2026-06-15T12:00:00");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    finished: false,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now:any = new Date();
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
      address: "Հ․ Թումանյան փողոց, 42 տուն",
    },
    {
      icon: <FaChurch />,
      time: "14:30",
      title: "Պսակադրություն",
      address: "Սուրբ Հռիփսիմե եկեղեցի",
    },
    {
      icon: <FaHome />,
      time: "16:00",
      title: "Փեսայի տուն",
      address: "Մովսես Խորենացի փողոց, 7 տուն",
    },
    {
      icon: <FaUtensils />,
      time: "17:30",
      title: "Հարսանյաց հանդիսություն",
      address: "Արև Ռեստորանային Համալիր",
    },
  ];
  return (
    <main
      className="min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80)",
      }}
    >
      {/* DARK OVERLAY */}
      <div className="bg-black/55 min-h-screen relative">
        {/* HERO */}
        <section className="relative flex flex-col items-center justify-center text-center min-h-[90vh] px-6">
          <p className="tracking-[0.35em] absolute top-20 uppercase text-sm mb-5 opacity-80">
            Հարսանեկան հրավիրատոմս
          </p>

          <h1 className="text-6xl md:text-7xl font-serif tracking-wider">
            Ժենյա <span className="mx-2">&</span> Վալոդիա
          </h1>

          <p className="mt-6 text-lg max-w-md opacity-90">
            Սիրով հրավիրում ենք Ձեզ մասնակցելու մեր կյանքի կարևոր և հիշարժան
            օրվան
          </p>

          <div className="mt-6 px-6 py-2 border border-white/70 rounded-full text-sm">
            15 Օգոստոս, 2026
          </div>

          {/* COUNTDOWN */}
          <div className="absolute bottom-10 flex gap-3 md:gap-4">
            {timeLeft.finished ? (
              <div className="text-white text-2xl font-semibold px-4 py-2 bg-red-500 rounded-xl shadow">
                Հարսանիքն արդեն սկսվել է 🎉
              </div>
            ) : (
              <>
                <TimeBox label="Օր" value={timeLeft.days} />
                <TimeBox label="Ժամ" value={timeLeft.hours} />
                <TimeBox label="Րոպե" value={timeLeft.minutes} />
                <TimeBox label="Վայրկյան" value={timeLeft.seconds} />
              </>
            )}
          </div>
        </section>

        {/* PROGRAM */}
        <section className="bg-white text-[#3a2f2f] rounded-t-[40px] px-6 py-12">
          <h2 className="text-center text-3xl mb-10 font-serif">Օրվա Ծրագիր</h2>
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

        <Calendar year={2026} month={8} highlightDay={15} />

        {/* FOOTER */}
        <footer className="py-10 text-center text-sm bg-[#fdf8f5]   text-[#3a2f2f]">
          <p>Ժենիա 📞 091 00 00 00 | Վալոդիա 📞 093 00 00 00</p>
          <p className="mt-2 opacity-60">Պատրաստվել է հարսնաքրոջ կողմից</p>
        </footer>

        {/* SCROLL TO TOP */}
        <button
          onClick={scrollTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-[#3a2f2f] text-white shadow-lg"
        >
          <FaArrowUp />
        </button>
      </div>
    </main>
  );
}

/* COMPONENTS */

const TimeBox = ({ label, value }) => (
  <div className="backdrop-blur-md bg-white/80  px-5 py-3 rounded-2xl shadow text-center min-w-50px]">
    <div className="text-2xl md:text-3xl font-semibold text-[#3a2f2f]">
      {value}
    </div>
    <div className="text-xs uppercase tracking-wide text-[#6b4f4f]">
      {label}
    </div>
  </div>
);

const Program = ({ icon, time, title, address }) => (
  <div className="max-w-xl mx-auto mb-6 bg-[#fdf8f5] rounded-2xl p-5 shadow flex gap-4">
    <div className="text-xl text-[#8b5d5d] mt-1">{icon}</div>
    <div>
      <div className="text-xl opacity-80">{time}</div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm mt-1">{address}</p>

      <a
        href={`https://www.google.com/maps/search/${address}`}
        target="_blank"
        className="inline-flex items-center gap-2 mt-3 px-4 py-1.5 text-sm border rounded-full hover:bg-[#3a2f2f] hover:text-white transition"
      >
        <FaMapMarkedAlt />
        Ինչպես հասնել
      </a>
    </div>
  </div>
);
