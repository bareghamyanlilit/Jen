import { anim, program } from "@/data/data";
import { motion } from "framer-motion";
import { FaMapMarkedAlt } from "react-icons/fa";
export function Program() {
  return (
    <section className="bg-[#fdf8f5] text-[#3a2f2f]  px-6 py-12">
      <motion.h2 {...anim} className="text-center text-lg mb-10 font-serif">
        Ժամանակացույց
      </motion.h2>
      {program.map((item, index) => (
        <ProgramItem
          key={index}
          icon={item.icon}
          time={item.time}
          title={item.title}
          address={item.address}
        />
      ))}
    </section>
  );
}

const ProgramItem = ({ icon, time, title, address }) => (
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
    ) : address == "Բանգլադեշ" ? (
      <motion.a
        {...anim}
        href="https://www.google.com/maps/place/40%C2%B010'24.4%22N+44%C2%B027'06.3%22E/@40.1729284,44.4518814,17z/data=!4m4!3m3!8m2!3d40.173432!4d44.451757?entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D"
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
