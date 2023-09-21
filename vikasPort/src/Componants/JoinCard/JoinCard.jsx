import c1 from "./image/Rectangle-2270.webp";
import c2 from "./image/Rectangle-2270-1.webp";
import c3 from "./image/Rectangle-2270-2.webp";
import c4 from "./image/Rectangle-2270-3.webp";
import c5 from "./image/Rectangle-2270-4.webp";
import c6 from "./image/Rectangle-2270-5.webp";
import tel from "/telegram.png";
import banner from "./image/banner_bg.png";
const JoinCard = () => {  
  return (
    <div className="relative">
    <img src={c1} alt=""  className="absolute top-[10%] left-[1%]"/>
    <img src={c2} alt="" className="absolute right-[1%] top-[70%]"  />
    <img src={c3} alt="" className="absolute top-[40%] left-[10%]"/>
    <img src={c4} alt="" className="absolute right-[10%] top-[40%]"/>
    <img src={c5} alt="" className="absolute top-[70%] left-[5%]"/>
    <img src={c6} alt="" className="absolute right-[5%] top-[10%]" />
      <div className="container py-20">
        <div className="bg-[#00c36bd0] relative flex flex-col gap-10 rounded-xl max-w-[80%] mx-auto sm:p-20 px-2 py-5 text-center overflow-hidden">
        <img src={banner} className="absolute  top-[0%] right-[0%] " alt="" />
          <h1 className="sm:text-5xl text-3xl font-bold text-white">
          To Start Your Profitable Trading Journey
          </h1>
          <div className="flex justify-center ">
          <a className="bg-[#E9345D] p-2 rounded-xl " href="https://t.me/+wzWxNqcChlwwZWY1" target="_blank" rel="noreferrer">
            <div className="flex flex-row gap-4 justify-center items-center ">
              <img src={tel} alt="" className="w-[40px]" />
              <p className="sm:text-3xl text-md font-bold text-white ">Join the exclusive group</p>
            </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinCard;
// 