import { profil, buatPerkenalan, formatKeahlian, saring } from './data.js';

const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#pesan-kosong");
const elMemuat = document.querySelector("#status-memuat");
const elGalat = document.querySelector("#pesan-galat");

export function inisialisasiProfil() {
  const elNama = document.querySelector("#nama-profil");
  const elPeran = document.querySelector("#peran-profil");
  const elKeahlian = document.querySelector("#keahlian-profil");

  if (elNama) elNama.textContent = profil.nama;
  if (elPeran) elPeran.textContent = buatPerkenalan(profil);
  if (elKeahlian) elKeahlian.textContent = formatKeahlian(profil.keahlian);
}

export function buatKartu(proyek, favorit) {
  const li = document.createElement("li");
  li.className = "kartu";
  
  const spanTeks = document.createElement("span");
  spanTeks.textContent = `${proyek.judul} (${proyek.kategori})`;
  
  const tombol = document.createElement("button");
  tombol.className = "favorit";
  tombol.dataset.id = proyek.id;
  tombol.textContent = favorit.includes(proyek.id) ? "★" : "☆";

  li.append(spanTeks, tombol);
  return li;
}

export function tandaiTombolAktif(kategoriAktif) {
  const tombols = document.querySelectorAll(".btn-kategori");
  tombols.forEach((tombol) => {
    if (tombol.dataset.kategori === kategoriAktif) {
      tombol.classList.add("aktif");
    } else {
      tombol.classList.remove("aktif");
    }
  });
}

export function render(state) {
  if (!wadah) return;
  
  wadah.textContent = "";

  tandaiTombolAktif(state.kategoriAktif);

  const tampil = saring(state.daftarProyek, state.kategoriAktif);

  if (tampil.length === 0) {
    if (kosong) kosong.hidden = false;
    return;
  }
  if (kosong) kosong.hidden = true;

  tampil.forEach((item) => {
    wadah.append(buatKartu(item, state.favorit));
  });
}

export function aturMemuat(status) {
  if (elMemuat) elMemuat.hidden = !status;
}

export function tampilkanGalat(pesan) {
  if (elGalat) {
    elGalat.textContent = pesan;
    elGalat.hidden = !pesan;
  }
}