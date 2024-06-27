import { useState,useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { getRecommendations } from "../../utils/api";
import { formatDate } from "../../utils/formatDate";
import IMG from "../../assests/Rectangle2.svg"
import { convertDriveUrl } from "../../utils/driveToUrl";
const Recommend = () => {
    const [recommendations,setRecommendations]=useState([]);

    useEffect(()=>{
        getRecommendations().then((response)=>setRecommendations(response?.events))
    },[]) 
  
    return (
        <div className="recommend relative min-h-[800px] flex flex-col justify-start items-center lg:px-40 px-2 pt-28">
            <p className="text-[24px] lg:text-[65px] font-light text-center leading-10 lg:leading-[75px] text-white">
                Discover Exciting Events Happening Near You - Stay Tuned for Updates!
            </p>
            <p className="text-white opacity-70 font-thin leading-7  text-[12px] lg:text-[16px]  text-center mt-5 lg:px-40 ">
              <span className="hidden lg:block ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec augue at nisl vehicula sagittis. Nullam in nisi non arcu pellentesque vestibulum. Fusce sit amet convallis dui. Proin ac ex eu dui ultricies auctor. </span>
              <span className="block lg:hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec augue at nisl vehicula sagittis. Nullam in nisi non arcu pellentesque</span>
            </p>
            <div className="absolute inset-x-0 -bottom-20 lg:-bottom-60  pl-4 lg:pl-40">
                <div className="flex gap-2  mb-4 text-white opacity-75 text-[16px] lg:text-[20px] ">
                     <p className="">Recommended Shows</p>
                     <div className="flex text-[24px] lg:text-[30px] items-center">
                        <HiOutlineArrowSmallRight/>
                     </div>
                     <span className="cursor-pointer absolute right-2 lg:right-5 text-[12px] underline pt-1 lg:pt-2">See all</span>
                </div>
                <div className="flex gap-5 lg:gap-10 overflow-x-auto overflow-y-hidden hide-scrollbar">
                    {recommendations.map((rec, index) => (
                        <div key={index} className="cursor-pointer relative  min-w-[250px] h-[400px] flex-shrink-0 rounded-lg transition-width duration-300 ease-in-out hover:min-w-[275px]">
                            <div className="text-white text-opacity-35 z-10  absolute p-2 top-0 left-0 right-0 bottom-0 flex flex-col justify-end">
                                <div className="flex flex-col gap-1 text-[12px]">
                                    <div className="flex w-full">
                                         <div className="flex-2 text-left">
                                                 <span className="text-[14px] text-white text-opacity-75  ">
                                                    {rec?.eventName.length>20?rec?.eventName.substring(0,17)+'..':rec?.eventName}
                                                </span>
                                         </div>
                                         <div className="flex-1 text-right">
                                                   <span className="text-[9px]">
                                                    {formatDate(rec?.date)}
                                                   </span>
                                         </div>
                                    </div>
                                    <div className="flex">
                                         <div className="flex-1 flex gap-1 text-left">
                                                <FaLocationDot/>
                                                 <span  className="text-[9px]">
                                                    {rec?.cityName}
                                                </span>
                                         </div>
                                         <div className="flex-1 text-right">
                                                   <span  className="text-[9px]">
                                                     {rec?.weather} | {(parseFloat(rec?.distanceKm)).toFixed(0)}km
                                                   </span>
                                         </div>
                                    </div>
                                </div>
                            </div>
                            <img 
                                src={IMG}
                                // src={convertDriveUrl(rec?.imgUrl)}
                                alt={rec.eventName} 
                                className="absolute inset-0 border-2 w-full h-full z-1 object-cover rounded-lg"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Recommend;
