const upper = document.getElementById('upper');
const middle = document.getElementById('middle');
const lower = document.getElementById('lower');
const videosContainer = document.querySelector('.videos');
const title = document.querySelector('.title');




let upperVidoes = `<video src="LegsVidoes/front/istockphoto-1196006399-640_adpp_is.mp4" controls></video>
                    <video src="LegsVidoes/front/istockphoto-1200986102-640_adpp_is.mp4" controls></video>
                    <video src="LegsVidoes/front/istockphoto-1465040431-640_adpp_is.mp4" controls></video>
                    <video src="LegsVidoes/front/istockphoto-1780514523-640_adpp_is.mp4" controls></video>
                    <video src="LegsVidoes/front/istockphoto-1955591143-640_adpp_is.mp4" controls></video>
                    <video src="LegsVidoes/front/istockphoto-824704012-640_adpp_is.mp4" controls></video>`;
let middleVidoes = `  
                    <video src="LegsVidoes/glutes/istockphoto-1286627706-640_adpp_is.mp4" controls></video>
                    <video src="LegsVidoes/glutes/istockphoto-1344367738-640_adpp_is.mp4" controls></video>
                    <video src="LegsVidoes/glutes/istockphoto-1391942800-640_adpp_is.mp4" controls></video>
                    <video src="LegsVidoes/glutes/istockphoto-1449018090-640_adpp_is.mp4" controls></video>
                    <video src="LegsVidoes/glutes/istockphoto-1516912400-640_adpp_is.mp4" controls></video>
                    <video src="LegsVidoes/glutes/istockphoto-1709530618-640_adpp_is.mp4" controls></video>
                    <video src="LegsVidoes/glutes/istockphoto-1800395386-640_adpp_is.mp4" controls></video>
                    <video src="LegsVidoes/glutes/istockphoto-851580028-640_adpp_is.mp4" controls></video>`;
let lowerVideos = `<video src="LegsVidoes/lower/istockphoto-1487225805-640_adpp_is.mp4" controls></video>
                    <video src="LegsVidoes/lower/istockphoto-1671259415-640_adpp_is.mp4" controls></video>
                    <video src="LegsVidoes/lower/istockphoto-2175992938-640_adpp_is.mp4" controls></video>`;



function Select(Title, vidoes, spa_n) {
    title.innerHTML = `<h1>${Title}<span>${spa_n}</span></h1>`;
    videosContainer.innerHTML = vidoes;
}
upper.onclick = (e) => {
    e.preventDefault();
    Select('Legs', upperVidoes, 'Quadriceps');
}
middle.onclick = (e) => {
    e.preventDefault();
    Select('Legs', middleVidoes, 'Hamstrings');
}
lower.onclick = (e) => {
    e.preventDefault();
    Select('Legs', lowerVideos, 'Calves');
}
window.onload = () => {
    Select('Legs', upperVidoes, 'Quadriceps')
}