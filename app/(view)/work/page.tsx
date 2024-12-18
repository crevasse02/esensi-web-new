import React from "react";
import { WorkCard } from "@/app/client-component/work_card";
import { works as workData } from "@/app/client-component/data"; // Rename the imported array to avoid conflict

const Work = () => {
  return (
    <div>
      <div className="overflow-hidden">
        <section className="bg-[#FBF9F5] flex py-52 flex-col w-screen justify-center items-center bg-cover relative">
          <h1 className="md:text-[44px] text-[23px] text-center leading-none font-bold">
            <span className="text-[#72716F]">Our work speaks for itself</span>—
            <br />
            dive into the projects that <br />
            define us
          </h1>

          <p className="text-center leading-normal mt-5 text-[#72716F]">
            Browse through our curated portfolio, showcasing the <br />
            diversity and excellence of our design and development <br />
            work.
          </p>

          <div className="flex flex-row flex-wrap gap-10 justify-center mt-10">
            {workData.map((item, index) => (
              <div key={index} className="mt-10" >
                <WorkCard
                  title={item.title}
                  subtitle={item.subtitle}
                  image={item.image}
                  link={item.link}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Work;
