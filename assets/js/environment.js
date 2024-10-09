function updateImageSources(isDev) {
    const images = document.querySelectorAll("img");
    images.forEach(img => {
      let src = img.getAttribute("src");
      console.log(src);
      if (isDev) {
        src = src.replace("/documentation/assets/img/", "/assets/img/");
      }
      img.setAttribute("src", src);
    });
  }