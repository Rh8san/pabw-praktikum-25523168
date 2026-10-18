const wadahDaftar = document.querySelector('#daftar');
const elKosong = document.querySelector('#empty');
const elMuat = document.querySelector('#loading');
const elGalat = document.querySelector('#error');

export function aturMemuat(sedangMemuat) {
  if (elMuat) elMuat.hidden = !sedangMemuat;
}

export function tampilkanGalat(pesan) {
  if (elGalat) {
    elGalat.textContent = pesan;
    elGalat.hidden = false;
  }
}

export function render(daftar) {
  if (!wadahDaftar) return;

  wadahDaftar.innerHTML = '';
  if (elGalat) elGalat.hidden = true;

  if (!daftar || daftar.length === 0) {
    if (elKosong) elKosong.hidden = false;
    return;
  }

  if (elKosong) elKosong.hidden = true;

  daftar.forEach((proyek) => {
    const li = document.createElement('li');
    li.className = 'kartu-proyek';
    li.innerHTML = `
      <h3>${proyek.judul}</h3>
      <p><strong>Kategori:</strong> ${proyek.kategori} | <strong>Tahun:</strong> ${proyek.tahun}</p>
      <p>${proyek.deskripsi ?? ''}</p>
    `;
    wadahDaftar.appendChild(li);
  });
}

export function pasangFilter(dataAwal) {
  const wadahFilter = document.querySelector('#filter-kategori');
  if (!wadahFilter) return;

  wadahFilter.addEventListener('click', (event) => {
    const tombol = event.target.closest('button');
    if (!tombol) return;

    const kategori = tombol.dataset.kategori;
    if (kategori === 'semua') {
      render(dataAwal);
    } else {
      const hasilFilter = dataAwal.filter((item) => item.kategori === kategori);
      render(hasilFilter);
    }
  });
}