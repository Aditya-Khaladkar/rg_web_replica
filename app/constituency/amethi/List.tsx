import React from "react";

import "../style.css";
import { Montserrat } from "next/font/google";

const mons = Montserrat({ subsets: ["latin"] });

const listArray = [
  {
    title: "About Amethi",
    link: "/constituency/amethi/about-amethi",
  },
  {
    title: "Education",
    link: "/constituency/amethi/education",
  },
  {
    title: "Healthcare",
    link: "/constituency/amethi/health",
  },
  {
    title: "connectivity",
    link: "/constituency/amethi/connectivity",
  },
  {
    title: "agriculture",
    link: "/constituency/amethi/agriculture",
  },
  {
    title: "Industry",
    link: "/constituency/amethi/industry",
  },
  {
    title: "Selft-help groups",
    link: "/constituency/amethi/shgss",
  },
];

export default function List() {
  return (
    <div className={mons.className}>
      <div className="px-6 md:px-10 lg:px-20 xl:px-32 my-10 md:my-20">
        <ul className="grid grid-cols-1 text-[#337ab7]">
          {listArray.map((item, index) => (
            <li
              key={index}
              className="hvr-shutter-out-vertical border-b py-3 md:py-4 lg:py-5 hover:text-white border-[#337ab7]"
            >
              <a
                href={item.link}
                className="uppercase px-3 md:px-5 text-sm md:text-base lg:text-lg"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
