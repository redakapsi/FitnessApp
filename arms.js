const upper = document.getElementById('upper');
const middle = document.getElementById('middle');
const lower = document.getElementById('lower');
const videosContainer = document.querySelector('.videos');
const title = document.querySelector('.title');




let upperVidoes = ` <video src="arms/biceps/istockphoto-1129988937-640_adpp_is.mp4" controls></video>
                    <video src="arms/biceps/istockphoto-1189185017-640_adpp_is.mp4" controls></video>
                    <video src="arms/biceps/istockphoto-1302118237-640_adpp_is.mp4" controls></video>
                    <video src="arms/biceps/istockphoto-1493264755-640_adpp_is.mp4" controls></video>
                    <video src="arms/biceps/istockphoto-1796602938-640_adpp_is.mp4" controls></video>
                    <video src="arms/biceps/istockphoto-2166974510-640_adpp_is.mp4" controls></video>
                    <video src="arms/biceps/istockphoto-884521398-640_adpp_is.mp4" controls></video>`;
let middleVidoes = `   <video src="arms/triceps/istockphoto-1189150328-640_adpp_is.mp4" controls></video>
                    <video src="arms/triceps/istockphoto-1267822191-640_adpp_is.mp4" controls></video>
                    <video src="arms/triceps/istockphoto-1412426895-640_adpp_is.mp4" controls></video>
                    <video src="arms/triceps/istockphoto-1415815372-640_adpp_is.mp4" controls></video>
                    <video src="arms/triceps/istockphoto-2148409690-640_adpp_is.mp4" controls></video>
                    <video src="arms/triceps/istockphoto-2174538149-640_adpp_is.mp4" controls></video>
                    <video src="arms/triceps/istockphoto-2195622526-640_adpp_is.mp4" controls></video>
                    <video src="arms/triceps/istockphoto-468620676-640_adpp_is.mp4" controls></video>`;
let lowerVideos = `   <video src="arms/forarms/istockphoto-1350889480-640_adpp_is.mp4" controls></video>
                    <video src="arms/forarms/istockphoto-1553015271-640_adpp_is.mp4" controls></video>
                    <video src="arms/forarms/istockphoto-1819393719-640_adpp_is.mp4" controls></video>
                    <video src="arms/forarms/istockphoto-2162211169-640_adpp_is.mp4" controls></video>
                    <video src="arms/forarms/istockphoto-823102080-640_adpp_is.mp4" controls></video>`;



function Select(Title, vidoes, spa_n) {
    title.innerHTML = `<h1>${Title}<span>${spa_n}</span></h1>`;
    videosContainer.innerHTML = vidoes;
}
upper.onclick = (e) => {
    e.preventDefault();
    Select('Arms', upperVidoes, 'Biceps');
}
middle.onclick = (e) => {
    e.preventDefault();
    Select('Arms', middleVidoes, 'Triceps');
}
lower.onclick = (e) => {
    e.preventDefault();
    Select('Arms', lowerVideos, 'ForeArms');
}
window.onload = () => {
    Select('Arms', upperVidoes, 'Biceps')
}