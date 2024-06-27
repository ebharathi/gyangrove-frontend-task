export const getRecommendations = async () => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_DOMAIN}/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Res-pose-->",data)
        return data;
    } catch (error) {
        console.error("Fetch error: ", error.message);
        return {error:true}
    }
};


export const getUpcomingEvents=async(pageno=1)=>{
    try {
        console.log("PAGE NUMBERS---",pageno)
        const response = await fetch(`${process.env.REACT_APP_API_DOMAIN}/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=${pageno}&type=upcoming`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("dd--->",data)
        return data;
    } catch (error) {
        console.error("Fetch error: ", error.message);
        return {error:true}
    }
}