# test-pt-gits-indonesia
Internship - Problem Solving Test PT GITS Indonesia

(2.) Berapa ukuran kompleksitas kodinganmu?
Kompleksitas kodingan ini adalah O(n), di mana n adalah panjang dari string input. Algoritma menggunakan loop tunggal untuk memeriksa setiap karakter dalam string, sehingga waktu eksekusi akan bergantung pada ukuran string.

(3.) Jelaskan detail kompleksitas codingan Balanced Bracket!
Detail kompleksitas kodingan:

- Loop tunggal digunakan untuk memeriksa setiap karakter dalam string. Oleh karena itu, waktu eksekusi adalah O(n), di mana n adalah panjang dari string input.
Algoritma ini menggunakan stack untuk melacak tanda kurung buka yang belum memiliki pasangan tutup. Pada setiap iterasi, stack dapat melakukan operasi push (untuk tanda kurung buka) atau pop (untuk tanda kurung tutup). Kedua operasi ini memiliki kompleksitas waktu O(1) karena stack diimplementasikan sebagai array.
- Selain itu, fungsi menggunakan operasi indexOf dan includes untuk memeriksa apakah karakter termasuk dalam kelompok tanda kurung buka atau tutup. Operasi ini memiliki kompleksitas waktu O(k), di mana k adalah jumlah tanda kurung yang diperbolehkan (dalam kasus ini k = 3 karena hanya ada tiga tipe tanda kurung).
- Selain stack, fungsi ini juga menggunakan variabel lain yang memiliki kompleksitas waktu O(1).

Dengan demikian, secara keseluruhan, kompleksitas waktu kodingan ini adalah O(n + k), yang dalam analisis asimptotis lebih disederhanakan menjadi O(n). Kompleksitas ini dianggap paling rendah untuk menyelesaikan permasalahan "Balanced Bracket".
