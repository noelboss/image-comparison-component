const imageComparisons = document.querySelectorAll('.image-comparison');

imageComparisons.forEach(imageComparison => {
  const slider = imageComparison.querySelector('.slider');
  const beforeImage = imageComparison.querySelector('.before');
  const sliderLine = imageComparison.querySelector('.slider-line');

  slider.addEventListener('input', () => {
    const value = slider.value;
    beforeImage.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
    sliderLine.style.left = `${value}%`;
  });
});
