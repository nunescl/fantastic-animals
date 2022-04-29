export default function initOperation() {
  const operation = document.querySelector('[data-week]');
  const daysWeek = operation.dataset.week.split(',').map(Number);
  const timeWeek = operation.dataset.time.split(',').map(Number);

  const dateNow = new Date();
  const dayNow = dateNow.getDay();
  const timeNow = dateNow.getHours();

  const openWeek = daysWeek.indexOf(dayNow) !== -1;

  const openTime = timeNow >= timeWeek[0] && timeNow < timeWeek[1];

  if (openWeek && openTime) {
    operation.classList.add('open');
  }
}
