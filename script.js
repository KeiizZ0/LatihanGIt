// Mengubah teks heading setelah halaman dimuat
window.onload = function() {
    document.querySelector("h1").textContent = "Latihan JavaScript Selesai";
};

// Deklarasi variabel
let name = "John";
const age = 30;

// Menampilkan nama dan umur di dalam div dengan ID "output"
document.getElementById("output").innerHTML = "Nama: " + name + ", Umur: " + age;

// Membuat array
let fruits = ["Apple", "Banana", "Mango"];
let fruitText = "Buah-buahan: ";
for (let i = 0; i < fruits.length; i++) {
    fruitText += fruits[i] + " ";
}
document.getElementById("output").innerHTML += "<br>" + fruitText;

// Membuat objek
let person = { firstName: "John", lastName: "Doe", age: 30 };
document.getElementById("output").innerHTML += "<br>Nama Lengkap: " + person.firstName + " " + person.lastName;

function checkValue() {
    let value = document.getElementById("userInput").value;
    let output = document.getElementById("output");

    // Menggunakan if...else untuk memeriksa nilai
    if (value > 10) {
        output.innerHTML = "Nilai lebih besar dari 10";
    } else if (value == 10) {
        output.innerHTML = "Nilai sama dengan 10";
    } else {
        output.innerHTML = "Nilai kurang dari 10";
    }

    // Menggunakan perulangan for untuk menampilkan angka
    output.innerHTML += "<br>Angka dari 1 sampai " + value + ": ";
    for (let i = 1; i <= value; i++) {
        output.innerHTML += i + " ";
    }
}

// Fungsi greet
function greet(name) {
    return "Hello, " + name;
}

// Menampilkan hasil panggilan fungsi greet
document.getElementById("output").innerHTML = greet("Alice") + "<br>" + greet("Bob");

// Fungsi calculateSquare
function calculateSquare(number) {
    return number * number;
}

// Menampilkan hasil panggilan fungsi calculateSquare
document.getElementById("output").innerHTML += "<br>Kuadrat dari 4 adalah: " + calculateSquare(4);

// Arrow function untuk menjumlahkan dua angka
const sum = (a, b) => a + b;

// Menampilkan hasil panggilan fungsi sum
document.getElementById("output").innerHTML += "<br>Jumlah dari 3 dan 5 adalah: " + sum(3, 5);

// Membuat array students
let students = ["Alice", "Bob", "Charlie"];
students.push("David"); // Menambahkan nama ke array

// Menampilkan semua nama siswa
let studentText = "Siswa: ";
students.forEach(function(student) {
    studentText += student + " ";
});
document.getElementById("output").innerHTML += "<br>" + studentText;

// Membuat objek car
let car = { brand: "Toyota", model: "Corolla", year: 2020 };

// Menampilkan semua properti dari objek car
let carText = "Mobil: ";
for (let key in car) {
    carText += key + ": " + car[key] + ", ";
}
document.getElementById("output").innerHTML += "<br>" + carText;

// Membuat array objek untuk beberapa mobil
let cars = [
    { brand: "Honda", model: "Civic", year: 2019 },
    { brand: "Ford", model: "Focus", year: 2018 },
    { brand: "Chevrolet", model: "Malibu", year: 2017 }
];

// Menampilkan informasi setiap mobil
let carsText = "Mobil yang tersedia: <br>";
cars.forEach(function(car) {
    carsText += car.brand + " " + car.model + " (" + car.year + ")<br>";
});
document.getElementById("output").innerHTML += carsText;


