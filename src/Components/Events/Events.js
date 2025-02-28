import { useState, useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { getUpcomingEvents } from "../../utils/api";
import { formatDate } from "../../utils/formatDate";
import { convertDriveUrl } from "../../utils/driveToUrl";

const Events = () => {
    const [events, setEvents] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        const fetchInitialEvents = async () => {
            setLoading(true);
            try {
                const response = await getUpcomingEvents(1);
                if (response.error) {
                    setHasMore(false);
                } else {
                    setEvents(response.events);
                }
            } catch (error) {
                console.error('Error fetching events:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchInitialEvents();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScroll = () => {
        if (loading || !hasMore) return;
        if (document.documentElement.offsetHeight - (window.innerHeight + document.documentElement.scrollTop) > 10) return;
        setPageNumber((prevPageNumber) => prevPageNumber + 1);
    };

    useEffect(() => {
        if (pageNumber === 1 || !hasMore) return;
        
        const fetchMoreEvents = async () => {
            setLoading(true);
            try {
                const response = await getUpcomingEvents(pageNumber);
                if (response.error) {
                    setHasMore(false);
                    window.removeEventListener('scroll', handleScroll);
                } else {
                    setEvents((prevEvents) => [...prevEvents, ...response.events]);
                }
            } catch (error) {
                console.error('Error fetching events:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchMoreEvents();
    }, [pageNumber]);
    return (
        <div className="pt-[200px] lg:pt-[300px] px-5 lg:px-40">
            <div className="flex gap-3">
                <p className="text-[20px] text-black">Upcoming Events</p>
                <div className="flex items-center">
                  <HiOutlineArrowSmallRight/>
                </div>    
            </div>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10  gap-y-14">
                {events && events.length > 0 &&events.map((single, index) => (
                    <div key={index} className="border-[1px] border-[#B0BABF] p-3 hover:p-1 rounded-lg hover:shadow-2xl cursor-pointer transition-padding duration-300 ease-in-out">
                        <div className="relative overflow-hidden">
                            <img src={convertDriveUrl(single?.imgUrl)} alt={single.eventName} className="w-full rounded-lg object-cover scale-y-125 scale-x-110" />
                            <div className="absolute bottom-0 py-2 px-4 flex-1 text-left bg-black bg-opacity-70 rounded-lg w-full">
                                <span className="text-[16px] text-white">{formatDate(single?.date)}</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 text-[12px] pt-5">
                            <div className="w-full">
                                <div className="text-left">
                                    <span className="text-[16px] ">{single?.eventName}</span>
                                </div>
                            </div>
                            <div className="flex text-[#9f9f9f] text-[12px]">
                                <div className="flex-1 flex justify-left items-center gap-1 text-left">
                                    <FaLocationDot className="text-[18px]" />
                                    <span className="">{single?.cityName}</span>
                                </div>
                                <div className="flex-1 text-right lg:text-[12px] text-[10px]">
                                    <span className="">{single?.weather &&  `${single?.weather.split(' ')[0]}, ${single?.weather.match(/\d+/g)}°C`} | {(parseFloat(single?.distanceKm)).toFixed(0)}km</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="px-2 py-10 flex justify-center items-center hover:p-1">
                {
                loading &&
                <div className="w-24 h-12 relative">
                    <div className="w-8 h-1 bg-black rounded-full absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-0.5 animate-spin"></div>
                </div>

               }
            </div>
        </div>
    );
}

export default Events;
