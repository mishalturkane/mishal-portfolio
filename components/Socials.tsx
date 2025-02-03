import Link from "next/link"

export default function Socials() {
  const socials = [
    { name: "Github", icon: "fa-github", link: "https://github.com/mishalturkane", username: "@mishalturkane" },
    { name: "Twitter", icon: "fa-x-twitter", link: "https://x.com/mishalturkane", username: "@mishalturkane" },
    {
      name: "LinkedIn",
      icon: "fa-linkedin",
      link: "https://www.linkedin.com/in/mishalturkane/",
      username: "linkedin.com/in/mishalturkane/",
    },
    { name: "Gmail", icon: "fa-envelope", link: "mailto:mishalturkane@gmail.com", username: "mishalturkane@gmail.com" },
    {
      name: "Instagram",
      icon: "fa-instagram",
      link: "https://www.instagram.com/the.mishall/",
      username: "the.mishall",
    },
    { name: "YouTube", icon: "fa-youtube", link: "https://www.youtube.com/@mishalturkane", username: "@mishalturkane" },
    {
      name: "Hashnode",
      icon: "fa-hashnode",
      link: "https://hashnode.com/@mishalturkane",
      username: "hashnode.com/@mishalturkane",
    },
    { name: "Resume", icon: "fa-file", link: "/resume", username: "mishalturkane.me/resume" },
  ]

  return (
    <div className="text-xl mt-12 text-white">
      <h2 className="mb-4 font-bold">Socials 💭</h2>
      <div className="text-base mt-4 text-gray-400 space-y-3">
        {socials.map((social, index) => (
          <p key={index} className="flex flex-col sm:flex-row items-start sm:items-center">
            <span className="text-white sm:w-1/4 flex items-center">
              {social.name}: <i className={`fa-brands ml-1 ${social.icon}`}></i>
            </span>
            <Link
              href={social.link}
              className="ml-0 sm:ml-4 hover:text-gray-500 group"
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.username}
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                <i
                  className="fa-solid fa-arrow-right text-sm fa-rotate-by ml-1"
                  style={{ "--fa-rotate-angle": "330deg" }}
                ></i>
              </span>
            </Link>
          </p>
        ))}
      </div>
    </div>
  )
}

