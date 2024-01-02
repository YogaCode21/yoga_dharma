import MainAbout from "./components/MainAbout";
import MainContent from "./components/MainContent";

export default function page() {
  return (
    <>
      <div className="grid grid-cols-[1fr_1fr] h-screen items-center justify-items-center">
        <MainAbout />
        <MainContent />
      </div>
    </>
  );
}
