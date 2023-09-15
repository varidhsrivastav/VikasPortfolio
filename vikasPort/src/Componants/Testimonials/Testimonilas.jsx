import TestimonialCard from "./TestimonialCard";
const TestiData = [
    {
      id: "01",
      clientImage:"img",
      ClientName: "Author Name",
      content: `Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar proin. `,
    },{
      id: "02",
      clientImage:"img",
      ClientName: "Author Name",
      content: `Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar proin. `,
    },{
      id: "03",
      clientImage:"img",
      ClientName: "Author Name",
      content: `Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar proin. `,
    },
  ];

const Testimonilas = () => {
  return (
    <div className=" container py-28 ">
    <section className="max-w-[80%] mx-auto ">
    <div className="text-center">
        <h1 className="text-3xl">TESTIMONIALS</h1>
        <p className="text-5xl py-3">We are committed expert partners</p>
    </div>
    
    <div>
        {
            TestiData.map((item, index) =>{
                return(
                    <>
                            <TestimonialCard
                            key={index}
                            {...item}/>
                      
                    </>
                )
            })
        }
    </div>
    </section>
    </div>
  )
}

export default Testimonilas
