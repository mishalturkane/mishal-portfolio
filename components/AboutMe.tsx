import Link from "next/link"

export default function AboutMe() {
  return (
    <div className="flex flex-col items-start text-left mt-6">
      <div className="font-semibold text-lg mb-6">about me</div>
      <div className="mt-6">
        Hey! I am an Blockchain engineer experties in a DeFi helping the solana product founders to build the scalable
        and robust application As a dedicated Solana blockchain developer, I am engaged in building advanced projects
        within the Solana ecosystem.
      </div>
      <div className="w-full p-4 text-sm text-black mt-12 rounded-md bg-[#d4d4d4] mx-auto pt-3">
        <div>
          I am currently open for intern/full-time engineering roles, specializing in building robust and resilient
          backend infrastructure, fast & efficient APIs, and libraries, with a strong focus on Solana blockchain
          integration and decentralized solutions.
        </div>
        <div className="pt-2 mt-2">
          Excited to collaborate with a team of engineers or freelancers working on groundbreaking Solana-based
          products. Interested in creating the future of Web3 together? Feel free to schedule a meet!
        </div>
        <div className="mt-4 flex flex-col sm:flex-row space-y-4 sm:space-y-0">
          <button className="btn bg-black text-white p-3 sm:mr-2 hover:text-gray-500 font-bold">Schedule a meet</button>
          <div className="flex flex-col pt-2 sm:flex-row space-y-2 sm:space-y-0 sm:space-x-7 mt-3">
            <Link href="/resume" className="hover:text-gray-500 group">
             <a href="">Resume</a> 
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              </span>
            </Link>
            <Link href="/video-resume" className="hover:text-gray-500 group">
              Video Resume
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              </span>
            </Link>
            <Link href="/proof-of-work" className="hover:text-gray-500 group">
              Proof of Work
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              </span>
            </Link>
          </div>
        </div>
      </div>

      
    </div>
  )
}

