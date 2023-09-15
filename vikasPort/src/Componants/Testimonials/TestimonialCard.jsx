import commas from "./right.png";
const TestimonialCard = ({ id, ClientName, clientImage, content }) => {
  return (
    <div className="">
      <div className="flex  px-5 flex-col sm:flex-row">
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
        <div className="flex-[80%]">
          <h1 className="">
            <div className="flex gap-3 ">
              <img src={commas} className="w-[60px] h-[60px]" alt="" />
              <h1 className="text-2xl">{content}</h1>
            </div>
            <h1 className="text-2xl px-16 font-bold py-3">{ClientName}</h1>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
