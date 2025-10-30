const upper = document.getElementById('upper');
const middle = document.getElementById('middle');
const lower = document.getElementById('lower');
const videosContainer = document.querySelector('.videos');
const title = document.querySelector('.title');




let upperVidoes =`    <video src="backvideos/upper/istockphoto-1281435394-640_adpp_is.mp4" controls></video>
                   <video src="backvideos/upper/istockphoto-1354428390-640_adpp_is.mp4" controls></video>
                   <video src="backvideos/upper/istockphoto-1737392686-640_adpp_is.mp4" controls></video>
                   <video src="backvideos/upper/istockphoto-2174679040-640_adpp_is.mp4" controls></video>`;
let middleVidoes =`   <video src="backvideos/middle/istockphoto-1128073372-640_adpp_is.mp4" controls></video>
                   <video src="backvideos/middle/istockphoto-1341810065-640_adpp_is.mp4" controls></video>
                   <video src="backvideos/middle/istockphoto-1397589315-640_adpp_is.mp4" controls></video>
                   <video src="backvideos/middle/istockphoto-1628717520-640_adpp_is.mp4" controls></video>
                   <video src="backvideos/middle/istockphoto-1781787982-640_adpp_is.mp4" controls></video>
                   <video src="backvideos/middle/istockphoto-2182888487-640_adpp_is.mp4" controls></video>
                   <video src="backvideos/middle/istockphoto-615547210-640_adpp_is.mp4" controls></video>`;
let lowerVideos =`   <video src="backvideos/lower/istockphoto-1206679859-640_adpp_is.mp4" controls ></video>
                    <video src="backvideos/lower/istockphoto-1213084158-640_adpp_is.mp4" controls ></video>
                    <video src="backvideos/lower/istockphoto-1309094647-640_adpp_is.mp4" controls ></video>
                    <video src="backvideos/lower/istockphoto-1354428390-640_adpp_is.mp4" controls ></video>
                    <video src="backvideos/lower/istockphoto-1387728692-640_adpp_is.mp4" controls ></video>
                    <video src="backvideos/lower/istockphoto-1709529997-640_adpp_is.mp4" controls ></video>
                    <video src="backvideos/lower/istockphoto-803274260-640_adpp_is.mp4" controls ></video>`;



function Select(Title,vidoes,spa_n)
{
    title.innerHTML = `<h1>${Title}<span>${spa_n}</span></h1>`;
    videosContainer.innerHTML = vidoes;
}
upper.onclick = (e)=>
{
    e.preventDefault();
    Select('Upper',upperVidoes,'Back');
}
middle.onclick = (e) => {
    e.preventDefault();
    Select('Middle', middleVidoes, 'Back');
}
lower.onclick = (e) => {
    e.preventDefault();
    Select('Lower', lowerVideos, 'Back');
}
window.onload = ()=>
{
    Select('middle',middleVidoes,'Back')
}