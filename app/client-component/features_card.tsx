const cards = [
  {
    title: "Strategic Ideas Thinking",
    description:
      "We elevate with your business goals in mind, ensuring impactful results.",
  },
  {
    title: "Collaborative Process",
    description:
      "We work closely with you, blending your vision with our creative expertise.",
  },
  {
    title: "Proven Track Record",
    description:
      "Our success is reflected in the achievements of our satisfied clients.",
  },
  {
    title: "End-to-End Service Offering",
    description:
      "From branding to launch, we cover all your design needs.",
  },
  {
    title: "Innovation-Driven Approach",
    description:
      "We leverage the latest trends to keep your brand ahead of the curve.",
  },
];

export function FeaturesCard() {
  return (
    <div className="flex justify-center items-center px-40">
      <div className=" bg-white shadow-lg rounded-xl border-[1px]">
        {/* Top row with 3 columns */}
        <div className="grid md:grid-cols-3 grid-cols-1 border-b-[1px] ">
          {cards.slice(0, 3).map((card, index) => (
            <div key={index} className={`p-10 ${index % 3 !== 2 ? 'border-r-[1px]' : ''} hover:bg-[#005490] hover:text-white`}>
              <h3 className="text-xl font-bold mb-2 ">{card.title}</h3>
              <p >{card.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom row with 2 columns */}
        <div className="grid md:grid-cols-2 grid-cols-1  ">
          {cards.slice(3).map((card, index) => (
            <div key={index + 3} className={`p-10 ${index % 3 !== 1 ? 'border-r-[1px]' : ''} hover:bg-[#005490] hover:!text-white `}>
              <h3 className="text-xl font-bold mb-2 ">{card.title}</h3>
              <p >{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
