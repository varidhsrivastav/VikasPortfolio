import finance from "./finance-intro-bg.jpg";
import tel from "/telegram.png";
import logo from "./WhatsApp Image 2023-09-15 at 16.14.15.jpg";
const Intro = () => {
  return (
    <div className="min-h-[80vh] overflow-hidden relative after:bg-slate-500  bg-[#1584ebc5]">
    
      <img
        src={finance}
        alt=""
        className=" opacity-[0.5] absolute -z-10 w-[100%] h-[100%]"
      />
      <div className="container">
        <div className="flex flex-col justify-center items-center max-h-[90vh] min-h-[80vh] gap-y-6">
          <img src={logo} alt="" className="sm:w-[100px] w-[70px] rounded-xl" />
          <div className="text-center">
            <p className="sm:text-3xl text-2xl font-black py-2  text-black ">Thakur Ji Trading</p>
            <p className="lg:text-6xl text-4xl font-bold text-white">
              Join Premium Trading Group And Embark On Your Path To Financial
              Freedom Today!
            </p>
            <div className="flex justify-center py-3">
              <p className="text-xl sm:w-[70%] font-medium color-black">
                Don&apos;t miss out on this opportunity to enhance your trading
                skills and achieve your financial goals. Join our community of
                traders who are committed to success.
              </p>
            </div>
          </div>
          <div>
            <a className="button-3  px-4 py-2" href="https://t.me/+wzWxNqcChlwwZWY1" target="_blank" rel="noreferrer">
            <div className="flex flex-row gap-4 justify-center items-center">
              <img src={tel} alt="" className="w-[40px]" />
              <p className="sm:text-3xl text-xl">Join the exclusive group</p>
            </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;

// #35B4FF
