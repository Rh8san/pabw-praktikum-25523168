<template>
  <div id="recommended-casual">
    <h2>Recommended for Casual Player/JFF</h2>
    <p>Cocok untuk bersenang-senang dengan teman maupun sendiri. Untuk saat ini belum ada, namun saya menambahkan fitur untuk mengisi form rekomendasi game balap yang cocok untuk casual player. Silakan isi form di bawah ini.</p>

    <form action="#" method="post">
      <fieldset>
        <legend>Recommendation Form</legend>

        <label for="game-title">Game Title:</label>
        <input type="text" id="game-title" name="game-title" required>

        <label for="difficulty">Difficulty Level:</label>
        <select id="difficulty" name="difficulty" required>
          <option value="">Select difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Moderate</option>
          <option value="hard">Difficult</option>
        </select>

        <label for="recommendation">Why do you recommend this game?</label>
        <textarea id="recommendation" name="recommendation" rows="4" required></textarea>

        <button type="submit">Submit Recommendation</button>
      </fieldset>
    </form>
  </div>
</template>