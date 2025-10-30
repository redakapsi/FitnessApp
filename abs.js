const upper = document.getElementById('upper');
const middle = document.getElementById('middle');
const videosContainer = document.querySelector('.videos');
const title = document.querySelector('.title');




let upperVidoes = `   <video src="abs/front/istockphoto-1072703818-640_adpp_is.mp4" controls></video>
                    <video src="abs/front/istockphoto-1299913443-640_adpp_is.mp4" controls></video>
                    <video src="abs/front/istockphoto-1321773081-640_adpp_is.mp4" controls></video>
                    <video src="abs/front/istockphoto-1361013341-640_adpp_is.mp4" controls></video>
                    <video src="abs/front/istockphoto-2013955963-640_adpp_is.mp4" controls></video>
                    <video src="abs/front/istockphoto-2218213002-640_adpp_is.mp4" controls></video>
                    <video src="abs/front/istockphoto-596353754-640_adpp_is.mp4" controls></video>
                    <video src="abs/front/istockphoto-663971370-640_adpp_is.mp4" controls></video>
                    <video src="abs/front/istockphoto-925654042-640_adpp_is.mp4" controls></video>
                    <video src="abs/front/istockphoto-925661952-640_adpp_is.mp4" controls></video>
                    <video src="abs/front/istockphoto-925688754-640_adpp_is.mp4" controls></video>`;
let middleVidoes = `  
                         <video src="abs/sides/istockphoto-1065605894-640_adpp_is.mp4" controls></video>
                    <video src="abs/sides/istockphoto-1312786657-640_adpp_is.mp4" controls></video>
                    <video src="abs/sides/istockphoto-1322118487-640_adpp_is.mp4" controls></video>
                    <video src="abs/sides/istockphoto-1389749311-640_adpp_is.mp4" controls></video>
                    <video src="abs/sides/istockphoto-1403921060-640_adpp_is.mp4" controls></video>
                    <video src="abs/sides/istockphoto-925411330-640_adpp_is.mp4" controls></video>
                    <video src="abs/sides/istockphoto-925665336-640_adpp_is.mp4" controls></video>
                    <video src="abs/sides/istockphoto-925673134-640_adpp_is.mp4" controls></video>`;



function Select(Title, vidoes, spa_n) {
    title.innerHTML = `<h1>${Title}<span>${spa_n}</span></h1>`;
    videosContainer.innerHTML = vidoes;
}
upper.onclick = (e) => {
    e.preventDefault();
    Select('Body', upperVidoes, 'SixPacks');
}
middle.onclick = (e) => {
    e.preventDefault();
    Select('Body', middleVidoes, 'Sides');
}

window.onload = () => {
    Select('Body', upperVidoes, '6Packs')
}