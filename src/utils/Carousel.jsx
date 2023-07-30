const homeCarousel = {
    type: "loop",
    perPage: 1,
    perMove: 1,
    autoplay: true,
    interval: 5000,
    pauseOnHover: false,
    pauseOnFocus: false,
    arrows: true,
    pagination: false,
    drag: true,
  }

  const serviceCarousel = {
    type: "loop",
    perPage: 4,
    perMove: 1,
    autoplay: true,
    interval: 3000,
    pauseOnHover: true,
    pauseOnFocus: false,
    arrows: false,
    pagination: true,
    drag: true,
  }

export { homeCarousel, serviceCarousel }