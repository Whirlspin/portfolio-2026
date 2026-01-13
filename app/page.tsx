import HomepageIntro from "./components/homepageIntro";
import MyProjects from "./components/myProjects";
import TechStack from "./components/techStack";
import Contact from "./components/contact";

export default function Home() {
  return (
    <>
      <HomepageIntro />

      <MyProjects />

      <TechStack />

      <Contact />
    </>
  );
}
