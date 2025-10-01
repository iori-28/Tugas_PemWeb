const container = document.querySelector(".container");
const content = document.getElementById("content");
const overlay = document.createElement("div");
overlay.className = "overlay";
document.body.appendChild(overlay);

// Flag untuk cek apakah Home bubble sudah ditambahkan
let homeVisible = false;

content.innerHTML = `
    <div class="card welcome">
      <h2>Rio Rasyha Syadzily<br>24416255201209</h2>
      <p>Ini adalah web latihan/tugas dari matkul Pemrogaman Web. Klik salah satu bubble lain untuk melihat isi didalam nya.</p>
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
          <h2>Selamat Datang!</h2>
          <p>Ini adalah tampilan awal personal web saya. Klik salah satu bubble lain untuk mulai eksplorasi.</p>
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
          <img src="" alt="gambar 1">
          <img src="" alt="gambar 2">
          <img src="" alt="gambar 3">
          <img src="" alt="gambar 4">
          <img src="" alt="gambar 5">
        </div>
      `;
      addHomeBubble();
    }

    else if (bubble.id === "bubble3") {
      content.innerHTML = `
        <h2>Kontak</h2>
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
          <a href="#" class="contact-bubble email">
            <i class="fas fa-envelope"></i>
          </a>
        </div>
      `;
      addHomeBubble();
    }

    else if (bubble.id === "bubble4") {
      content.innerHTML = `
      <div class="artikel">
        <h2>Artikel</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique tellus quis eros tincidunt, eget hendrerit metus semper. Nunc malesuada malesuada ex at consequat. Nulla eget lorem sodales, pharetra est sit amet, pretium ante. Nam eget felis id tortor scelerisque pulvinar sed nec libero. Nam at mollis velit. Phasellus tincidunt ipsum sit amet justo accumsan ullamcorper. Duis et molestie enim. Sed rhoncus nisi et neque interdum cursus id at augue.</p>
        <p>Quisque ut dolor aliquam, iaculis erat at, mattis dui. Sed vitae condimentum lectus. Curabitur semper odio at lectus ultricies, ut tincidunt ante fringilla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent non elementum odio. Quisque ornare semper malesuada. Donec porta posuere sagittis. Suspendisse vitae tempus ipsum. Vivamus ex arcu, facilisis vehicula metus id, semper eleifend lorem. Etiam tincidunt aliquam nisi, at congue erat egestas ut. Aenean sed porta magna, ut pharetra mauris.</p>
        <p>Integer justo leo, faucibus sed dignissim eget, molestie at est.Nulla facilisi. Pellentesque ullamcorper nunc in ligula volutpat condimentum. Sed commodo justo justo, vel lacinia ante molestie ac. Vivamus faucibus metus nec sagittis elementum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam aliquam orci et est volutpat sodales. Proin pharetra efficitur odio, a lacinia sem dapibus a. Etiam nisi mi, facilisis id ex cursus, luctus efficitur ligula. Nulla facilisi. Aenean hendrerit mauris in tortor suscipit mollis. Aenean in orci quis urna convallis laoreet sodales vulputate ligula.</p>
      </div>
        <p><strong>Contoh tabel:</strong></p>
        <table>
          <tr><th>Judul</th><th>Tahun</th></tr>
          <tr><td>Artikel A</td><td>2023</td></tr>
          <tr><td>Artikel B</td><td>2024</td></tr>
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
        <h2>Rio Rasyha Syadzily<br>24416255201209</h2>
        <p>Ini adalah web latihan/tugas dari matkul Pemrogaman Web. Klik salah satu bubble lain untuk melihat isi didalam nya.</p>
      `;

      // Hapus bubble Home saat balik ke Home
      homeBubble.remove();
      homeVisible = false;
    });

    container.prepend(homeBubble);
    homeVisible = true;
  }
}

const popup = document.createElement("div");
popup.className = "popup";
popup.innerHTML = `
  <h3>Email Saya</h3><br>
  <p>riorasyhasyadzily@gmail.com</p><br>
  <button id="closePopup">Tutup</button>
`;
document.body.appendChild(popup);

// Event klik di bubble email → munculin popup
document.addEventListener("click", (e) => {
  if (e.target.closest(".contact-bubble.email")) {
    e.preventDefault(); // supaya ga langsung buka mail app
    popup.style.display = "block";
    overlay.style.display = "block";
  }
});

// Event klik close → tutup popup
document.addEventListener("click", (e) => {
  if (e.target.id === "closePopup" || e.target.className === "overlay") {
    popup.style.display = "none";
    overlay.style.display = "none";
  }
});