import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { FaUser } from "react-icons/fa";
const Navbar=()=>{
  return (
    <div className="py-1 lg:py-3 px-5 lg:px-20 text-black text-opacity-40    text-[13px]">
        <div className="grid grid-cols-5 ">
            <div className="col-span-4 lg:col-span-1 flex justify-start  lg:justify-center items-center">
                <p className="text-red-400 text-[18px] font-bold text-center">BookUsNow</p>
            </div>
            <div className="col-span-1 lg:col-span-4 flex gap-3 lg:gap-1">
                 <div className="flex-1 hidden lg:flex justify-end">
                    <button className="bg-[#1f2023] text-white rounded-md flex gap-2  font-bold px-3 py-2">
                        <span className="pt-[1.5px] text-[15px]"><GiHamburgerMenu/></span>
                        <span>Categories</span>
                    </button>
                 </div>
                 <div className="flex-1  lg:flex-[4] flex lg:border-2 rounded-md">
                    <input className="w-[95%] hidden lg:block outline-none px-3" type="text" placeholder="DJI Phantom"  />
                    <span className="pt-[7px] md:pt-2  text-[16px]"><IoIosSearch/></span>
                 </div>
                 <div className="flex-1 flex justify-center items-center gap-2 ">
                    <span className="text-[16px]"><FaHeart/></span>
                    <span className="text-[13px] hidden lg:block ">Favourites</span>
                 </div>
                 <div className="flex-[0.5] hidden lg:flex justify-center items-center border-2 rounded-md hover:bg-red-400 hover:text-white cursor-pointer">
                    <span>Sign In</span>
                 </div>
                 <div className="flex-1 flex justify-center items-center lg:hidden">
                    <span><FaUser/></span>
                 </div>
            </div>
        </div>
        <div className="grid col-span-1 lg:grid-cols-5 lg:mt-3">
              <div className="col-span-1 flex gap-2 justify-start lg:justify-center items-center text-[12px] lg:text-[13px]">
                   <span className=""><FaLocationDot/></span>
                   <span>Mumbai, India</span>
                   <span className=""><IoIosArrowForward/></span>
              </div>
              <div className="col-span-3 hidden lg:flex justify-center items-center">
                  <ul className="flex gap-10">
                    <li className="hover:text-red-400 cursor-pointer">Live shows</li>
                    <li className="hover:text-red-400 cursor-pointer">Streams</li>
                    <li className="hover:text-red-400 cursor-pointer">Movies</li>
                    <li className="hover:text-red-400 cursor-pointer">Plays</li>
                    <li className="hover:text-red-400 cursor-pointer">Events</li>
                    <li className="hover:text-red-400 cursor-pointer">Sports</li>
                    <li className="hover:text-red-400 cursor-pointer">Activities</li>
                  </ul>
              </div>
        </div>
        <div className="block lg:hidden overflow-x-auto text-[12px] py-3 hide-scrollbar">
            <ul className="flex gap-5 whitespace-nowrap">
                <li className="hover:text-red-400 cursor-pointer">Live shows</li>
                <li className="hover:text-red-400 cursor-pointer">Streams</li>
                <li className="hover:text-red-400 cursor-pointer">Movies</li>
                <li className="hover:text-red-400 cursor-pointer">Plays</li>
                <li className="hover:text-red-400 cursor-pointer">Events</li>
                <li className="hover:text-red-400 cursor-pointer">Sports</li>
                <li className="hover:text-red-400 cursor-pointer">Activities</li>
            </ul>
        </div>

    </div>
  )
}

export default Navbar;