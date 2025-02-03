import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      name: "SolQuizr",
      liveLink: "https://rqkjo3f2pzvcsdsp.vercel.app/",
      githubLink: "https://github.com/mishalturkane/DQuiz",
      status: "🏗️ Ongoing",
      description: [
        "A decentralized quiz platform for interactive engagement in events and meetings.",
        "Participants can vote in polls and answer quizzes in real-time using their devices.",
        "Quiz admins can set prize amounts for top winners using cryptocurrency.",
        "Users connect their wallets (e.g., Phantom) to join and compete in contests.",
        "Winners receive crypto rewards based on their ranking in the quiz.",
      ],
      category: "decentralized platform",
      technologies: "Rust, TypeScript, NextJS, Solana",
    },
    {
      name: "Solana Wallet Adaptor",
      liveLink: "https://major-project-crypto-wallet-adaptor.vercel.app/",
      githubLink: "https://github.com/mishalturkane/major-project",
      status: "👍🏻Maintained",
      description: [
        "Integrated Solana Wallet Adapter for seamless wallet connectivity.",
        "Utilizes Anza's latest wallet adapter for improved performance and stability.",
        "Supports multiple Solana wallets like Phantom, Solflare, and Backpack.",
      ],
      category: "wallet adaptor",
      technologies: "React",
    },
    {
      name: "Solana Faucet",
      liveLink: "https://solana-faucet-seven.vercel.app/",
      githubLink: "https://github.com/mishalturkane/solana-faucet",
      status: "👍🏻Maintained",
      description: [
        "Built with Solana Web3.js and Next.js for seamless faucet functionality.",
        "Allows users to request SOL on the devnet/testnet for development purposes.",
        "Integrated Phantom wallet support for secure and easy transactions.",
      ],
      category: "faucet",
      technologies: "JavaScript",
    },
  ]

  return (
    <div>
      <div className="text-xl mt-12 mb-8 font-bold">Projects 💡</div>
      {projects.map((project, index) => (
        <div key={index} className="mb-8">
          <div className="flex flex-col sm:flex-row justify-between">
            <div>{project.name}</div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between mt-2">
            <div className="space-x-3">
              <Link
                href={project.liveLink}
                className="hover:text-gray-500 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                live
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                </span>
              </Link>
              <Link
                href={project.githubLink}
                className="hover:text-gray-500 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                github
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                </span>
              </Link>
            </div>
          </div>
          <button className="btn bg-[#27272a] hover:text-gray-500 pr-2 pl-1 mt-2 py-1 rounded-md">
            {project.status}
          </button>
          <div>
            <ul className="text-sm text-gray-300 m-4 list-none space-y-3">
              {project.description.map((item, i) => (
                <li
                  key={i}
                  className="pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-gray-500 before:top-0"
                >
                  <p className="whitespace-normal break-words">{item}</p>
                </li>
              ))}
            </ul>
            <div className="text-sm text-gray-400 m-4 pl-6">
              <p className="mb-1">Category: {project.category}</p>
              <p>Technologies used: {project.technologies}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

