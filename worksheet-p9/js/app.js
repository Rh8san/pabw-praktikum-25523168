//1
const namaLengkap = "Rafi Amar Rhosan";
const judulTopik = "Racing Game Recommendation";
const kalimatPeran = "Rekomendasi game balap untuk Sim Racer dan Casual Player";
const keahlianUtama = ["Le Mans Ultimate", "Assetto Corsa Competizione", "iRacing"];
let jumlahGameRekomendasi = 3;

console.log("Tipe data namaLengkap:", typeof namaLengkap);
console.log("Tipe data jumlahGameRekomendasi:", typeof jumlahGameRekomendasi);

const ringkasanHalaman = `Halaman ${judulTopik} ini dibuat oleh ${namaLengkap} dengan ${jumlahGameRekomendasi} game utama.`;
console.log(ringkasanHalaman);

const detailProfil = {
  nama: namaLengkap,
  topik: judulTopik,
  game: keahlianUtama
};

console.log("Kota pembuat:", detailProfil.lokasi?.kota ?? "Kota tidak dicantumkan");

//2
const buatPerkenalan = ({ nama, topik }) => {
  return `Halo, saya ${nama}. Selamat datang di halaman ${topik}!`;
};

const formatKeahlian = (daftar) => {
  return daftar.join(" · ");
};

console.log(buatPerkenalan(detailProfil));
console.log("Game Terkait:", formatKeahlian(keahlianUtama));

//3
export const daftarGame = [
  { id: 1, judul: "Le Mans Ultimate", kesulitan: "Difficult", rekomendasiUntuk: "Sim Racer", bernilai: true, tahunRilis: 2024 },
  { id: 2, judul: "Assetto Corsa Competizione", kesulitan: "Difficult", rekomendasiUntuk: "Sim Racer", bernilai: true, tahunRilis: 2018 },
  { id: 3, judul: "iRacing", kesulitan: "Difficult", rekomendasiUntuk: "Sim Racer", bernilai: true, tahunRilis: 2008 },
  { id: 4, judul: "Forza Horizon 5", kesulitan: "Easy", rekomendasiUntuk: "Casual", bernilai: false, tahunRilis: 2021 }
];

console.log("--- TABEL KEAHLIAN/GAME UTAMA ---");
console.table(detailProfil.game);

console.log("--- TABEL DAFTAR GAME REKOMENDASI ---");
console.table(daftarGame);

const khususSimRacer = daftarGame.filter((game) => game.rekomendasiUntuk === "Sim Racer");
console.log("--- FILTER RESULT (Sim Racer) ---");
console.table(khususSimRacer);

const gamePilihan = daftarGame.find((game) => game.judul === "Le Mans Ultimate");
console.log("--- FIND RESULT (Le Mans Ultimate) ---", gamePilihan);

const daftarJudulGame = daftarGame.map((game) => game.judul);
console.log("--- MAP RESULT (Game Titles) ---", daftarJudulGame);

const gameTerurutTahun = [...daftarGame].sort((a, b) => b.tahunRilis - a.tahunRilis);
console.log("--- SORT RESULT (Newest to Oldest) ---");
console.table(gameTerurutTahun);