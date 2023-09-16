import commas from "./right.png";
const TestimonialCard = ({ id, ClientName, clientImage, content, dataAos }) => {
  return (
    <div className="">
      <div className="flex  sm:px-5 py-3  flex-col sm:flex-row" data-aos={dataAos} data-aos-offset="300" data-aos-easing="ease-in-sine">
        <div className="sm:flex-[20%]">
          <div className="w-[100%]">
            <div className="flex items-center justify-center">
              <img
                src={clientImage}
                alt=""
                className="sm:w-[200px] w-[200px] h-[200px] rounded-[50%] !border-2 !border-black  p-2"
              />
            </div>
          </div>
        </div>
        <div className="sm:flex-[80%]">
          <h1 className="">
            <div className="flex sm:gap-3 gap-2 ">
              <img src={commas} className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px]" alt="" />
              <h1 className="text-xl sm:text-2xl">{content}</h1>
            </div>
            <h1 className="text-2xl sm:px-16 px-10 font-bold py-3">{ClientName}</h1>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
