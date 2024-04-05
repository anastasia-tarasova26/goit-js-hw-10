import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const delayForm = document.querySelector('.form');
delayForm.addEventListener('submit', event => {
  event.preventDefault();
  const inputData = delayForm.elements.delay.value;
  const inputState = delayForm.elements.state.value;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (inputState === 'fulfilled') {
        resolve(`✅ Fulfilled promise in ${inputData}ms          `);
      } else {
        reject(`❌ Rejected promise in ${inputData}ms          `);
      }
    }, inputData);
  });
  promise
    .then(value => {
      iziToast.show({
        color: 'green',
        message: value,
        position: 'topRight',
      });
    })
    .catch(error => {
      iziToast.show({
        color: 'red',
        message: error,
        position: 'topRight',
      });
    });
});
