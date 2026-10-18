import { ambilProyek } from './api.js';
import { render, pasangFilter, aturMemuat, tampilkanGalat } from './dom.js';

async function muat() {
  aturMemuat(true);

  try {
    const daftarProyek = await ambilProyek();
    pasangFilter(daftarProyek);
    render(daftarProyek);
  } catch (galat) {
    tampilkanGalat(`Gagal memuat data: ${galat.message}`);
  } finally {
    aturMemuat(false);
  }
}

muat();