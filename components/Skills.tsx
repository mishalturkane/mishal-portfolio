export default function Skills() {
    const skills = [
      { category: "Language", items: "Rust, TypeScript, Solidity, Java" },
      { category: "Blockchain and Technologies", items: "Solana, Ethereum, Cryptography, Hashing" },
      { category: "Blockchain Frameworks", items: "Anchor, Foundry, Hardhat" },
      { category: "Frameworks & Libraries", items: "React, Next.js, Anchor" },
      { category: "Authentication", items: "JWT, Next.js Auth" },
      { category: "Databases", items: "Oracle, MySQL, PostgreSQL" },
      { category: "Infrastructure Tools", items: "GitHub, Linux, Docker, AWS" },
    ]
  
    return (
      <div className="mt-12 text-white">
        <h2 className="text-xl mb-4 font-bold">Skills 💻</h2>
        <div className="text-sm text-gray-400 space-y-3">
          {skills.map((skill, index) => (
            <p key={index} className="flex flex-col sm:flex-row">
              <span className="text-white sm:w-1/3 mb-1 sm:mb-0">{skill.category}:</span>
              <span className="pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-gray-500 before:top-0 whitespace-normal break-words">
                {skill.items}
              </span>
            </p>
          ))}
        </div>
      </div>
    )
  }
  
  