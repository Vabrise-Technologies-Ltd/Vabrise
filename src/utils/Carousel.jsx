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
    breakpoints: {
      340: {
          perPage: 1,
          perMove: 1,
          },
      480: {
        perPage: 1,
        perMove: 1,
        },   
      640: {
        perPage: 2,
        perMove: 1,
      },
      720: {
        perPage: 3,
        perMove: 1,
      },
      1024: {
        perPage: 3,
        perMove: 2,
      },
    }
  }

export { homeCarousel, serviceCarousel }