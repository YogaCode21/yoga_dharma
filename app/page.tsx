import MainAbout from "./components/MainAbout";
import MainContent from "./components/MainContent";

export default function page() {
  return (
    <>
      <div className="grid grid-cols-[1fr] h-screen items-center justify-items-center px-5 gap-5 md:grid-cols-[1fr_1fr]">
        <MainAbout />
        <MainContent />
      </div>
    </>
  );
}
