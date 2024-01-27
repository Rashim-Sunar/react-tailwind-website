import logo from "../../assets/logo.png";
import fbImg from "../../assets/fbImg.png";
import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.svg";
import instagram from "../../assets/instagram.png";


export default function Footer() {
  return (
    <div className="md:px-14 p-4 mx-auto max-w-screen-2xl bg-[#010851] text-white">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="my-12">
          <div className="md:w-1/2 space-y-8">
            <a
              className="text-2xl font-semibold flex items-center space-x-3 text-primary"
              href="/"
            >
              <img
                src={logo}
                alt=""
                className="w-10 inline-block items-center"
              />
              <span className="text-white">XYZ</span>
            </a>
            <p className="md:w-1/2">
              A simple paragraph is comprised of three major components. The
              first sentence, which is often a declarative sentence.
            </p>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="bg-[#9a7af159] py-3 px-4 rounded-2xl focus:outline-none"
              ></input>
              <input
                type="Submit"
                value="Subscribe"
                className="bg-secondary py-3 px-4 rounded-2xl -ml-2 hover:bg-white hover:text-primary transition-all duration-300"
              ></input>
            </div>
          </div>
        </div>
        {/* Footer navigators */}
        <div className="flex flex-col md:w-1/2 md:flex-row flex-wrap gap-8 justify-between items-start">
          <div className="md:mt-5 -mt-3">
            <h3 className="text-xl font-semibold my-4 ">Platform</h3>
            <ul className="space-y-3 mt-6">
              <a href="/" className="block hover:text-gray-500 ">
                Overview
              </a>
              <a href="/" className="block hover:text-gray-500 ">
                Features
              </a>
              <a href="/" className="block hover:text-gray-500 ">
                About
              </a>
              <a href="/" className="block hover:text-gray-500">
                Pricing
              </a>
            </ul>
          </div>

          <div className="mt-5 ">
            <h3 className="text-xl font-semibold my-3">Help</h3>
            <ul className="space-y-3  mt-6">
              <a href="/" className="block hover:text-gray-500 ">
              How does it works?
              </a>
              <a href="/" className="block hover:text-gray-500 ">
               Where to ask questions?
              </a>
              <a href="/" className="block hover:text-gray-500 ">
               How to play?
              </a>
              <a href="/" className="block hover:text-gray-500">
              What is needed for this?
              </a>
            </ul>
          </div>

          <div className="mt-5 ">
            <h3 className="text-xl font-semibold my-3">Help</h3>
            <ul className="space-y-3 mt-6">
              <a href="/" className="block hover:text-gray-500 ">
              (012) 1234-567-890
              </a>
              <a href="/" className="block hover:text-gray-500 ">
              123 xyz xyz
              </a>
              <a href="/" className="block hover:text-gray-500 ">
                qwuerybaihefv, qiwu - hrebcl
              </a>
              <a href="/" className="block hover:text-gray-500">
               095467
              </a>
            </ul>
          </div>
        </div>
      </div>

        <hr/>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center justify-between my-8">
            <p>@ XYZ 20XX --- 20XX. All rights reserved.</p>
            <div className="flex space-x-8 items-center">
                <img src={fbImg} alt="" className="w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300 "/>
                <img src={twitter} alt="" className="w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300 "/>
                <img src={linkedin} alt="" className="w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300 "/>
                <img src={instagram} alt="" className="w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300 "/>
            
            </div>
        </div>
    </div>
  );
}
