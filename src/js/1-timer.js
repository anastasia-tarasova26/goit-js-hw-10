import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import izitoast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const startButton = document.querySelector('button[data-start]');
const inputArea = document.querySelector('#datetime-picker');
const days = document.querySelector('span[data-days]');
const hours = document.querySelector('span[data-hours]');
const minutes = document.querySelector('span[data-minutes]');
const seconds = document.querySelector('span[data-seconds]');

const SECOND = 1000;

let userSelectedDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDates = selectedDates[0];
    userSelectedDate = selectedDates;
    if (new Date().getTime() < selectedDates.getTime()) {
      startButton.disabled = false;
    } else {
      startButton.disabled = true;
      izitoast.show({
        message: 'Please choose a date in the future',
        messageColor: 'white',
        backgroundColor: '#e34234',
        position: 'topRight',
      });
    }
  },
};

flatpickr('#datetime-picker', options);

startButton.addEventListener('click', e => {
  timerCounter();
  startButton.disabled = true;
  startButton.style.cursor = 'not-allowed';
  inputArea.disabled = true;
  inputArea.style.cursor = 'not-allowed';
});

function timerCounter() {
  const timer = setInterval(() => {
    let currentTime = new Date();
    let timeDifference = userSelectedDate.getTime() - currentTime.getTime();

    let result = convertMs(timeDifference);

    days.textContent = result.days.toString().padStart(2, '0');
    hours.textContent = result.hours.toString().padStart(2, '0');
    minutes.textContent = result.minutes.toString().padStart(2, '0');
    seconds.textContent = result.seconds.toString().padStart(2, '0');

    if (timeDifference <= 1000) {
      clearInterval(timer);
    }
  }, SECOND);
}

function convertMs(ms) {
  const minute = SECOND * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / SECOND);

  return { days, hours, minutes, seconds };
}
