const lightBulb = document.getElementById('light-bulb');
const onBtn = document.getElementById('on');
const offBtn = document.getElementById('off');
const toggleBtn = document.getElementById('toggle');
const endBtn = document.getElementById('end');

onBtn.addEventListener('click', lightOn);
offBtn.addEventListener('click', lightOff);
toggleBtn.addEventListener('click', lightToggle);
endBtn.addEventListener('click', lightEnd);

function lightOn() {
    lightBulb.classList.add('light');
    lightBulb.classList.remove('dark');
}

function lightOff() {
    lightBulb.classList.add('dark');
    lightBulb.classList.remove('light');
}

function lightToggle() {
    lightBulb.classList.toggle('light');
    lightBulb.classList.toggle('dark');
}

function lightEnd() {
    lightBulb.classList.add('hidden');
    onBtn.classList.add('disabled');
    offBtn.classList.add('disabled');
    toggleBtn.classList.add('disabled');
    endBtn.classList.add('disabled');
}