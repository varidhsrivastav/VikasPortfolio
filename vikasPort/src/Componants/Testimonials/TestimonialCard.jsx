import commas from "./comma.png";
import pic from "./user.png";
const TestimonialCard = ({ id, ClientName, clientImage, content }) => {
  return (
    <div className="">
      <div className="flex py-10 px-5 flex-col sm:flex-row">
        <div className="sm:w-[20%]">
          <div className="w-[100%]">
            <div className="flex items-center justify-center">
              <img
                src={pic}
                alt=""
                className="sm:w-[150px] w-[200px] rounded-[50%] !border-2 !border-black bg-[#e0e0e0] p-2"
              />
            </div>
          </div>
        </div>
        <div className="w-[80%]">
          <h1 className="">
            <div className="flex gap-3 ">
              <img src={commas} className="w-[50px] h-[50px]" alt="" />
              {/* <sapn className="text-[500px]  font-passion absolut ">&ldquo;</sapn> */}

              <h1 className="text-2xl">{content} </h1>
            </div>
            <h1 className="text-2xl px-16 font-bold py-3">{ClientName}</h1>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
