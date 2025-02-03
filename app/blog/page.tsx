import Navbar from "@/components/Navbar"
import Profile from "@/components/Profile"
import BlogPosts from "@/components/BlogPosts"
import Socials from "@/components/Socials"

export default function BlogPage() {
  return (
    <main className="max-w-[800px] mx-auto pt-6 px-4 sm:px-6 lg:px-8">
      <Navbar />
      <Profile />
      <BlogPosts />
      <Socials />
    </main>
  )
}

