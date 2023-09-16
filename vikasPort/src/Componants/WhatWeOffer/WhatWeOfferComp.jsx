
const WhatWeOfferComp = ({ workTitle, titlecolor, numcolor, workImage, id, content, idSelector }) => {
  return (
    <div className="container ">
      <div className={`items-center justify-between gap-1 ${idSelector}`}>
        <div className="w-[40%] flex  justify-center ">
          <img data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" src={workImage} alt="" className="sm:max-w-[400px] sm:h-[250px] block" />
        </div>
        <div className="flex flex-1 wrap items-center justify-center">
          <h1 className={`text-6xl sm:text-8xl font-black ml-[10px] ${numcolor}`} data-aos="fade-down" data-aos-offset="300" data-aos-easing="ease-in-sine">{id}</h1>
          <div className="p-[20px] flex flex-col gap-3" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
            <h1 className={` text-3xl sm:text-[2.5em] font-bold ${titlecolor}`}>{workTitle}</h1>
            <h1 className="text-[20px] text-[#888] font-[500] ">{content}</h1>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOfferComp;
