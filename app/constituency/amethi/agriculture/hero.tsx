import React from "react";

import Image from "next/image";

const banner = "/amethi-agri/Agriculture.jpg";

const hero = () => {
  return (
    <div className="md:relative">
      <Image
        src={banner}
        width={1920}
        height={717}
        alt="Amethi-industry 1920 x 717"
        className="block h-auto max-w-full"
      />
    </div>
  );
};

export default hero;
