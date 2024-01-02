export default function MainAbout() {
  return (
    <>
      <div className="flex flex-col gap-3 mt-10 md:mt-0">
        <h1 className="text-5xl font-bold ">
          Hello 👋,<span className="block"> I&apos;m Yoga Dharma</span>
        </h1>
        <p className="text-lg">A FullStack Web Developer</p>
        <button className="bg-[#1e1e1e] rounded-full py-3 hover:bg-white hover:text-[#1e1e1e]">
          Contact Me
        </button>
      </div>
    </>
  );
}
