import WhatWeOfferComp from "./WhatWeOfferComp";
import eductaion from "./Educational-Resources_.png";
import trading from "./Daily-Trading-Insights_.png";
import support from "./Educational-Resources_-1.png";

const WorkData = [
    {
      id: "01",
      workImage:trading,
      workTitle: "Daily Trading Insights",
      content: `Receive daily market analysis, hot stock picks, and trend forecasts right in your inbox.`,
      idSelector:` flex sm:flex-row flex-col `
    },{
      id: "02",
      workImage:eductaion,
      workTitle: "Educational Resources",
      content: `Access a wealth of trading resources, including articles, webinars, and video tutorials.`,
      idSelector:` flex flex-col sm:flex-row-reverse`
    },{
      id: "03",
      workImage:support,
      workTitle: "Community Support",
      content: `Join our vibrant trading community, connect with like-minded traders, and share your experiences. `,
      idSelector:` flex sm:flex-row flex-col `
    },
  ];

const Work = () => {
  return (
    <div className="container">
    <div className="max-w-[80%] mx-auto">
    <div className="text-center">
        <div className="text-3xl">What Work We Do</div>
        <div className="text-5xl py-3">What You Get With Our Free Membership?</div>
    </div>
    <div className="flex flex-col gap-3 py-28">
        {
            WorkData.map((data)=>{
                return(
                    <WhatWeOfferComp key={data.id}
                        {...data}
                    />
                )
            })
            
        }
    </div>
    </div>
    </div>
  );
};

export default Work;

/* CSS */
