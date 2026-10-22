<template>
  <p id="loading" hidden>Memuat data...</p>
  <p id="empty" hidden>Belum ada data proyek.</p>
  <p id="error" hidden class="pesan-galat"></p>
  <ul id="daftar" class="gallery"></ul>
  <p id="pesan-kosong" hidden> no games found </p>

  <div id="recommended-sim-racer">
    <h2>Recommended for Sim Racer</h2>
    <p>Diperuntukkan untuk yang sudah memiliki pengalaman bermain Sim Racing atau Racing Game dan mengincar gameplay Kompetitif.</p>
  
    <table>
      <caption>Recommended for Sim Racer</caption>
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">How difficult is it</th>
          <th scope="col">Recommended for …</th>
          <th scope="col">Is it worth the money and hype?</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Le Mans Ultimate</th>
          <td>Difficult</td>
          <td>Sim Racer</td>
          <td>Yes</td>
        </tr>
        <tr>
          <th scope="row">Assetto Corsa Competizione</th>
          <td>Difficult</td>
          <td>Sim Racer</td>
          <td>Yes</td>
        </tr>
        <tr>
          <th scope="row">iRacing</th>
          <td>Difficult</td>
          <td>Sim Racer</td>
          <td>Yes</td>
        </tr>
      </tbody>
    </table>

    <div class="gallery">
      <figure class="card">
        <img src="/LMU.webp" alt="Thumbnail Le Mans Ultimate dengan 2 mobil LMH dan 1 mobil LMGT3" width="600" height="600">
        <figcaption class="card_footer">
          <span class="card__content">Le Mans Ultimate</span>
        </figcaption>
      </figure>
    </div>
  </div>
</template>