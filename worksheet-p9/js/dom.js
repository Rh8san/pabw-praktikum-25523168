import { daftarGame } from "./app.js";

const wadahProyek = document.querySelector("#daftar");
const barisFilter = document.querySelector("#filter");
const pesanKosong = document.querySelector("#pesan-kosong");

function buatKartu(game) {
  const li = document.createElement("li");
  li.className = "kartu";

  li.textContent = `${game.judul} - ${game.rekomendasiUntuk}`;

  return li;
}

function render(daftar) {
  wadahProyek.textContent = "";

  if (daftar.length === 0) {
    if (pesanKosong) pesanKosong.hidden = false;
    return;
  }

  if (pesanKosong) pesanKosong.hidden = true;

  daftar.forEach((game) => {
    wadahProyek.append(buatKartu(game));
  });
}

if (barisFilter) {
  barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (!tombol) return;

    document.querySelectorAll("#filter button").forEach((btn) => {
      btn.classList.toggle("aktif", btn === tombol);
    });

    const kategori = tombol.dataset.kategori;

    const hasilFilter = daftarGame.filter((game) => {
      if (kategori === "semua") return true;
      return game.rekomendasiUntuk === kategori;
    });

    render(hasilFilter);
  });
}

render(daftarGame);

const formKontak = document.querySelector("#form-kontak");

if (formKontak) {
  formKontak.addEventListener("submit", (event) => {
    event.preventDefault();

    const namaInput = formKontak.querySelector("[name='nama']");
    const pesanInput = formKontak.querySelector("[name='pesan']");

    let sah = true;

    if (namaInput && namaInput.value.trim() === "") {
      namaInput.setAttribute("aria-invalid", "true");
      sah = false;
    } else if (namaInput) {
      namaInput.removeAttribute("aria-invalid");
    }

    if (pesanInput && pesanInput.value.trim() === "") {
      pesanInput.setAttribute("aria-invalid", "true");
      sah = false;
    } else if (pesanInput) {
      pesanInput.removeAttribute("aria-invalid");
    }

    if (sah) {
      alert("Pesan berhasil dikirim!");
      formKontak.reset();
    }
  });
}