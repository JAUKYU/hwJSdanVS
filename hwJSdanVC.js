// Fungsi untuk menghasilkan nilai acak antara 1 dan 50
function getRandomValue() {
    return Math.floor(Math.random() * 50) + 1;
  }
  
  var randomArray = [];
  
  // Mengisi array dengan 100 nilai acak
  for (var i = 0; i < 100; i++) {
    randomArray.push(getRandomValue());
  }
  
  var evenArray = [];
  var oddArray = [];
  
  for (var i = 0; i < randomArray.length; i++) {
    if (i % 2 === 0) {
      evenArray.push(randomArray[i]); // Menambahkan nilai ke array genap
    } else {
      oddArray.push(randomArray[i]); // Menambahkan nilai ke array ganjil
    }
  }
  
  // Fungsi untuk menghitung nilai minimum
  function findMin(arr) {
    var min = arr[0];
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return min;
  }
  
  // Fungsi untuk menghitung nilai maksimum
  function findMax(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  
  // Fungsi untuk menghitung total
  function findTotal(arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total;
  }
  
  // Fungsi untuk menghitung rata-rata
  function findAverage(arr) {
    if (arr.length === 0) {
      return 0; // Mencegah pembagian oleh nol
    }
    var total = findTotal(arr);
    return total / arr.length;
  }
  
  // Menghitung nilai minimum, maksimum, total, dan rata-rata untuk array genap dan ganjil
  var minEven = findMin(evenArray);
  var maxEven = findMax(evenArray);
  var totalEven = findTotal(evenArray);
  var averageEven = findAverage(evenArray);
  
  var minOdd = findMin(oddArray);
  var maxOdd = findMax(oddArray);
  var totalOdd = findTotal(oddArray);
  var averageOdd = findAverage(oddArray);
  
  console.log(
    "Array Genap - Min:",
    minEven,
    "Max:",
    maxEven,
    "Total:",
    totalEven,
    "Rata-rata:",
    averageEven
  );
  console.log(
    "Array Ganjil - Min:",
    minOdd,
    "Max:",
    maxOdd,
    "Total:",
    totalOdd,
    "Rata-rata:",
    averageOdd
  );
  
  // Membandingkan hasil
  if (minEven > minOdd) {
    console.log("Min lebih besar pada Array Genap");
  } else if (minEven < minOdd) {
    console.log("Min lebih besar pada Array Ganjil");
  } else {
    console.log("Min memiliki nilai yang sama pada kedua array");
  }
  
  if (maxEven > maxOdd) {
    console.log("Max lebih besar pada Array Genap");
  } else if (maxEven < maxOdd) {
    console.log("Max lebih besar pada Array Ganjil");
  } else {
    console.log("Max memiliki nilai yang sama pada kedua array");
  }
  
  if (totalEven === totalOdd) {
    console.log("Total memiliki nilai yang sama pada kedua array");
  } else {
    console.log("Total berbeda antara Array Genap dan Array Ganjil");
  }
  
  if (averageEven > averageOdd) {
    console.log("Rata-rata lebih besar pada Array Genap");
  } else if (averageEven < averageOdd) {
    console.log("Rata-rata lebih besar pada Array Ganjil");
  } else {
    console.log("Rata-rata memiliki nilai yang sama pada kedua array");
  }
  