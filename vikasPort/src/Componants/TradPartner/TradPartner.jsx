import vikas from "./vikasImg.jpg";
import "./trade.css";
const TradPartner = () => {
  return (
    <div className=" py-[100px]  linearGrad ">
      <div className="container">
        <div className="lg:max-w-[80%] mx-auto">
          <div className=" flex xl:flex-row flex-col-reverse justify-center items-center gap-5 relative p-4 sm:p-10 bg-[white] drop-shadow-2xl rounded-xl">
            <div className="flex flex-col flex-1 gap-3">
              <div className="">
                <div className=" min-w-[50px] max-w-[50px] max-h-[50px] min-h-[50px] rounded-[50%] bg-[#00C36C]"></div>
              </div>
              <span className=" text-xl sm:text-2xl font-bold  text-[#B4BCC3]">
                Meet Your Trading Mentor
              </span>
              <span className="text-4xl sm:text-7xl font-bold text-[#495057]">
                Vikas Singh Thakur
              </span>
              <span className="sm:w-[80%] text-lg sm:text-xl">
                I am a seasoned Stock Market Trainer with a passion for
                financial markets and a track record of success in stock
                trading.I am committed to guiding individuals on their journey
                to financial success in the stock market. Whether you are a
                beginner looking to get started or an experienced trader seeking
                to enhance your skills, I am here to provide the knowledge and
                support you need to thrive in the exciting world of stocks.
                Let&apos;s embark on this financial journey together!
              </span>
            </div>
            <div className="border-[5px] felx justify-center items-center border-[#00C36C] drop-shadow-2xl rounded-[50%]  lg:w-[400px] lg:h-[400px] w-[300px] h-[300px]">
              <img src={vikas} alt="" className=" rounded-[50%] w-[100%] h-[100%] " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradPartner;
