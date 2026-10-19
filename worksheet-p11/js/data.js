export const profil = {
  nama: "Rafi Amar Rhosan",
  peran: "Pengembang Web & Mahasiswa SIF",
  keahlian: ["HTML", "CSS", "JavaScript", "Git"]
};

export function buatPerkenalan({ nama, peran }) {
  return `Halo, saya ${nama}, seorang ${peran}.`;
}

export const formatKeahlian = (daftar) => daftar.join(" · ");

export function saring(daftar, kategori) {
  if (!kategori || kategori === "semua") {
    return daftar;
  }
  return daftar.filter((item) => item.kategori === kategori);
}