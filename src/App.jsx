import { useState } from "react";
import harmburgermenu from "../public/burger-menu-right-svgrepo-com.svg";
import cloesemenu from "../public/close-svgrepo-com.svg";
import backhero from "../public/625b10a58137b364b18df2ea_iStock-94179607.jpg";
function App() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };
  const toggleMenuclose = () => {
    setOpen(false);
  };
  return (
    <div className="ml-6 mr-6">
      <div>
        <nav className="max-md:flex justify-between ">
          <div
            className=" lg:flex justify-between lg:mt-2 
           "
          >
            <p className=" pl-2 pt-2 font-Title font-bold text-2xl">Rubble</p>

            <ul className=" max-md:hidden flex gap-4 justify-center font-Title  mt-3">
              <li>Home</li>
              <li>Property</li>
              <li>Agent</li>
              <li>Blog</li>
              <li>About us</li>
              <li>Join us </li>
              <li>Contact us </li>
            </ul>
            <div className=" max-md:hidden">
              <button className="  border-2  pt-2 pb-2 pl-2 rounded-md text-sm   pr-2 mr-2 ">
                sign in{" "}
              </button>
              <button className=" border-2  pt-2 pb-2 pl-2 rounded-md text-sm text-white bg-black border-black pr-2">
                Book a call{" "}
              </button>
            </div>
          </div>
          <div className=" lg:hidden">
            <img
              src={harmburgermenu}
              onClick={toggleMenu}
              alt="menu  icon"
              className=" w-14 h-10 pt-1 ml-44  "
            />
            {open && (
              <div className="menu">
                <div className="text-black bg-white absolute top-0 right-0 w-44 h-screen border-white shadow-lg flex flex-col justify-start pt-6 border">
                  <img
                    src={cloesemenu}
                    alt="close icon"
                    className=" w-14 h-9  pl-2"
                    onClick={toggleMenuclose}
                  />
                  <ul className=" pl-3">
                    <li>Home</li>
                    <li>Property</li>
                    <li>Agent</li>
                    <li>Blog</li>
                    <li>About us</li>
                    <li>Join us </li>
                    <li>Contact us </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </nav>

        <div
          style={{
            backgroundImage: `url(${backhero})`,
            boxShadow: "69px 20px 189px 0px rgba(0,0,0,0.75) inset",
            WebkitBoxShadow: "69px 20px 189px 0px rgba(0,0,0,0.75) inset",
            MozBoxShadow: "69px 20px 189px 0px rgba(0,0,0,0.75) inset",
          }}
          className=" lg:text-center lg:pt-10 mb-4 mt-6 bg-cover bg-center bg-no-repeat  max-md:h-96 lg:min-h-screen rounded-lg max-md:pt-20 max-md:text-center"
        >
          <span className=" lg:text-6xl lg:font- max-md:text-xl max-md:pt-5 max-md:mr font-Title text-white">
            {" "}
            Discover Your Dream Home
          </span>
          <br></br>
          <span className=" lg:text-6xl max-md:text-2xl text-white">
            Right at Your Fingertips
          </span>
          <p className="  lg:pr-56 lg:pl-56 lg:pt-3 max-md:font-body text-white max-md:mt-3 max-md:text-sm ">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            quis? Accusamus numquam maxime iusto sapiente laboriosam veritatis
          </p>
          <div className=" max-md:mt-6  lg:mt-4">
            <button className=" font-Title  border-2 text-white  pt-2 pb-2 pl-2 rounded-md text-sm  border-black bg-black/80 pr-2 mr-2 ">
              Get started{" "}
            </button>
            <button className=" font-Title border-2  pt-2 pb-2 pl-2 rounded-md text-sm text-black bg-white border-white pr-2">
              Watch a Demo{" "}
            </button>
          </div>
        </div>
      </div>
      <div>
        <p className=" lg:hidden font-body text-black/40   max-md:border-2  text-center  mt-6  max-md:mr-20 max-md:ml-20 pt-2 pb-2 ">
          About Rubble{" "}
        </p>
        <p
          style={{ marginLeft: "34rem", marginRight: "34rem" }}
          className=" border-2 max-md:hidden font-body text-black/40  text-sm    text-center  mt-14 "
        >
          About Rubble
        </p>
        <p className="  lg:text-center lg:text-4xl  font-Title max-md:text-center max-md:mt-5 max-md:text-xm font-bold">
          Trusted Partner for Your Journey
        </p>
        <p className="  font-body text-black/40 max-md:text-center lg:text-center">
          Lorem ipsum dolor sit amet consectetur
        </p>
      </div>
      <div className=" lg:flex justify-center gap-4 mt-9 ">
        <div>
          <div className=" border-2 p-3 rounded-md mb-5">
            <p className=" font-bold font-Title">
              Partner for Every Property Need
            </p>
            <p className=" font-body text-black/40 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem
            </p>
            <img
              src="/Green-Park.jpg"
              alt=""
              className=" rounded-md  mt-4"
              style={{ width: "500px", height: "250px", marginBottom: "2rem" }}
            />
          </div>
        </div>
        <div className=" ">
          <ul className=" grid grid-cols-2  gap-5">
            <li className=" border-2 rounded-md mb-7 pb-3 ">
              <img
                src="/arrow-up-right-svgrepo-com.svg"
                className=" w-5 h-7 ml-36 max-md:ml-28"
                alt=""
              />
              <p className=" mt-20 text-3xl font-semibold pl-5 pr-3 max-md:font-Title ">
                800+
              </p>
              <p className="  pl-5 pr-3 max-md:pl-2 text-sm">
                Properties Available
              </p>
            </li>
            <li className=" border-2 rounded-md mb-7 pb-3 ">
              <img
                src="/arrow-up-right-svgrepo-com.svg"
                className=" w-5 h-7 ml-36 max-md:ml-28"
                alt=""
              />{" "}
              <p className=" mt-20  text-3xl font-semibold pl-5 pr-3 ">460+</p>
              <p className=" pl-5 pr-3 text-sm max-md:pl-2">
                Satisfied customer
              </p>
            </li>
            <li className=" border-2 rounded-md -mt-6 mb-16 pb-3 ">
              <img
                src="/arrow-up-right-svgrepo-com.svg"
                className=" w-5 h-7 ml-36 max-md:ml-28"
                alt=""
              />{" "}
              <p className="mt-20 text-3xl font-semibold pl-5 pr-3 ">280+</p>
              <p className="  pl-5 pr-3 text-sm">Total Partners</p>
            </li>
            <li className=" border-2 rounded-md -mt-7 mb-20 pb-3 ">
              <img
                src="/arrow-up-right-svgrepo-com.svg"
                className=" w-5 h-7 ml-36 max-md:ml-28"
                alt=""
              />
              <p className=" mt-20 font-semibold text-3xl pl-5 pr-3 ">120+</p>
              <p className=" pl-5 pr-3 text-sm">Award winning</p>
            </li>
          </ul>
        </div>
      </div>
      {/* {services} */}
      <div className=" mb-6">
        <p className=" lg:hidden font-body text-black/40   max-md:border-2  text-center  mt-6  max-md:mr-20 max-md:ml-20 pt-2 pb-2 ">
          Service We Provide
        </p>
        <p
          style={{ marginLeft: "34rem", marginRight: "34rem" }}
          className=" mt-8  border-2 max-md:hidden font-body text-black/40  text-sm    text-center  mt-6 "
        >
          Service We Provide
        </p>
        <p className=" max-md:mt-2 text-3xl text-center font-Title font-bold">
          Complete Property Solutions{" "}
        </p>
        <p className=" font-body text-black/40 text-center text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
        <ul className=" lg:flex justify-center gap-5 mt-7  ">
          <li className=" border-2 max-md:mb-5    rounded-md p-4">
            <img
              src="/yaa-naa-ghana-house-plans-naayaa-front.png"
              className=" lg:w-52 lg:h-44  rounded-md"
              alt=""
            />
            <p className=" text-center font-bold">Buy property</p>
            <p className="text-xs font-body text-black/40 text-center">
              Lorem ipsum dolor sit amet consectetur
              <p>adipisicing elit dolor sit amet </p>
            </p>
          </li>
          <li className=" border-2   max-md:mb-5     rounded-md p-4  ">
            <img
              src="/houses-1__FillWzEyMDAsODAwXQ.jpg"
              className=" lg:w-52 lg:h-44   rounded-md"
              alt=""
            />
            <p className=" text-center font-bold">Buy property</p>
            <p className=" text-center font-body text-black/40 text-xs">
              Lorem ipsum dolor sit amet consectetur
              <p>adipisicing elit dolor sit amet </p>
            </p>
          </li>
          <li className=" border-2  rounded-lg    p-4 ">
            <img
              src="/luxury-homes-in-Ghana.jpg"
              className=" lg:w-52 lg:h-44    rounded-md "
              alt=""
            />
            <p className=" text-center font-bold">Buy property</p>
            <p className=" text-center font-body text-black/40 text-xs">
              Lorem ipsum dolor sit amet consectetur
              <p>adipisicing elit dolor sit amet </p>
            </p>
          </li>
        </ul>
      </div>
      {/* {poperty gallery} */}
      <div className=" mb-5 ml-5">
        <p className=" lg:hidden font-body text-black/40   max-md:border-2  text-center  mt-6  max-md:mr-20 max-md:ml-20 pt-2 pb-2 ">
          Popular Property{" "}
        </p>
        <p
          style={{ marginLeft: "34rem", marginRight: "34rem" }}
          className=" mt-8  border-2 max-md:hidden font-body text-black/40  text-sm    text-center  mt-6 "
        >
          popular property
        </p>
        <p className=" max-md:mt-8  text-3xl text-center font-Title font-bold">
          Explore Diverse Property Listings{" "}
        </p>
        <div className=" max-md:mr-4 ">
          <ul className=" lg:grid grid-cols-3  gap-y-4 lg:ml-7 mt-7  ">
            <li className=" border-2 max-md:mb-5  lg:mr-10   rounded-md p-4">
              <img
                src="/20240527_144329-1170x785.jpg"
                className=" lg:w-80 lg:h-52   rounded-md"
                alt=""
              />
              <p className="  flex justify-between text-sm pt-2 font-bold">
                <span>Classic Damara</span>
                <span> $480.500</span>
              </p>
              <p className=" text-sm text-slate-500">
                <p className=" flex">
                  <img
                    src="/location-pin-svgrepo-com.svg"
                    alt=""
                    className=" w-3 h-3 mt-1"
                  />
                  <p> Seattle,United States</p>
                </p>
                <ul className=" grid gap-2 grid-cols-3 text-sm text-center pt-2 text-slate-500">
                  <li className="border-2   rounded-md flex justify-center gap-2  pt-1 pb-1">
                    <div>
                      <img
                        src="/bed-double-svgrepo-com.svg"
                        className=" w-4 h-4 pt-1"
                        alt=""
                      />
                    </div>
                    <div>4 Beds</div>
                  </li>
                  <li className="border-2   rounded-md flex justify-center gap-2  pt-1 pb-1">
                    <div>
                      <img
                        src="/bathroom-2-svgrepo-com.svg"
                        className=" w-4 h-4 pt-1"
                        alt=""
                      />
                    </div>
                    <div>2 Baths</div>
                  </li>
                  <li className="border-2   rounded-md flex justify-center   pt-1 pb-1">
                    <div>
                      <img
                        src="/measure-svgrepo-com.svg"
                        className=" w-4 h-4 pt-1"
                        alt=""
                      />
                    </div>
                    <div>2.824sqft</div>
                  </li>
                </ul>
              </p>
            </li>
            <li className=" border-2 lg:mr-10    max-md:mb-5     rounded-md p-4  ">
              <img
                src="/36cf643026a85ccd9fb8d137fe6903e2.jpg"
                className=" lg:w-80 lg:h-52   rounded-md"
                alt=""
              />
              <p className="  flex justify-between text-sm pt-2 font-bold">
                <span>Manstret Haven</span>
                <span> $425.000</span>
              </p>
              <p className=" text-sm text-slate-500">
                <p className=" flex">
                  <img
                    src="/location-pin-svgrepo-com.svg"
                    alt=""
                    className=" w-3 h-3 mt-1"
                  />
                  <p> New York,United States</p>
                </p>
                <ul className=" grid gap-2 grid-cols-3 text-sm text-center pt-2 text-slate-500">
                  <li className="border-2   rounded-md flex justify-center gap-2  pt-1 pb-1">
                    <div>
                      <img
                        src="/bed-double-svgrepo-com.svg"
                        className=" w-4 h-4 pt-1"
                        alt=""
                      />
                    </div>
                    <div>4 Beds</div>
                  </li>{" "}
                  <li className="border-2   rounded-md flex justify-center gap-2  pt-1 pb-1">
                    <div>
                      <img
                        src="/bathroom-2-svgrepo-com.svg"
                        className=" w-4 h-4 pt-1"
                        alt=""
                      />
                    </div>
                    <div>2 Baths</div>
                  </li>{" "}
                  <li className="border-2   rounded-md flex justify-center   pt-1 pb-1">
                    <div>
                      <img
                        src="/measure-svgrepo-com.svg"
                        className=" w-4 h-4 pt-1"
                        alt=""
                      />
                    </div>
                    <div> 2.820sqft</div>
                  </li>{" "}
                </ul>
              </p>
            </li>
            <li className=" border-2 lg:mr-10   rounded-lg    p-4 ">
              <img
                src="/625b10a58137b364b18df2ea_iStock-94179607.jpg"
                className=" lg:w-80 lg:h-52    rounded-md "
                alt=""
              />
              <p className="  flex justify-between text-sm pt-2 font-bold">
                <span>Boston Retreat</span>
                <span> $350.800</span>
              </p>
              <p className=" text-sm text-slate-500">
                <p className=" flex">
                  <img
                    src="/location-pin-svgrepo-com.svg"
                    alt=""
                    className=" w-3 h-3 mt-1"
                  />
                  <p> Narshville,United States</p>
                </p>
                <ul className=" grid gap-2 grid-cols-3 text-sm text-center pt-2 text-slate-500">
                  <li className="border-2   rounded-md flex justify-center gap-2  pt-1 pb-1">
                    <div>
                      <img
                        src="/bed-double-svgrepo-com.svg"
                        className=" w-4 h-4 pt-1"
                        alt=""
                      />
                    </div>
                    <div>4 Beds</div>
                  </li>
                  <li className="border-2   rounded-md flex justify-center gap-2  pt-1 pb-1">
                    <div>
                      <img
                        src="/bathroom-2-svgrepo-com.svg"
                        className=" w-4 h-4 pt-1"
                        alt=""
                      />
                    </div>
                    <div>2 Baths</div>
                  </li>
                  <li className="border-2   rounded-md flex justify-center   pt-1 pb-1">
                    <div>
                      <img
                        src="/measure-svgrepo-com.svg"
                        className=" w-4 h-4 pt-1"
                        alt=""
                      />
                    </div>
                    <div>2.640sqft</div>
                  </li>{" "}
                </ul>
              </p>
            </li>
            <li className=" border-2  rounded-lg lg:mr-10     p-4 ">
              <img
                src="/737793_h_133.jpg"
                className=" lg:w-80 lg:h-52   rounded-md "
                alt=""
              />
              <p className="  flex justify-between text-sm pt-2 font-bold">
                <span>Phenix Otica</span>
                <span> $428.100</span>
              </p>
              <p className=" text-sm text-slate-500">
                <p className=" flex">
                  <img
                    src="/location-pin-svgrepo-com.svg"
                    alt=""
                    className=" w-3 h-3 mt-1"
                  />
                  <p> Las Vegas,United States</p>
                </p>
                <ul className=" grid gap-2 grid-cols-3 text-sm text-center pt-2 text-slate-500">
                  <li className="border-2   rounded-md flex justify-center gap-2  pt-1 pb-1">
                    <div>
                      <img
                        src="/bed-double-svgrepo-com.svg"
                        className=" w-4 h-4 pt-1"
                        alt=""
                      />
                    </div>
                    <div>4 Beds</div>
                  </li>
                  <li className="border-2   rounded-md flex justify-center gap-2  pt-1 pb-1">
                    <div>
                      <img
                        src="/bathroom-2-svgrepo-com.svg"
                        className=" w-4 h-4 pt-1"
                        alt=""
                      />
                    </div>
                    <div>2 Baths</div>
                  </li>
                  <li className="border-2   rounded-md flex justify-center  pt-1 pb-1">
                    <div>
                      <img
                        src="/measure-svgrepo-com.svg"
                        className=" w-4 h-4 pt-1"
                        alt=""
                      />
                    </div>
                    <div>2.698sqft</div>
                  </li>{" "}
                </ul>
              </p>
            </li>
            <li className=" border-2  rounded-lg lg:mr-10    p-4 ">
              <img
                src="/public/Green-Park.jpg"
                className=" lg:w-80 lg:h-52    rounded-md "
                alt=""
              />
              <p className="  flex justify-between text-sm pt-2 font-bold">
                <span>Welvore Henix</span>
                <span> $480.500</span>
              </p>
              <p className=" text-sm text-slate-500">
                <p className=" flex">
                  <img
                    src="/location-pin-svgrepo-com.svg"
                    alt=""
                    className=" w-3 h-3 mt-1"
                  />
                  <p> Denver,United States</p>
                </p>
                <ul className=" grid gap-2 grid-cols-3 text-sm text-center pt-2 text-slate-500">
                  <li className="border-2   rounded-md flex justify-center gap-1   pt-1 pb-1">
                    <div>
                      <img
                        src="/bed-double-svgrepo-com.svg"
                        className=" w-4 h-4 pt-1"
                        alt=""
                      />
                    </div>
                    <div>4 Beds</div>
                  </li>
                  <li className="border-2   rounded-md flex justify-center   pt-1 pb-1">
                    <div>
                      <img
                        src="/bathroom-2-svgrepo-com.svg"
                        className=" w-4 h-4 pt-1"
                        alt=""
                      />
                    </div>
                    <div>2 Baths</div>
                  </li>{" "}
                  <li className="border-2   rounded-md flex justify-center   pt-1 pb-1">
                    <div>
                      <img
                        src="/measure-svgrepo-com.svg"
                        className=" w-4 h-4 pt-1"
                        alt=""
                      />
                    </div>
                    <div>2.882sqft</div>
                  </li>{" "}
                </ul>
              </p>
            </li>
            <li className=" border-2  rounded-lg lg:mr-10     p-4 ">
              <img
                src="/houses_and_land-5bfc3326c9e77c0051812eb3.jpg"
                className=" lg:w-80 lg:h-52    rounded-md "
                alt=""
              />
              <p className="  flex justify-between text-sm pt-2 font-bold">
                <span>Havasu Bave</span>
                <span> $398.600</span>
              </p>
              <p className=" text-sm text-slate-500">
                <p className=" flex">
                  <img
                    src="/location-pin-svgrepo-com.svg"
                    alt=""
                    className=" w-3 h-3 mt-1"
                  />
                  <p> Charlotte,United States</p>
                </p>
                <ul className=" grid gap-2 grid-cols-3 text-sm text-center pt-2 text-slate-500">
                  <li className="border-2   rounded-md flex justify-center gap-2  pt-1 pb-1">
                    <div>
                      <img
                        src="/bed-double-svgrepo-com.svg"
                        className=" w-4 h-4 pt-1"
                        alt=""
                      />
                    </div>
                    <div>4 Beds</div>
                  </li>
                  <li className="border-2   rounded-md flex justify-center gap-2  pt-1 pb-1">
                    <div>
                      <img
                        src="/bathroom-2-svgrepo-com.svg"
                        className=" w-4 h-4 pt-1"
                        alt=""
                      />
                    </div>
                    <div>2 Baths</div>
                  </li>
                  <li className="border-2   rounded-md flex justify-center   pt-1 pb-1">
                    <div>
                      <img
                        src="/measure-svgrepo-com.svg"
                        className=" w-4 h-4 pt-1"
                        alt=""
                      />
                    </div>
                    <div>2.466sqft</div>
                  </li>{" "}
                </ul>
              </p>
            </li>
          </ul>
        </div>
      </div>
      {/* {work with us } */}
      <div>
        <p className=" lg:hidden font-body text-black/40   max-md:border-2  text-center  mt-6  max-md:mr-20 max-md:ml-20 pt-2 pb-2 ">
          How It Works{" "}
        </p>
        <p
          style={{ marginLeft: "34rem", marginRight: "34rem" }}
          className=" mt-14  border-2 max-md:hidden font-body text-black/40  text-sm    text-center   "
        >
          How It Works{" "}
        </p>
        <p className=" max-md:mt-2 text-3xl text-center font-Title font-bold">
          Journey to Achieve Property Success{" "}
        </p>
        <p className=" font-body text-black/40 text-center text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
        <ul className=" lg:grid grid-cols-2 gap-2 mt-6 lg:ml-10 lg:mr-10 ">
          <li className=" border-2 rounded-md  mb-7 pb-3 ">
            <div className=" flex justify-between pr-4 pl-4 pt-3">
              <img
                src="/apartment-svgrepo-com.svg"
                className=" w-7 h-7 "
                alt=""
              />
              <p className=" font-semibold">01</p>
            </div>
            <p className=" pt-9 text-xl font-Title font-bold pl-4">
              {" "}
              Discover Property
            </p>
            <p className=" font-body text-black/40  pl-4 text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem
              ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
          </li>
          <li className=" border-2 rounded-md mb-7 pb-3 ">
            <div className=" flex justify-between pr-4 pl-4 pt-3">
              <img
                src="/calender-svgrepo-com.svg"
                className=" w-7 h-7 "
                alt=""
              />
              <p className=" font-semibold">02</p>
            </div>
            <p className=" pt-9 text-xl font-Title font-bold pl-4">
              {" "}
              Schedule Visit
            </p>
            <p className=" font-body text-black/40  pl-4 text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem
              ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
          </li>
          <li className=" border-2 rounded-md mb-7 pb-3 ">
            <div className=" flex justify-between pr-4 pl-4 pt-3">
              <img src="/secure-svgrepo-com.svg" className=" w-7 h-7 " alt="" />
              <p className=" font-semibold">03</p>
            </div>
            <p className=" pt-9 text-xl font-Title font-bold pl-4">
              {" "}
              Property Visit
            </p>
            <p className=" font-body text-black/40  pl-4 text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem
              ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
          </li>
          <li className=" border-2 rounded-md mb-7 pb-3 ">
            <div className=" flex justify-between pr-4 pl-4 pt-3">
              <img src="/offer-svgrepo-com.svg" className=" w-7 h-7 " alt="" />
              <p className=" font-semibold">04</p>
            </div>
            <p className=" pt-9 text-xl font-Title font-bold pl-4">
              {" "}
              Finalize The Deal
            </p>
            <p className=" font-body text-black/40  pl-4 text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem
              ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
          </li>
        </ul>
      </div>
      {/* {contact us } */}
      <div>
        <p className=" lg:hidden font-body text-black/40   max-md:border-2  text-center  mt-6  max-md:mr-20 max-md:ml-20 pt-2 pb-2 ">
          Contact Us{" "}
        </p>
        <p
          style={{ marginLeft: "34rem", marginRight: "34rem" }}
          className=" mt-8  border-2 max-md:hidden font-body text-black/40  text-sm    text-center  mt-6 "
        >
          Contact Us{" "}
        </p>
        <p className=" max-md:mt-2 text-3xl text-center font-Title font-bold">
          Connect to Find Your Property{" "}
        </p>
        <p className=" font-body text-black/40 text-center text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
        <div className="  lg:flex justify-center gap-5 lg:border-2  lg:rounded-md mb-4 lg:pt-4 mt-5 lg:ml-32 lg:mr-32 ">
          <div className=" max-md:hidden ">
            <img
              src="/contact-center-857x1000.jpg"
              className=" w-80 h-96 rounded-md"
              alt=""
            />
          </div>
          <div className=" ">
            <div className=" lg:grid grid-cols-2 gap-x-7">
              <div className=" grid ">
                {" "}
                <label className="  mb-2 "> Full Name </label>
                <input
                  placeholder="Enter fullname"
                  className=" border-2  lg:pr-16 rounded-md lg:pl-1 lg:pt-1 lg:pb-1"
                  type=" text"
                ></input>
              </div>
              <div className=" grid max-md:mt-3">
                {" "}
                <label className="  mb-2 "> Email Address</label>
                <input
                  className=" border-2  lg:pr-16 rounded-md lg:pl-1 lg:pt-1 lg:pb-1"
                  placeholder="Enter Email Address"
                  type=" text"
                ></input>
              </div>
              <div className=" grid mt-3">
                {" "}
                <label className="  mb-2 "> Phone Number </label>
                <input
                  className=" border-2  lg:pr-16 rounded-md lg:pl-1 lg:pt-1 lg:pb-1"
                  placeholder="Enter phone number"
                  type=" text"
                ></input>
              </div>
              <div className=" grid mt-3">
                <p className="  mb-2 ">Property Type </p>
                <select className="  mb-2 border-2 rounded-md  text-sm text-slate-400 lg:pt-1 lg:pb-2  ">
                  {" "}
                  <option
                    className=" border-2  lg:pr-16 rounded-md lg:pl-1 lg:pt-1 lg:pb-1 "
                    type="select"
                  >
                    select Type{" "}
                  </option>
                </select>
              </div>

              <div className=" grid mt-3">
                {" "}
                <p className="  mb-2 "> Budget Range </p>
                <select className="  mb-2 border-2 rounded-md  text-sm text-slate-400 lg:pt-1 lg:pb-2  ">
                  {" "}
                  <option
                    className=" border-2  lg:pr-16 rounded-md lg:pl-1 lg:pt-1 lg:pb-1 "
                    type="select"
                  >
                    select Budget Range{" "}
                  </option>
                </select>
              </div>
              <div className=" grid mt-3">
                {" "}
                <label className="  mb-2 font-Title">
                  {" "}
                  Location Preference{" "}
                </label>
                <select className="  mb-2 border-2 rounded-md  text-sm text-slate-400 lg:pt-1 lg:pb-2  ">
                  {" "}
                  <option
                    className=" border-2  lg:pr-16 rounded-md lg:pl-1 lg:pt-1 lg:pb-1 "
                    type="select"
                  >
                    select Location{" "}
                  </option>
                </select>
              </div>
            </div>
            <ul className=" mt-7">
              <li>
                <div className=" grid">
                  {" "}
                  <label className="  mb-2 "> Message </label>
                  <input
                    placeholder="write message"
                    className=" pt-2 pl-2 pb-6 rounded-md border-2"
                    type="text"
                  ></input>
                </div>
              </li>
              <li className=" max-md:mr-4 ">
                <button
                  className=" border-2 mt-5  max-md:pr-36  max-md:pl-40   lg:pl-60 bg-black text-white border-black rounded-sm mb-4 lg:pr-60  "
                  placeholder=""
                  type="submit"
                >
                  Submit
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* {contact us} */}
      <div className=" max-md:mt-4 lg:grid grid-cols-2 lg:mt-16">
        <div>
          <p className=" pl-2 pt-2 font-Title font-bold text-2xl">Rubble</p>
          <p className="  max-md:ml-2 lg:text-sm lg:ml-2 lg:hidden ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            exercitationem earum quia perspiciatis inventore nobis cumque rem
          </p>
          <p className="  max-md:hidden  text-sm ml-2 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            <p>
              exercitationem earum quia perspiciatis inventore nobis cumque rem
            </p>
          </p>
        </div>
        <div className=" lg:mb-11 max-md:ml-2 max-md:mt-6 lg:flex gap-10 ">
          <ul className=" max-md:mb-6 font-thin">
            <li className=" font-bold">Company</li>
            <li>Blog</li>
            <li>Career</li>
            <li>Contact</li>
            <li>About us</li>
          </ul>
          <ul className=" max-md:mb-6  font-thin">
            <li className=" font-bold">Social Media</li>
            <li>Twitter</li>
            <li>Linkedin</li>
            <li>Facebook</li>
            <li>Instagram</li>
          </ul>{" "}
          <ul className=" max-md:mb-6 font-thin">
            <li className=" font-bold">Service</li>
            <li>Buy Property</li>
            <li>Sell property </li>
            <li>Rent property</li>
            <li>Property Agent</li>
          </ul>
          <ul className=" max-md:mb-6 font-thin">
            <li className=" font-bold">Contact </li>
            <li>Chat Our Support</li>
            <li>rubble@gmail.com</li>
            <li>+1 814 637 1529</li>
            <li>About us</li>
          </ul>
        </div>
      </div>
      <hr></hr>
      <div className=" max-md:flex justify-between mb-4 lg:hidden">
        <p style={{ fontSize: "0.5rem" }}>Rubble2024.All Rights Reserved</p>
        <p style={{ fontSize: "0.5rem" }}> privacy Policy & Terms of Use</p>
      </div>

      <div className=" lg:flex justify-between mb-4 max-md:hidden">
        <p style={{ fontSize: "0.5rem" }}>Rubble2024.All Rights Reserved</p>
        <p style={{ fontSize: "0.5rem" }}> privacy Policy & Terms of Use</p>
      </div>
    </div>
  );
}

export default App;
