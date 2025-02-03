import Navbar from "@/components/Navbar"
import Profile from "@/components/Profile"
import AboutMe from "@/components/AboutMe"
import Experience from "@/components/Experience"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Socials from "@/components/Socials"

export default function Home() {
  return (
    <main className="max-w-[800px] mx-auto pt-6 px-4 sm:px-6 lg:px-8">
      <Navbar />
      <Profile />
      <AboutMe />
      <Experience />
      <Projects />
      <Skills />
      <Socials />
    </main>
  )
}

