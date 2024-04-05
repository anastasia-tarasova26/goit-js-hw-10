import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const myInput = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
startBtn.disabled = true;
const daysMonitor = document.querySelector('[data-days]');
const hoursMonitor = document.querySelector('[data-hours]');
const minuMonitor = document.querySelector('[data-minutes]');
const secMonitor = document.querySelector('[data-seconds]');

let userSelectedDate = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0].getTime();
    if (selectedDates[0] > Date.now()) {
      startBtn.disabled = false;
    } else {
      iziToast.error({
        color: 'red',
        message: 'Please choose a date in the future',
        position: 'topRight',
      });
    }
  },
};

const fp = flatpickr(myInput, options); // flatpickr

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const timerFoo = event => {
  startBtn.disabled = true;
  myInput.disabled = true;
  const intervalId = setInterval(() => {
    let ms = userSelectedDate - Date.now();
    if (ms <= 0) {
      clearInterval(intervalId);
      myInput.disabled = false;
      return;
    }
    const { days, hours, minutes, seconds } = convertMs(ms);
    daysMonitor.textContent = `${addLeadingZero(days)}`;
    hoursMonitor.textContent = `${addLeadingZero(hours)}`;
    minuMonitor.textContent = `${addLeadingZero(minutes)}`;
    secMonitor.textContent = `${addLeadingZero(seconds)}`;
  }, 1000);
};

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

startBtn.addEventListener('click', timerFoo);
