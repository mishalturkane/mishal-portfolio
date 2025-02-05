import Link from "next/link"

interface Gadget {
  name: string
  description?: string
  link: string
}

const gadgets: Gadget[] = [
  { name: "Laptop", description: "HP Pavilion , 11th Gen , 16gb RAM, 512gb ROM", link: "#" },
  { name: "Monitor", description: "HP basics 75hrz", link: "#" },
  { name: "Phone", description: "Redmi note 9 pro max , 6gb RAM, 64gb ROM", link: "#" },
  { name: "Headphone", link: "#" },
  { name: "Monitor Table", link: "#" },
  { name: "lamp", link: "#" },
  { name: "pantab", link: "#" },
]

export default function Gadgets() {
  return (
    <div className="flex flex-col items-start text-left w-full max-w-[800px] mx-auto mt-6">
      <h2 className="font-semibold text-lg mb-6">gadgets</h2>
      {gadgets.map((gadget, index) => (
        <div key={index} className="mt-6 flex flex-col items-start text-left space-y-4">
          <div>
            {gadget.name}
            {gadget.description && `: ${gadget.description}`}
          </div>
          <Link href={gadget.link} className="mt-2 text-gray-400 hover:text-gray-600 group">
            link
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
            </span>
          </Link>
        </div>
      ))}
    </div>
  )
}

