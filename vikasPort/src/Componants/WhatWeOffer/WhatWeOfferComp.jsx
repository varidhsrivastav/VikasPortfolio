
      function startTimer(duration) {
        let timer = duration;
        const daysElement = document.getElementById("days");
        const hoursElement = document.getElementById("hours");
        const minutesElement = document.getElementById("minutes");
        const secondsElement = document.getElementById("seconds");
        const interval = setInterval(function () {
          const days = Math.floor(timer / (60 * 60 * 24));
          const hours = Math.floor((timer % (60 * 60 * 24)) / (60 * 60));
          const minutes = Math.floor((timer % (60 * 60)) / 60);
          const seconds = Math.floor(timer % 60);
          daysElement.textContent = days < 10 ? "0" + days : days;
          hoursElement.textContent = hours < 10 ? "0" + hours : hours;
          minutesElement.textContent = minutes < 10 ? "0" + minutes : minutes;
          secondsElement.textContent = seconds < 10 ? "0" + seconds : seconds;
          if (--timer < 0) {
            timer = duration;
            // Restart the timer
          }
        },1000);
      }
      // Start the timer with a duration of 15 minutes (15 * 60 seconds)
      startTimer(15 * 60);



const WhatWeOfferComp = ({ workTitle, workImage, id, content, idSelector }) => {
  return (
    <div className="container ">
      <div className={`items-center justify-between gap-4 ${idSelector}`}>
        <div className="w-[40%] flex  justify-center">
          {/* <h1 className="max-w-[400px] h-[250px] block">{workImage}</h1> */}
          <img src={workImage} alt="" className="max-w-[400px] h-[250px] block" />
        </div>
        <div className="flex flex-1 wrap items-center justify-center">
          <h1 className="text-8xl font-bold ml-[10px]">{id}</h1>
          <div className="p-[20px] flex flex-col gap-3">
            <h1 className="text-[2.5em] font-medium">{workTitle}</h1>
            <h1 className="text-[20px] text-[#888] font-[500] ">{content}</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="timer-container">
      <div className="timer">
        <span id="days" className="hide">00</span>
        <span id="hours" className="hide">00</span>
        <span id="minutes" className="hide">00</span>
        <span id="seconds" className="hide">00</span>
      </div>
    </div>
    </div>
  );
};

export default WhatWeOfferComp;
