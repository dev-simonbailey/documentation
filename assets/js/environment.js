function updateImageSources(isDev) {
    const images = document.querySelectorAll("img");
    images.forEach(img => {
      let src = img.getAttribute("src");
      if (isDev) {
        src = src.replace("/documentation/assets/img/", "/assets/img/");
      } else {
        src = src.replace("/assets/img/", "/documentation/assets/img/");
      }
      img.setAttribute("src", src);
    });
  }