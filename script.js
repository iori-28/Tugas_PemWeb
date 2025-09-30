document.querySelectorAll(".bubble").forEach(bubble => {
    bubble.addEventListener("click", () => {
        const content = document.getElementById("content");

        if (bubble.id === "bubble1") {
            content.innerHTML = `
        <h2>Home</h2>
        <p>Selamat datang di personal web saya! Klik bubble lain untuk eksplorasi.</p>
      `;
        }

        else if (bubble.id === "bubble2") {
            content.innerHTML = `
        <h2>Galeri</h2>
        <img src="https://via.placeholder.com/300x200" alt="contoh gambar" style="border-radius:8px; margin-top:10px;">
        <p style="margin-top:10px;">Contoh screenshot codingan / foto dokumentasi.</p>
      `;
        }

        else if (bubble.id === "bubble3") {
            content.innerHTML = `
        <h2>Kontak</h2>
        <div class="contact-bubbles">
          <div class="contact-bubble">
            <a href="https://github.com/iori-28" target="_blank"><i class="fab fa-github"></i></a>
          </div>
          <div class="contact-bubble">
            <a href="https://www.instagram.com/__aliusame?igsh=MXkxMXA1ZWEwc29wZA==" target="_blank"><i class="fab fa-instagram"></i></a>
          </div>
          <div class="contact-bubble">
            <a href="https://www.linkedin.com/in/rio-rasyha-syadzily-9418a536b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><i class="fab fa-linkedin"></i></a>
          </div>
          <div class="contact-bubble">
            <a href="riorasyhasyadzily@gmail.com"><i class="fas fa-envelope"></i></a>
          </div>
        </div>
      `;
        }

        else if (bubble.id === "bubble4") {
            content.innerHTML = `
        <h2>Artikel</h2>
        <p>Ini adalah artikel utama. Kamu bisa menambahkan teks panjang, tabel, atau gambar di sini.</p>
        <p><strong>Contoh tabel:</strong></p>
        <table border="1" cellpadding="8" style="margin:auto; border-collapse: collapse;">
          <tr><th>Judul</th><th>Tahun</th></tr>
          <tr><td>Artikel A</td><td>2023</td></tr>
          <tr><td>Artikel B</td><td>2024</td></tr>
        </table>
      `;
        }
    });
});
