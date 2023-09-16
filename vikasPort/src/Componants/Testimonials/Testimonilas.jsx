import TestimonialCard from "./TestimonialCard";
import wawe from "./wawe.jpg";
import one from "./image/1st.png";
import two from "./image/2nd.png";
import three from "./image/3rd.png";
const TestiData = [
  {
    id: "01",
    clientImage: one,
    ClientName: "Author Name",
    content: `Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar proin. `,
    dataAos:"fade-up-right"
  },
  {
    id: "02",
    clientImage: two,
    ClientName: "Author Name",
    content: `Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar proin. `,
    dataAos:"fade-up-left"
  },
  {
    id: "03",
    clientImage: three,
    ClientName: "Author Name",
    content: `Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar proin. `,
    dataAos:"fade-up-right"
  },
];

const Testimonilas = () => {
  return (
    <div className=" py-28 relative overflow-hidden">
      <img
        src={wawe}
        alt=""
        className="absolute -z-10 w-[100%] opacity-[0.15]"
      />
      <div className="container">
        <section className=" mx-auto ">
          <div className="text-center">
            <div className="flex justify-center pb-2">
              <svg
                width="50px"
                height="50px"
                viewBox="0 0 24 24"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <defs></defs>{" "}
                <g
                  stroke="none"
                  fill="none"
                >
                  {" "}
                  <path
                    d="M8,3 L8,3.5 C8,4.32842712 8.67157288,5 9.5,5 L14.5,5 C15.3284271,5 16,4.32842712 16,3.5 L16,3 L18,3 C19.1045695,3 20,3.8954305 20,5 L20,21 C20,22.1045695 19.1045695,23 18,23 L6,23 C4.8954305,23 4,22.1045695 4,21 L4,5 C4,3.8954305 4.8954305,3 6,3 L8,3 Z"
                    fill="#00C36C"
                    opacity="0.3"
                  ></path>{" "}
                  <path
                    d="M10.875,15.75 C10.6354167,15.75 10.3958333,15.6541667 10.2041667,15.4625 L8.2875,13.5458333 C7.90416667,13.1625 7.90416667,12.5875 8.2875,12.2041667 C8.67083333,11.8208333 9.29375,11.8208333 9.62916667,12.2041667 L10.875,13.45 L14.0375,10.2875 C14.4208333,9.90416667 14.9958333,9.90416667 15.3791667,10.2875 C15.7625,10.6708333 15.7625,11.2458333 15.3791667,11.6291667 L11.5458333,15.4625 C11.3541667,15.6541667 11.1145833,15.75 10.875,15.75 Z"
                    fill="#00C36C"
                  ></path>{" "}
                  <path
                    d="M11,2 C11,1.44771525 11.4477153,1 12,1 C12.5522847,1 13,1.44771525 13,2 L14.5,2 C14.7761424,2 15,2.22385763 15,2.5 L15,3.5 C15,3.77614237 14.7761424,4 14.5,4 L9.5,4 C9.22385763,4 9,3.77614237 9,3.5 L9,2.5 C9,2.22385763 9.22385763,2 9.5,2 L11,2 Z"
                    fill="#00C36C"
                  ></path>{" "}
                </g>{" "}
              </svg>
            </div>
            {/* <h1 className="text-xl">TESTIMONIALS</h1> */}
            <p className="text-3xl sm:text-5xl pb-3 sm:pb-5 font-bold text-center text-[#495057]">
              We are committed expert partners
            </p>
          </div>

          <div className="pt-5">
            {TestiData.map((item, index) => {
              return (
                <>
                  <TestimonialCard key={index} {...item} />
                </>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Testimonilas;
