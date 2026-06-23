const navToggle = document.getElementById("navToggle")
const navLinks = document.getElementById('navLinks')
const btn = document.querySelector(".btn")


// toggle navigation

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active')
    navLinks.classList.toggle('active')
    
      if (navLinks.classList.contains("active")) {
    btn.style.display = "none";
  } else {
    btn.style.display = "block";
  }
})

// close navitems when clicked
document.querySelectorAll('.nav-links a').forEach(link =>  {
    link.addEventListener("click", () => {
        navToggle.classList.remove('active')
        navLinks.classList.remove('active')
    })
})



//slider section

document.addEventListener("DOMContentLoaded", () => {

  const slides = document.querySelectorAll(".slide");
  const next = document.querySelector(".next");
  const prev = document.querySelector(".prev");

  let index = 0;

  function showSlide(i) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[i].classList.add("active");
  }

  next.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    showSlide(index);
  });

  prev.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  });

});

//works item

const buttons = document.querySelectorAll(".filter-btn");
const videos = document.querySelectorAll(".video-grid video");

function filterVideos(filter){
  videos.forEach(video => {
    if (filter === "all" || video.classList.contains(filter)){
      video.classList.remove("hide");
    }
    else {
      video.classList.add("hide");
    }
  });
}

buttons.forEach(btn => {
  btn.addEventListener("click", () =>{
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");
    filterVideos(filter);
  });
});
filterVideos("youtube");