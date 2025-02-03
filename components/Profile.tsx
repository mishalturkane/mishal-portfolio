import Image from "next/image"

export default function Profile() {
  return (
    <div className="flex flex-col sm:flex-row justify-start space-y-4 sm:space-y-0 sm:space-x-4 mt-10">
      <div className="flex justify-center">
      <Image
  src="https://ugc.production.linktr.ee/f2f5e7f8-1a13-496d-aca7-6ffdc548902f_profile-orgnl.jpeg"
  alt="Mishal Turkane"
  width={100}
  height={100} // Change height to match width for a perfect circle
  className="rounded-full"
/>

      </div>
      <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
        <div className="text-white text-2xl font-medium">👋Hey, I am Mishal</div>
        <div className="font-medium">
          I'm a full-time Blockchain engineer, open to help solana founder to build DeFi Stuff.
        </div>
        <div className="font-medium">20, he/him</div>
      </div>
    </div>
  )
}

