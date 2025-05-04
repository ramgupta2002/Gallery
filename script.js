document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".img-gallery img");
    const fullImgBox = document.getElementById("fullImgBox");
    const fullImg = document.getElementById("fullImg");
    const closeBtn = document.getElementById("closeBtn");
  
    images.forEach((img) => {
      img.addEventListener("click", () => {
        openFullImg(img.src);
      });
    });
  
    closeBtn.addEventListener("click", closeFullImg);
  
    function openFullImg(src) {
      fullImg.src = src;
      fullImgBox.style.display = "flex";
    }
  
    function closeFullImg() {
      fullImgBox.style.display = "none";
    }
  });
  document.addEventListener("DOMContentLoaded", () => {
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");
  
    tabButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const tabId = btn.getAttribute("data-tab");
        showTab(tabId);
      });
    });
  
    function showTab(tabId) {
      tabButtons.forEach((btn) => {
        btn.classList.remove("active");
      });
      tabContents.forEach((content) => {
        content.classList.remove("active");
      });
  
      document
        .querySelector(`.tab-btn[data-tab="${tabId}"]`)
        .classList.add("active");
      document.getElementById(tabId).classList.add("active");
    }
  
    // Show the first tab by default
    showTab("tab1");
  });
  