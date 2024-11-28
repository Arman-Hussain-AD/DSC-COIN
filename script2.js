

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };
  
  ScrollReveal().reveal(".containerHero__left h1", {
    ...scrollRevealOption,
  });
  ScrollReveal().reveal(".containerHero__left .containerHero__btnHero", {
    ...scrollRevealOption,
    delay: 500,
  });
  
  ScrollReveal().reveal(".containerHero__right h4", {
    ...scrollRevealOption,
    delay: 2000,
  });
  ScrollReveal().reveal(".containerHero__right h2", {
    ...scrollRevealOption,
    delay: 2500,
  });
  ScrollReveal().reveal(".containerHero__right h3", {
    ...scrollRevealOption,
    delay: 3000,
  });
  ScrollReveal().reveal(".containerHero__right p", {
    ...scrollRevealOption,
    delay: 3500,
  });
  
  ScrollReveal().reveal(".containerHero__right .tent-1", {
    duration: 1000,
    delay: 4000,
  });
  ScrollReveal().reveal(".containerHero__right .tent-2", {
    duration: 1000,
    delay: 4500,
  });
  
  ScrollReveal().reveal(".locationHero", {
    ...scrollRevealOption,
    origin: "left",
    delay: 5000,
  });
  
  ScrollReveal().reveal(".socials span", {
    ...scrollRevealOption,
    origin: "top",
    delay: 5500,
    interval: 500,
  });
  