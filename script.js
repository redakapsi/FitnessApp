let turn = ''
const workout = document.getElementById('workout');
workout.onclick = (e) => {
    e.preventDefault();
    document.querySelector('.workouts').scrollIntoView({ behavior: 'smooth' });
    turn = 'workout';
    if (turn === 'workout') {
        workout.style.color = 'red';
        home.style.color = 'white';
        stat.style.color = 'white';
        muscle.style.color = 'white';
        about.style.color = 'white';
    }
};
const getStarted = document.getElementById('getStarted');
const dialog = document.getElementById('dialog');
getStarted.onclick = () => { dialog.showModal(); };
const home = document.getElementById('home');
home.onclick = () => { scrollTo({ top: 0, behavior: 'smooth' }); turn = 'home'; home.style.color = 'red'; workout.style.color = 'white'; stat.style.color = 'white'; muscle.style.color = 'white'; about.style.color = 'white'; };
const stat = document.getElementById('stat');
stat.onclick = () => { document.querySelector('.yourStats').scrollIntoView({ behavior: 'smooth' }); turn = 'stat'; workout.style.color = 'white'; home.style.color = 'white'; stat.style.color = 'red'; muscle.style.color = 'white'; about.style.color = 'white'; };
const muscle = document.getElementById('muscle');
muscle.onclick = () => { document.querySelector('.muscles').scrollIntoView({ behavior: 'smooth' }); turn = 'muscle'; muscle.style.color = 'red'; workout.style.color = 'white'; home.style.color = 'white'; stat.style.color = 'white'; about.style.color = 'white'; };
const about = document.getElementById('about');
about.onclick = () => { document.querySelector('.about').scrollIntoView({ behavior: 'smooth' }); turn = 'about'; about.style.color = 'red'; muscle.style.color = 'white'; workout.style.color = 'white'; home.style.color = 'white'; stat.style.color = 'white'; };
document.querySelector('.join-btn').onclick = () => { window.scrollTo({ top: 0, behavior: 'smooth' }); };
const cancel = document.getElementById('cancel');
cancel.onclick = () => { dialog.close(); }
const hieght = document.getElementById('hieght');
const weight = document.getElementById('weight');
const BodyFat = document.getElementById('BodyFat');
const toheight = document.getElementById('toheight');
const toweight = document.getElementById('toweight');
const tofat = document.getElementById('tofat');
const SubmitDate = document.getElementById('SubmitDate');
const title = document.getElementById('title');
const name = document.getElementById('name');
SubmitDate.onclick = () => {
    if (name.value != '') {
        toheight.innerHTML = hieght.value + 'Cm';
        toweight.innerHTML = weight.value + 'Kg';
        tofat.innerHTML = BodyFat.value + '%';
        title.innerHTML = 'Welcome Mr ' + name.value;
        SubmitDate.textContent = 'Update Info';
        getStarted.textContent = 'Update Info';
        localStorage.setItem('height', hieght.value);
        localStorage.setItem('weight', weight.value);
        localStorage.setItem('bodyfat', BodyFat.value);
        localStorage.setItem('name', name.value);
        dialog.close();
    }
}
window.onload = () => {
    const savedname = localStorage.getItem('name');
    const savedweight = localStorage.getItem('weight');
    const savedfat = localStorage.getItem('bodyfat');
    const savedheight = localStorage.getItem('height');
    if (savedname) { name.value = savedname; title.innerHTML = 'Welcome Mr ' + savedname; SubmitDate.textContent = 'Update Info'; getStarted.textContent = 'Update Info'; }
    if (savedheight) { hieght.value = savedheight; toheight.innerHTML = savedheight + 'Cm'; }
    if (savedweight) { weight.value = savedweight; toweight.innerHTML = savedweight + 'Kg'; }
    if (savedfat) { BodyFat.value = savedfat; tofat.innerHTML = savedfat + '%'; }
    loadGoals();
}
const goal = document.getElementById('Goal');
const gymCheckbox = document.getElementById('gymW');
const caloInput = document.getElementById('calo');
const sleepInput = document.getElementById('sleep');
const stbtn = document.getElementById('stbtn');
const dgoal = document.getElementById('dgoal');
goal.onclick = () => { dgoal.showModal(); }
const wbarDiv = document.getElementById('wbar');
const caloDiv = document.getElementById('calop');
const sleepDiv = document.getElementById('sleepp');
const wbarText = document.getElementById('wiar');
const caloText = document.getElementById('calobar');
const sleepText = document.getElementById('sleepbar');
function updateBars() {
    let gymProgress = gymCheckbox.checked ? 100 : 0;
    let caloProgress = caloInput.value / 3000 * 100;
    let sleepProgress = sleepInput.value / 9 * 100;
    wbarDiv.style.width = gymProgress + '%';
    caloDiv.style.width = caloProgress + '%';
    sleepDiv.style.width = sleepProgress + '%';
    wbarDiv.style.border = `2px solid hsl(${gymProgress * 1.2},80%,50%)`;
    caloDiv.style.border = `2px solid hsl(${caloProgress * 1.2},80%,50%)`;
    sleepDiv.style.border = `2px solid hsl(${sleepProgress * 12},80%,50%)`;
}
stbtn.onclick = () => {
    wbarText.textContent = gymCheckbox.checked ? "✅" : "[❌]";
    caloText.textContent = caloInput.value;
    sleepText.textContent = sleepInput.value + "/9";
    localStorage.setItem('gymChecked', gymCheckbox.checked);
    localStorage.setItem('caloValue', caloInput.value);
    localStorage.setItem('sleepValue', sleepInput.value);
    localStorage.setItem('goalTime', new Date().getTime());
    updateBars();
    dgoal.close();
}
function loadGoals() {
    const savedTime = localStorage.getItem('goalTime');
    const now = new Date().getTime();
    if (savedTime && now - savedTime < 24 * 60 * 60 * 1000) {
        gymCheckbox.checked = localStorage.getItem('gymChecked') === 'true';
        wbarText.textContent = gymCheckbox.checked ? "✅" : "[❌]";
        caloInput.value = localStorage.getItem('caloValue') || 0;
        caloText.textContent = caloInput.value;
        sleepInput.value = localStorage.getItem('sleepValue') || 0;
        sleepText.textContent = sleepInput.value + "/9";
    } else {
        gymCheckbox.checked = false;
        wbarText.textContent = "[❌]";
        caloInput.value = 0;
        caloText.textContent = "0";
        sleepInput.value = 0;
        sleepText.textContent = "0/9";
        localStorage.removeItem('goalTime');
        localStorage.removeItem('gymChecked');
        localStorage.removeItem('caloValue');
        localStorage.removeItem('sleepValue');
    }
    updateBars();
}
setInterval(loadGoals, 60 * 1000);
