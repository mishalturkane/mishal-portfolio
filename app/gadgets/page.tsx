import Navbar from "@/components/Navbar"
import Profile from "@/components/Profile"
import Gadgets from "@/components/Gadgest"
import Socials from "@/components/Socials"

export default function GadgetsPage() {
  return (
    <main className="max-w-[800px] mx-auto pt-6 px-4 sm:px-6 lg:px-8">
      <Navbar />
      <Profile />
      <Gadgets />
      <Socials />
    </main>
  )
}

