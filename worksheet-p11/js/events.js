import { pilihKategori, tambahFavorit, aturUlang } from './state.js';

export function pasangPendengar() {
  const wadahFilter = document.querySelector("#filter");
  if (wadahFilter) {
    wadahFilter.addEventListener("click", (event) => {
      const tombol = event.target.closest("button[data-kategori]");
      if (!tombol) return;

      const kategori = tombol.dataset.kategori;
      pilihKategori(kategori);
    });
  }

  const wadahDaftar = document.querySelector("#daftar");
  if (wadahDaftar) {
    wadahDaftar.addEventListener("click", (event) => {
      const tombol = event.target.closest(".favorit");
      if (!tombol) return;
      tambahFavorit(Number(tombol.dataset.id));
    });
  }

  const btnAturUlang = document.querySelector("#atur-ulang");
  if (btnAturUlang) {
    btnAturUlang.addEventListener("click", () => {
      aturUlang();
    });
  }
}