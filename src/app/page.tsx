import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { CursorGlow } from "@/components/ui/CursorGlow";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { fetchGitHubRepos } from "@/lib/github";

export default async function Home() {
  const githubRepos = await fetchGitHubRepos("YanLn1s");

  return (
    <>
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Projects githubRepos={githubRepos} />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
