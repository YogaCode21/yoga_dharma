import Link from "next/link";
export default function MainContent() {
  return (
    <>
      <div className="flex flex-col gap-5 py-5">
        <div className="bg-[#1e1e1e] rounded p-6 max-w-[500px]">
          <h1 className="text-2xl font-bold ">
            <span className="text-[#3c3c3c]">01. </span>
            About Me
          </h1>
          <p className="p-3">
            I am a teenager who likes coding, especially making something
            beautiful and meaningful, I am a Indonesian, was in Bali as a
            student
          </p>
        </div>
        <div className="bg-[#1e1e1e] rounded p-6 max-w-[500px]">
          <h1 className="text-2xl font-bold ">
            <span className="text-[#3c3c3c]">02. </span>
            Project
          </h1>
          <p className="p-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
            voluptatibus corporis perferendis dicta consectetur cum id rerum
            temporibus cumque maxime.
          </p>
          <a
            className="text-[#61DAFB] underline underline-offset-4 hover:text-white "
            href="#"
          >
            View More
          </a>
        </div>
        <div className="bg-[#1e1e1e] rounded p-6 max-w-[500px]">
          <h1 className="text-2xl font-bold ">
            <span className="text-[#3c3c3c]">03. </span>
            Contact
          </h1>
          <ul className="p-3">
            <li>Number : 085792101795</li>
            <li>Email : yogacode2006@gmail.com</li>
            <li>Location : Indonesia, Bali, Denpasar</li>
          </ul>
        </div>
      </div>
    </>
  );
}
