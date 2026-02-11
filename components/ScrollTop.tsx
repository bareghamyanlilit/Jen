import { FaArrowUp } from "react-icons/fa";

const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

export function ScrollTop() {
  return (
    <button
      onClick={scrollTop}
      className="fixed bottom-6 right-6 p-3 rounded-full bg-[#3a2f2f] text-white shadow-lg"
    >
      <FaArrowUp />
    </button>
  );
}
