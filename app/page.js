import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col  justify-center items-center h-[44vh] leading-[7vw] lg:leading-[4vw]">
        <div className="text-[2.3vw]  font-bold flex justify-center items-center gap-[2.3vw] uppercase"> <h1>Buy Me A Chai </h1> <span>

          <lord-icon
            src="https://cdn.lordicon.com/elcmkycs.json"
            trigger="loop"
            delay="1500"
            state="in-reveal"
            colors="primary:#7166ee,secondary:#ffc738,tertiary:#f24c00"
            style={{ width: "70px", height: "70px" }}
          >
          </lord-icon>
        </span>  </div>
        <p>A Crowfunding Platform For Creators. Get Funded By Your Fans And Followers.</p>
        <div className="flex gap-2">
          <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-md">Start-Now</button>
          <button type="button" class="text-white bg-gradient-to-br from-purple-900 to-blue-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-900 dark:focus:ring-blue-900 font-medium  text-sm px-4 py-2.5 text-center leading-5 rounded-md">Read-More</button>
        </div>
      </div>
      {/* Divider-through-line-for-break-sections */}
      <div className="h-1 bg-white opacity-10"></div>
      <div>
        <div className="flex justify-center items-center h-[8vh] text-[.8vw] lg:text-[1.2vw] md:text-[2.2vw] font-bold uppercase gap-[1.2vw]"> <h2>Your Fans Can Buy You A Chai</h2><div><lord-icon
          src="https://cdn.lordicon.com/ynhknmbh.json"
          trigger="loop"
          delay="2000"
          colors="primary:#ffffff"
          style={{ width: "40px", height: "40px" }}>
        </lord-icon></div></div>
        {/* funds-Info-Div */}

        <div className="flex justify-around container mx-auto h-[33.4vh] items-center">
          <div className="">
            <div className="item flex flex-col justify-center items-center leading-[4vh]">
              <lord-icon
                src="https://cdn.lordicon.com/fohwdkeq.json"
                trigger="loop"
                delay="1500"
                state="in-reveal"
                style={{ width: "70px", height: "70px" }}>
              </lord-icon>
              <p>Fund YourSelf</p>
              <p>Your Fans Are Avilable For You To Help You</p>
            </div>
          </div>

          <div>
            <div className="item flex flex-col justify-center items-center leading-[4vh]">
              <lord-icon
                src="https://cdn.lordicon.com/bkzrrccj.json"
                trigger="loop"
                delay="2000"
                style={{ width: "90px", height: "90px" }}>
              </lord-icon>
              <p>Fund YourSelf</p>
              <p>Your Fans Are Avilable For You To Help You</p>
            </div>
          </div>

          <div>
            <div className="item flex flex-col justify-center items-center leading-[4vh]">
              <lord-icon
                src="https://cdn.lordicon.com/dehlpoqu.json"
                trigger="loop"
                delay="2000"
                style={{ width: "70px", height: "70px" }}
              >
              </lord-icon>
              <p>Fund YourSelf</p>
              <p>Your Fans Are Avilable For You To Help You</p>
            </div>
          </div>

        </div>
        {/* Divider-through-line-for-break-sections */}
        <div className="h-1 bg-white opacity-10"></div>
        {/* Contect-Info-Div */}
        <div className="flex justify-center items-center h-[8vh] mt-[4vh] text-[.8vw] lg:text-[1.2vw] md:text-[2.2vw] font-bold uppercase gap-[1.2vw]"> <h2>Learn More About-Us

        </h2>
          <div><lord-icon
            src="https://cdn.lordicon.com/yhtmwrae.json"
            trigger="loop"
            delay="2000"
            colors="primary:#ffffff"
            style={{ width: "50px", height: "50px" }}>
          </lord-icon></div></div>
        <div className="flex  h-[33.4vh] items-center  justify-around container mx-auto pt-[4vh] pb-[8vh]">
          <div>
            <div className="item flex flex-col justify-center items-center leading-[4vh]">
              <lord-icon
                src="https://cdn.lordicon.com/tnapqovl.json"
                trigger="loop"
                delay="2000"
                colors="primary:#ffffff"
                style={{ width: "70px", height: "70px" }}>
              </lord-icon>
              <p>Fund YourSelf</p>
              <p className="">Your Fans Are Avilable For You To Help You</p>
            </div>
          </div>

          <div>
            <div className="item flex flex-col justify-center items-center leading-[4vh]">
              <lord-icon
                src="https://cdn.lordicon.com/tnapqovl.json"
                trigger="loop"
                delay="2000"
                colors="primary:#ffffff"
                style={{ width: "70px", height: "70px" }}>
              </lord-icon>
              <p>Fund YourSelf</p>
              <p>Your Fans Are Avilable For You To Help You</p>
            </div>
          </div>

          <div>
            <div className="item flex flex-col justify-center items-center leading-[4vh]">
              <lord-icon
                src="https://cdn.lordicon.com/tnapqovl.json"
                trigger="loop"
                delay="2000"
                colors="primary:#ffffff"
                style={{ width: "70px", height: "70px" }}>
              </lord-icon>
              <p>Fund YourSelf</p>
              <p>Your Fans Are Avilable For You To Help You</p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
