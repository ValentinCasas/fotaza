
var splide = new Splide('.splide', {
    height: '10rem',
    focus: 'start',
    gap: '1rem',
    autoWidth: true,
});
splide.mount();
splide.Components.Pagination.destroy();





var splide2 = new Splide("#main-slider", {
    width: 600,
    height: 540,
    pagination: false,
    cover: true,
    lazyload: true
  });

  var thumbnails = document.getElementsByClassName("thumbnail");
  var current;

  for (var i = 0; i < thumbnails.length; i++) {
    initThumbnail(thumbnails[i], i);
  }

  function initThumbnail(thumbnail, index) {
    thumbnail.addEventListener("click", function () {
        splide2.go(index);
    });
  }

  splide2.on("mounted move", function () {
    var thumbnail = thumbnails[splide2.index];

    if (thumbnail) {
      if (current) {
        current.classList.remove("is-active");
      }

      thumbnail.classList.add("is-active");
      current = thumbnail;
    }
  });

  splide2.mount();