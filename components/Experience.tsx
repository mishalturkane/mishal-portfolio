export default function Experience() {
    return (
      <div>
        <div className="text-xl mt-16 mb-8 font-bold">Experience 💼</div>
        <div className="m-2 w-full">
          <div className="flex flex-col sm:flex-row justify-between">
            <div>Java Developer</div>
            <div className="mt-2 sm:mt-0">May 2023 - Aug 2023</div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between mt-2 sm:mt-0">
            <div>
              at,
              <a
                className="hover:text-gray-500 group"
                target="_blank"
                rel="noopener noreferrer"
                href="https://a2infotech.in/"
              >
                A2Infotech
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                </span>
              </a>
            </div>
            <div className="mt-2 sm:mt-0">Bhopal</div>
          </div>
          <ul className="text-sm text-gray-300 m-4 list-none space-y-4">
            <li className="pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-gray-500 before:top-0">
              <p className="whitespace-normal break-words">
                Built a desktop application using Java for the company, focusing on performance and user experience.
                Worked extensively with Core Java, SQL, GUI development, JDBC, and the Swing framework.
              </p>
            </li>
            <li className="pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-gray-500 before:top-0">
              <p className="whitespace-normal break-words">
                Developed interactive user interfaces with Swing, enhancing usability and responsiveness. Optimized
                application performance by writing efficient SQL queries and improving backend logic.
              </p>
            </li>
          </ul>
        </div>
      </div>
    )
  }
  
  