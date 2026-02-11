import Link from "next/link"; 

export function Footer() {
  return (
    <footer className="bottom-0 py-10 text-center text-sm bg-[#b4aba5]   text-[#fcfbfb]">
      <p>
        <a href="tel:+37498914109">Ժենի | 098 91 41 09</a>
      </p>
      <p>
        <a href="tel:+37499611016">Վլո | 099 61 10 16</a>
      </p>
      <hr className="my-5" />
      <Link href="https://lilitbareghamyan.vercel.app/">
        <p className="mt-2">
          Պատրաստվել է <span className=" border-b">Հարսնաքրոջ</span> կողմից
        </p>
      </Link>
    </footer>
  );
}
