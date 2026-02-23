import { FaChurch, FaHome, FaUtensils } from "react-icons/fa";

export const anim: any = {
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

export const program = [
  {
    icon: <FaHome />,
    time: "12:00",
    title: "Փեսայի տուն",
    address: "Բանգլադեշ",
  },
  {
    icon: <FaHome />,
    time: "13:00",
    title: "Հարսնացուի տուն",
    address: "Գեղակերտ",
  },
  {
    icon: <FaChurch />,
    time: "15:00",
    title: "Պսակադրություն",
    address: "Սուրբ Գայանե եկեղեցի",
  },
  {
    icon: <FaUtensils />,
    time: "17:30",
    title: "Հարսանյաց հանդիսություն",
    address: "Արև Ռեստորանային Համալիր",
  },
];
