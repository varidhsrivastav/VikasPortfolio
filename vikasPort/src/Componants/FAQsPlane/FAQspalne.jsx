import {FAQDATA } from "./FAQsData";

const FAQspalne = () => {
  return (
    <div className="bg-[#F8F9FA] py-[100px]">
      <div className="container">
        <div className=" mx-auto">
        <div className="text-center py-3">
        <span className="text-center px-3 py-1 bg-[#DFE0E1]">Frequently asked question</span>
        </div>
            <p className="sm:text-5xl text-4xl pb-[70px] font-bold text-center text-[#495057]">Questions & Answers</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-[15px] place-content-center justify-center items-center place-items-center " data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos="zoom-out-left">
                {
                    FAQDATA.map((data, index)=>{
                        return(
                            <div key={index} className="sm:w-[80%] ">
                                <h1 className="sm:text-[1.5rem] text-xl font-bold text-[#495057] pb-3">{data.title}</h1>
                                <p className=" text-lg">{data.content}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
      </div>
    </div>
  )
}

export default FAQspalne
