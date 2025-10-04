const container = document.querySelector(".container");
const content = document.getElementById("content");

// Flag untuk cek apakah Home bubble sudah ditambahkan
let homeVisible = false;

content.innerHTML = `
    <div class="card welcome">
      <h2>Rio Rasyha Syadzily<br>24416255201209</h2>
      <p>Ini adalah web latihan/tugas dari matkul Pemrogaman Web. Klik salah satu bubble lain untuk melihat isi didalam nya.</p>
      <img src="Poto_tugas.jpg" alt="Poto Tugas" class="welcome-img">
    </div>
`;


document.querySelectorAll(".bubble").forEach(bubble => {
  bubble.addEventListener("click", () => {
    // Reset active state semua bubble
    document.querySelectorAll(".bubble").forEach(b => b.classList.remove("active"));
    bubble.classList.add("active");

    // Cek bubble yang diklik
    if (bubble.id === "bubble1") {
      // Kalau klik Home -> hapus bubble Home lagi
      content.innerHTML = `
        <div class="card welcome">
          <h2>Rio Rasyha Syadzily<br>24416255201209</h2>
          <p>Ini adalah web latihan/tugas dari matkul Pemrogaman Web. Klik salah satu bubble lain untuk melihat isi didalam nya.</p>
          <img src="Poto_tugas.jpg" alt="Poto Tugas" class="welcome-img">
        </div>
      `;

      if (homeVisible) {
        const homeBubble = document.getElementById("bubble1");
        homeBubble.remove();
        homeVisible = false;
      }
    }

    else if (bubble.id === "bubble2") {
      content.innerHTML = `
        <h2>Galeri</h2>
        <p>Koleksi foto & dokumentasi saya:</p>
        <div class="gallery">
          <div class="gallery-item">
            <img src="https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/78/2025/04/20/Monumen-IKN-Jadi-Sorotan-Lorem-Ipsum-Nongol-di-Tugu-Titik-Nol-Kini-Ditutup-3237356032.jpg" alt="gambar artikel 1">
            <p class="caption">Totem Lorem Ipsum</p>
          </div>

          <div class="gallery-item">
            <img src="code_html.png" alt="gambar kodingan html">
            <p class="caption">Kodingan HTML</p>
          </div>

          <div class="gallery-item">
            <img src="code_js.png" alt="gambar kodingan js">
            <p class="caption">Kodingan JavaScript</p>
          </div>
          
          <div class="gallery-item">
            <img src="code_css.png" alt="gambar kodingan css">
            <p class="caption">Kodingan CSS</p>
          </div>
          
          <div class="gallery-item">
            <img src="Screenshot_hoki.png" alt="gambar hoki">
            <p class="caption">Hoki Gacha</p>
          </div>
          
          <div class="gallery-item">
            <img src="Screenshot_hoki2.png" alt="gambar hoki2">
            <p class="caption">Hoki Gacha 2</p>
          </div>
        </div>
      `;
      addHomeBubble();
    }

    else if (bubble.id === "bubble3") {
      content.innerHTML = `
        <h2>Beberapa akun medsos saya</h2>
        <div class="contact-bubbles">
          <a href="https://github.com/iori-28" target="_blank" class="contact-bubble">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://www.instagram.com/__aliusame" target="_blank" class="contact-bubble">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/rio-rasyha-syadzily" target="_blank" class="contact-bubble">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="https://www.youtube.com/@RioRasyhaS_28" target="_blank" class="contact-bubble">
            <i class="fab fa-youtube"></i>
          </a>
        </div>
      `;
      addHomeBubble();
    }

    else if (bubble.id === "bubble4") {
      content.innerHTML = `
      <div class="artikel">
        <h2>Totem di IKN</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique tellus quis eros tincidunt, eget hendrerit metus semper. Nunc malesuada malesuada ex at consequat. Nulla eget lorem sodales, pharetra est sit amet, pretium ante. Nam eget felis id tortor scelerisque pulvinar sed nec libero. Nam at mollis velit. Phasellus tincidunt ipsum sit amet justo accumsan ullamcorper. Duis et molestie enim. Sed rhoncus nisi et neque interdum cursus id at augue.</p>
        <p>Quisque ut dolor aliquam, iaculis erat at, mattis dui. Sed vitae condimentum lectus. Curabitur semper odio at lectus ultricies, ut tincidunt ante fringilla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent non elementum odio. Quisque ornare semper malesuada. Donec porta posuere sagittis. Suspendisse vitae tempus ipsum. Vivamus ex arcu, facilisis vehicula metus id, semper eleifend lorem. Etiam tincidunt aliquam nisi, at congue erat egestas ut. Aenean sed porta magna, ut pharetra mauris.</p>
        <p>Integer justo leo, faucibus sed dignissim eget, molestie at est.Nulla facilisi. Pellentesque ullamcorper nunc in ligula volutpat condimentum. Sed commodo justo justo, vel lacinia ante molestie ac. Vivamus faucibus metus nec sagittis elementum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam aliquam orci et est volutpat sodales. Proin pharetra efficitur odio, a lacinia sem dapibus a. Etiam nisi mi, facilisis id ex cursus, luctus efficitur ligula. Nulla facilisi. Aenean hendrerit mauris in tortor suscipit mollis. Aenean in orci quis urna convallis laoreet sodales vulputate ligula.</p>
      </div>
        <p><strong>Kurun waktu totem sebelum ditutup:</strong></p>
        <table>
          <tr><th>Waktu</th><th>Keterangan</th></tr>
          <tr><td>Januari 2025</td><td>video di TikTok oleh akun @hendrigunawan776883373.</td></tr>
          <tr><td>Kamis, 17 April 2025</td><td>akun X @jeJAKAki.</td></tr>
          <tr><td>Sabtu, 19 April 2025</td><td>Otorita IKN secara resmi menutup tugu tersebut dengan terpal biru</td></tr>
        </table>
      `;
      addHomeBubble();
    }

    // Tambahkan animasi fade-in ke konten baru
    content.classList.add("fade-in");
    setTimeout(() => content.classList.remove("fade-in"), 400);
  });
});

// Fungsi untuk menambahkan bubble Home kalau belum ada
function addHomeBubble() {
  if (!homeVisible) {
    const homeBubble = document.createElement("div");
    homeBubble.className = "bubble new";
    homeBubble.id = "bubble1";
    homeBubble.textContent = "Home";

    // Tambahkan listener biar klik Home berfungsi juga
    homeBubble.addEventListener("click", () => {
      document.querySelectorAll(".bubble").forEach(b => b.classList.remove("active"));
      homeBubble.classList.add("active");

      content.innerHTML = `
        <div class="card welcome">
          <h2>Rio Rasyha Syadzily<br>24416255201209</h2>
          <p>Ini adalah web latihan/tugas dari matkul Pemrogaman Web. Klik salah satu bubble lain untuk melihat isi didalam nya.</p>
          <img src="Poto_tugas.jpg" alt="Poto Tugas" class="welcome-img">
        </div>
      `;

      // Hapus bubble Home saat balik ke Home
      homeBubble.remove();
      homeVisible = false;
    });

    container.prepend(homeBubble);
    homeVisible = true;
  }
}

// Klik bubble → langsung jadi sidebar
$(".bubble").on("click", function () {
  $(".container").addClass("fixed");
});

// Scroll → atur posisi bubble
$(window).on("scroll", function () {
  if ($(this).scrollTop() > 150) {
    $(".container").addClass("fixed");
  } else {
    $(".container").removeClass("fixed");
  }
});