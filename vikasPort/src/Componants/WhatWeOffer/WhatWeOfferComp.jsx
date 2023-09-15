
const WhatWeOfferComp = ({ workTitle, titlecolor, numcolor, workImage, id, content, idSelector }) => {
  return (
    <div className="container ">
      <div className={`items-center justify-between gap-1 ${idSelector}`}>
        <div className="w-[40%] flex  justify-center">
          <img src={workImage} alt="" className="max-w-[400px] h-[250px] block" />
        </div>
        <div className="flex flex-1 wrap items-center justify-center">
          <h1 className={`text-8xl font-black ml-[10px] ${numcolor}`}>{id}</h1>
          <div className="p-[20px] flex flex-col gap-3">
            <h1 className={`text-[2.5em] font-bold ${titlecolor}`}>{workTitle}</h1>
            <h1 className="text-[20px] text-[#888] font-[500] ">{content}</h1>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOfferComp;
