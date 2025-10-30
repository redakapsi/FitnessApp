const upper = document.getElementById('upper');
const middle = document.getElementById('middle');
const lower = document.getElementById('lower');
const videosContainer = document.querySelector('.videos');
const title = document.querySelector('.title');




let upperVidoes = `   <video src="shoulders/front/istockphoto-1311006700-640_adpp_is.mp4" controls></video>
                    <video src="shoulders/front/istockphoto-1311961395-640_adpp_is.mp4" controls></video>
                    <video src="shoulders/front/istockphoto-1311961963-640_adpp_is.mp4" controls></video>
                    <video src="shoulders/front/istockphoto-2151624965-640_adpp_is.mp4" controls></video>
                    <video src="shoulders/front/istockphoto-972931478-640_adpp_is.mp4" controls></video>`;
let middleVidoes = `<video src="shoulders/sides/istockphoto-1008880074-640_adpp_is.mp4" controls></video>
                    <video src="shoulders/sides/istockphoto-1413978437-640_adpp_is.mp4" controls></video>
                    <video src="shoulders/sides/istockphoto-1692439587-640_adpp_is.mp4" controls></video>
                    <video src="shoulders/sides/istockphoto-2119318096-640_adpp_is.mp4" controls></video>
                    <video src="shoulders/sides/istockphoto-2230032205-640_adpp_is.mp4" controls></video>`;
let lowerVideos = `<video src="shoulders/back/istockphoto-1291004387-640_adpp_is.mp4" controls></video>
                    <video src="shoulders/back/istockphoto-1388388731-640_adpp_is.mp4" controls></video>
                    <video src="shoulders/back/istockphoto-1404056312-640_adpp_is.mp4" controls></video>
                    <video src="shoulders/back/istockphoto-636092670-640_adpp_is.mp4" controls></video>
                    <video src="shoulders/back/istockphoto-640664292-640_adpp_is.mp4" controls></video>
                    <video src="shoulders/back/istockphoto-831152890-640_adpp_is.mp4" controls></video>`;



function Select(Title, vidoes, spa_n) {
    title.innerHTML = `<h1>${Title}<span>${spa_n}</span></h1>`;
    videosContainer.innerHTML = vidoes;
}
upper.onclick = (e) => {
    e.preventDefault();
    Select('Front', upperVidoes, 'Shoulders');
}
middle.onclick = (e) => {
    e.preventDefault();
    Select('Side', middleVidoes, 'Shoulders');
}
lower.onclick = (e) => {
    e.preventDefault();
    Select('Back', lowerVideos, 'Shoulders');
}
window.onload = () => {
    Select('Front', upperVidoes, 'Shoulders')
}