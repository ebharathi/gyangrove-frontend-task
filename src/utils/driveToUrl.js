export const convertDriveUrl = (url) => {
    const fileId = url.split('/d/')[1].split('/')[0];
    console.log("img-->",`https://drive.google.com/thumbnail?id=${fileId}`)
    return `https://drive.google.com/thumbnail?id=${fileId}`;
};