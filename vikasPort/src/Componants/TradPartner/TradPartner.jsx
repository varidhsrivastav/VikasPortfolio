import vikas from "./vikasImg.jpg";
import "./trade.css";
const TradPartner = () => {
  return (
    <div className=" py-[100px]  linearGrad ">
      <div className="container">
        <div className="lg:max-w-[80%] mx-auto">
          <div className=" flex sm:flex-row flex-col justify-center items-center gap-5 relative p-4 sm:p-10 bg-[white] drop-shadow-2xl rounded-xl">
            <div className="flex flex-col flex-1 gap-3">
              <div className="">
                <div className=" min-w-[50px] max-w-[50px] max-h-[50px] min-h-[50px] rounded-[50%] bg-[#00C36C]"></div>
              </div>
              <span className=" text-xl sm:text-2xl font-bold  text-[#B4BCC3]">
                Meet Your Trading Part
              </span>
              <span className="text-4xl sm:text-7xl font-bold text-[#495057]">
                Vikas Singh
              </span>
              <span className="sm:w-[80%] text-lg sm:text-xl">
                A trading mentor is an experienced and knowledgeable individual
                who guides and educates aspiring traders on the intricacies of
                financial markets and trading strategies. Trading mentors can be
                invaluable resources for those looking to enter the world of
                trading or seeking to improve their existing trading skills.
              </span>
            </div>
            <div className="border-[5px] felx justify-center items-center border-[#00C36C] drop-shadow-2xl rounded-[50%]  lg:w-[400px] lg:h-[400px] w-[300px] h-[300px]">
              <img src={vikas} alt="" className=" rounded-[50%] " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradPartner;
