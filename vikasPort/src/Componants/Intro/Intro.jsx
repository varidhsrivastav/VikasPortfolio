import finance from "./finance-intro-bg.jpg";
import logo from "./WhatsApp Image 2023-09-15 at 16.14.15.jpg";
const Intro = () => {
  return (
    <div className=" max-h-[80vh] min-h-[70vh]  overflow-hidden relative after:bg-slate-500  bg-[#1584ebc5]">
      <img
        src={finance}
        alt=""
        className="w-[100%] opacity-[0.5] absolute -z-1 -z-10"
      />
      <div className="container relative">
        <div className="flex flex-col justify-center items-center max-h-[80vh] min-h-[70vh] gap-6">
          <img src={logo} alt="" className="w-[100px] rounded-xl" />
          <div className="text-center">
            <p className="text-3xl font-black py-2  text-black ">Thakur Ji Trading</p>
            <p className="lg:text-6xl text-4xl font-bold text-white">
              Join Premium Trading Tips And Embark On Your Path To Financial
              Freedom Today!
            </p>
            <div className="flex justify-center py-3">
              <p className="text-xl w-[70%] font-medium color-black">
                Don&apos;t miss out on this opportunity to enhance your trading
                skills and achieve your financial goals. Join our community of
                traders who are committed to success.
              </p>
            </div>
          </div>
          <div>
            <button className="button-3">
              <p className="text-3xl">Join the exclusive group</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;

// #35B4FF
