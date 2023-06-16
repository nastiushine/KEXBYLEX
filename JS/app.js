document.querySelectorAll('.slider').forEach((n, i) => {
    window[`slider${i + 1}`] = new Swiper(n, {
        freeMode: true,
        centeredSlides: true,
        direction: 'vertical',
        mousewheel: true,
        slidesPerView: 1.75,
        slidesOffsetBefore: -125
    })
})
bindSwipers(slider1, slider2, slider3, slider4)


function openFullscreen(element) {
    const imgUrl = element.querySelector('.slider__img').style.backgroundImage;
    const imgSrc = imgUrl.slice(5, -2); 
    const modal = document.getElementById('zoomphoto');
    const modalImg = modal.querySelector('.modal-content');
    modalImg.src = imgSrc;
    modal.style.display = 'block';
  }

  function closeModal() {
    const modal = document.getElementById('zoomphoto');
    modal.style.display = 'none';
  }

  function openModal(imageSrc) {
    var modal = document.getElementById("zoomphoto");
    var modalImg = document.getElementById("zoomedImg");
  
    modal.style.display = "block";
    modalImg.src = imageSrc;
  }
  

