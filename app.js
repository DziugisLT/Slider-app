const range = document.querySelector('.range');
const thumb = document.querySelector('.thumb');
const track = document.querySelector('.track-inner');

const updateSlider = (value) => {
  thumb.style.left = `${value}%`;
  thumb.style.transform = `translate(-${value}%, -50%)`;
  track.style.width = `${value}%`;
};

range.addEventListener('input', function (e) {
  updateSlider(e.target.value);
});

updateSlider(50); // Init value
