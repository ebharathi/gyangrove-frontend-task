export const formatDate=(str)=>{
    const dateString = str;
    const date = new Date(dateString);

    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    return formattedDate;
}