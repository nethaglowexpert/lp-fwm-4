// Ambil elemen tombol "Get started"
var getStartedButton = document.getElementById("tonton-video");

// Ambil elemen video
var video = document.querySelector(".video-container iframe");

// Tambahkan event listener untuk saat tombol "Get started" diklik
getStartedButton.addEventListener("click", function () {
  // Ubah sumber video menjadi autoplay
  video.src = video.src + "?autoplay=1";
});
