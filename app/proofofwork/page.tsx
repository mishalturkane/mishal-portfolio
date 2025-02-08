import Navbar from "@/components/Navbar"
import Profile from "@/components/Profile"

export default function Resume() {
  return (
    <main className="max-w-[800px] mx-auto pt-6 px-4 sm:px-6 lg:px-8">
      <Navbar />
      <Profile />
      <div>
        <button className="mt-12"><a target="_blank" href="https://github.com/mishalturkane">See th POW</a></button>  
      </div>
    </main>
  )
}

