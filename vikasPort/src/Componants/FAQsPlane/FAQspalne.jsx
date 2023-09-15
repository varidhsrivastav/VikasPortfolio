import {FAQDATA } from "./FAQsData";

const FAQspalne = () => {
  return (
    <div className="bg-[#F8F9FA] py-[100px]">
      <div className="container">
        <div className="max-w-[80%] mx-auto">
        <div className="text-center py-3">
        <span className="text-center  px-3 py-1 bg-[#DFE0E1]">Frequently asked question</span>
        </div>
            <p className="text-5xl pb-[70px] font-bold text-center text-[#495057]">Questions & Answers</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-[15px] place-content-center justify-center items-center place-items-center ">
                {
                    FAQDATA.map((data, index)=>{
                        return(
                            <div key={index} className="w-[80%]">
                                <h1 className="sm:text-[1.5rem] text-xl font-bold text-[#495057] pb-3">{data.title}</h1>
                                <p className="#B4BCC3 text-lg">{data.content}</p>
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
