function denseRanking(scores, gitsScores) {
  // Menghapus skor duplikat dan mengurutkan secara descending
  const uniqueScores = [...new Set(scores)];
  uniqueScores.sort((a, b) => b - a);

  const rankings = [];

  // Fungsi untuk mendapatkan peringkat berdasarkan skor
  function getRank(score) {
    return uniqueScores.findIndex((s) => s === score) + 1;
  }

  // Menghitung peringkat GITS setelah setiap permainan
  for (let i = 0; i < gitsScores.length; i++) {
    const gitsScore = gitsScores[i];
    const currentScores = [...scores, gitsScore];
    const gitsRank = getRank(gitsScore);

    rankings.push(gitsRank);

    // Memperbarui daftar skor dengan skor baru dari GITS dan mengurutkannya kembali
    scores.push(gitsScore);
    scores.sort((a, b) => b - a);
  }

  return rankings;
}

// Penggunaan fungsi
const scores = [100, 100, 50, 40, 40, 20, 10];
const gitsScores = [5, 25, 50, 120];
const result = denseRanking(scores, gitsScores);
console.log(result);
