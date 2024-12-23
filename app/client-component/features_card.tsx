import BezierIcon from "@/public/icons/bezier-curve.svg";
import UsersIcon from "@/public/icons/users-three.svg";
import TrophyIcon from "@/public/icons/trophy.svg";
import RocketIcon from "@/public/icons/rocket-launch.svg";
import PencilIcon from "@/public/icons/pencil-circle.svg";

const cards = [
  {
    title: "Strategic Ideas Thinking",
    description:
      "We elevate with your business goals in mind, ensuring impactful results.",
    icon: <BezierIcon className="hover:fill-white fill-black" />,
  },
  {
    title: "Collaborative Process",
    description:
      "We work closely with you, blending your vision with our creative expertise.",
    icon: <UsersIcon className="hover:fill-white fill-black" />,
  },
  {
    title: "Proven Track Record",
    description:
      "Our success is reflected in the achievements of our satisfied clients.",
    icon: <TrophyIcon className="hover:fill-white fill-black" />,
  },
  {
    title: "End-to-End Service Offering",
    description: "From branding to launch, we cover all your design needs.",
    icon: <RocketIcon className="hover:fill-white fill-black"/>,
  },
  {
    title: "Innovation-Driven Approach",
    description:
      "We leverage the latest trends to keep your brand ahead of the curve.",
    icon: <PencilIcon className="hover:fill-white fill-black"/>,
  },
];

export function FeaturesCard() {
  return (
    <div className="flex justify-center items-center md:px-40">
      <div className=" bg-white shadow-lg rounded-xl border-[1px]">
        {/* Top row with 3 columns */}
        <div className="grid md:grid-cols-3 grid-cols-1 border-b-[1px] ">
          {cards.slice(0, 3).map((card, index) => (
            <div
              key={index}
              className={`p-10 ${
                index % 3 !== 2 ? "md:border-r-[1px]" : ""
              } hover:bg-[#005490]  hover:!text-white border-b-[1px]`}
            >
              {card.icon}
              <h3 className="text-xl font-bold mb-2 ">{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom row with 2 columns */}
        <div className="grid md:grid-cols-2 grid-cols-1  ">
          {cards.slice(3).map((card, index) => (
            <div
              key={index + 3}
              className={`p-10 ${
                index % 3 !== 1 ? "md:border-r-[1px]" : ""
              } hover:bg-[#005490] hover:!text-white border-b-[1px] `}
            >
              <div className="group-hover:fill-white fill-black transition duration-200">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 ">{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
