const upper = document.getElementById('upper');
const middle = document.getElementById('middle');
const lower = document.getElementById('lower');
const videosContainer = document.querySelector('.videos');
const title = document.querySelector('.title');

// ===deo Lists 
const upperVideos = `
  <video src="ChestVidoes/UpperChestVidoes/E1.mp4" controls></video>
  <video src="ChestVidoes/UpperChestVidoes/istockphoto-1304726195-640_adpp_is.mp4" controls></video>
  <video src="ChestVidoes/UpperChestVidoes/istockphoto-1525546544-640_adpp_is.mp4" controls></video>
  <video src="ChestVidoes/UpperChestVidoes/istockphoto-2119318092-640_adpp_is.mp4" controls></video>
  <video src="ChestVidoes/UpperChestVidoes/istockphoto-2159757899-640_adpp_is.mp4" controls></video>
  <video src="ChestVidoes/UpperChestVidoes/istockphoto-2202738098-640_adpp_is.mp4" controls></video>
  <video src="ChestVidoes/UpperChestVidoes/istockphoto-525560140-640_adpp_is.mp4" controls></video>
  <video src="ChestVidoes/UpperChestVidoes/istockphoto-636092466-640_adpp_is.mp4" controls></video>
`;
const middleVidoes =`<video src="ChestVidoes/MiddleChestVidoes/istockphoto-1168957420-640_adpp_is.mp4" controls></video>
            <video src="ChestVidoes/MiddleChestVidoes/istockphoto-1208010401-640_adpp_is.mp4" controls></video>
            <video src="ChestVidoes/MiddleChestVidoes/istockphoto-1254800953-640_adpp_is.mp4" controls></video>
            <video src="ChestVidoes/MiddleChestVidoes/istockphoto-1269979788-640_adpp_is.mp4" controls></video>
            <video src="ChestVidoes/MiddleChestVidoes/istockphoto-1354434420-640_adpp_is.mp4" controls></video>
            <video src="ChestVidoes/MiddleChestVidoes/istockphoto-1396639937-640_adpp_is.mp4" controls></video>
            <video src="ChestVidoes/MiddleChestVidoes/istockphoto-1470734399-640_adpp_is.mp4" controls></video>
            <video src="ChestVidoes/MiddleChestVidoes/istockphoto-2197270234-640_adpp_is.mp4" controls></video>
            <video src="ChestVidoes/MiddleChestVidoes/istockphoto-2226353763-640_adpp_is.mp4" controls></video>
            <video src="ChestVidoes/MiddleChestVidoes/istockphoto-658631678-640_adpp_is.mp4" controls></video>
            <video src="ChestVidoes/MiddleChestVidoes/istockphoto-882273110-640_adpp_is.mp4" controls></video>
            <video src="ChestVidoes/MiddleChestVidoes/istockphoto-960054794-640_adpp_is.mp4" controls></video>`;
const lowervidoes = ` <video src="ChestVidoes/LowerChestVidoes/istockphoto-1127175153-640_adpp_is.mp4" controls></video>
      <video src="ChestVidoes/LowerChestVidoes/istockphoto-1207999902-640_adpp_is.mp4" controls></video>
      <video src="ChestVidoes/LowerChestVidoes/istockphoto-1208134349-640_adpp_is.mp4" controls></video>
      <video src="ChestVidoes/LowerChestVidoes/istockphoto-1306099215-640_adpp_is.mp4" controls></video>
      <video src="ChestVidoes/LowerChestVidoes/istockphoto-2152534137-640_adpp_is.mp4" controls></video>
      <video src="ChestVidoes/LowerChestVidoes/istockphoto-2152534137-640_adpp_is.mp4" controls></video>
      <video src="ChestVidoes/LowerChestVidoes/istockphoto-2187331701-640_adpp_is.mp4" controls></video>
      `;
function Select(titl_e,videoH,spa_n)
{
    title.innerHTML = `<h1>${titl_e}<span>${spa_n}</span></h1> `
    videosContainer.innerHTML = videoH;
}
upper.onclick = (e)=>{
    e.preventDefault();
    Select('upper',upperVideos,'Chest');
}

middle.onclick = (e)=>{
    e.preventDefault();
    Select('middle',middleVidoes,'Chest');
}
lower.onclick = (e)=>{
    e.preventDefault();
    Select('lower',lowervidoes,'Chest')
}
window.onload = ()=>{
    Select('Upper',upperVideos,'Chest');
}