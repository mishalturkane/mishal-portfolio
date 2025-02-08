import Navbar from "@/components/Navbar"
import Profile from "@/components/Profile"
import Gadgets from "@/components/Gadgest"
import Socials from "@/components/Socials"

export default function Resume() {
  return (
    <main className="max-w-[800px] mx-auto pt-6 px-4 sm:px-6 lg:px-8">
      <Navbar />
      <Profile />
      <div>
        <button className="mt-12"><a target="_blank" href="https://drive.google.com/file/d/14xO-NqFTmgvXI5P0N5dibw4-CxozlbWm/view?usp=sharing">Download now</a></button>
      </div>
    </main>
  )
}

