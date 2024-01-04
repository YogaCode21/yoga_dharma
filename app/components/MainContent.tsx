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
          <Link
            className="text-[#61DAFB] underline underline-offset-4 hover:text-white "
            href="/projects"
          >
            View More
          </Link>
        </div>
        <div className="bg-[#1e1e1e] rounded p-6 max-w-[500px]">
          <h1 className="text-2xl font-bold ">
            <span className="text-[#3c3c3c]">03. </span>
            Contact
          </h1>
          <ul className="p-3">
            <li className="flex items-center  gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="17"
                width="15"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#fff"
                  d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                />
              </svg>
              : 085792101795
            </li>
            <li className="flex items-center  gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="16"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#fff"
                  d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                />
              </svg>
              : yogacode2006@gmail.com
            </li>
            <li className="flex items-center  gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="12"
                viewBox="0 0 384 512"
              >
                <path
                  fill="#fff"
                  d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                />
              </svg>
              : Indonesia, Bali, Denpasar
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
