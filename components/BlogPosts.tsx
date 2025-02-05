import Link from "next/link"

interface BlogPost {
  title: string
  date: string
  link?: string
}

const blogPosts: BlogPost[] = [
  { title: "🔕SolQuizr", date: "1 Feb, 2024" },
  { title: "🚀Solana Sumo", date: "20 Oct, 2024" },
  { title: "A Step-by-Step Guide for Developers New to Soroban", date: "26 Sep, 2024", link: "#" },
  { title: "A Step-by-Step Guide for Developers New to Soroban", date: "26 Sep, 2024", link: "#" },
  { title: "Stellar: Bringing Fast, Affordable Payments to the World", date: "26 Sep, 2024", link: "#" },
  { title: "Time ?......", date: "15 Jun, 2023", link: "#" },
]

export default function BlogPosts() {
  return (
    <div className="flex flex-col items-start text-left w-full max-w-[800px] mx-auto mt-6">
      <h2 className="font-semibold text-lg mb-6">blog</h2>
      {blogPosts.map((post, index) => (
        <div key={index} className="mt-6 w-full">
          {post.link ? (
            <Link href={post.link} className="text-xl hover:underline">
              {post.title}
            </Link>
          ) : (
            <p className="text-xl">{post.title}</p>
          )}
          <p className="text-sm text-gray-300 mt-1">{post.date}</p>
        </div>
      ))}
    </div>
  )
}

