import c1 from "./image/Rectangle-2270.webp";
import c2 from "./image/Rectangle-2270-1.webp";
import c3 from "./image/Rectangle-2270-2.webp";
import c4 from "./image/Rectangle-2270-3.webp";
import c5 from "./image/Rectangle-2270-4.webp";
import c6 from "./image/Rectangle-2270-5.webp";
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
        <div className="bg-[#A9E2C9] rounded-xl max-w-[80%] mx-auto p-20 text-center">
          <h1 className="text-4xl font-bold ">
            To find more about our <span>Online Cources</span>
          </h1>
          <button className="border-none outline-none text-2xl bg-[#E9345D] text-white py-2 px-4 rounded-xl mt-4" > Join the Telegram channel</button>
        </div>
      </div>
    </div>
  );
};

export default JoinCard;
