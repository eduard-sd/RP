//lesson1
// let canvas = document.getElementById("id1");
// let ctx = canvas.getContext('2d');
// ctx.fillStyle = 'red';
// // ctx.fillRect(x, y, width, heigth);
// ctx.fillRect(100, 50, 150, 75);
// ctx.clearRect(0,0,400,200); //стирает канвас

// ctx.fillStyle = 'blue';
// ctx.lineWidth = "10";
// ctx.rect (150,100,100,50);
// ctx.stroke();
// ctx.fillStyle = "orange";
// ctx.fill();

// ctx.clear


// lesson2
// let canvas2 = document.querySelector('#id2');
// let ctx2 = canvas2.getContext("2d");


// ctx2.beginPath();
// ctx2.strokeStyle = "red";
// ctx2.lineWidth = "20";
// ctx2.lineCap = 'round'
// ctx2.moveTo(100,50); //передвинул перо
// ctx2.lineTo(150,150) //рисуем линию с исходной точки
// ctx2.stroke();

// ctx2.lineTo(230,150);
// ctx2.stroke();

// ctx2.beginPath();
// ctx2.strokeStyle = "green";
// ctx2.lineWidth = "5";
// ctx2.moveTo(260,150);
// ctx2.lineTo(350,150);
// ctx2.stroke();

// ctx2.clearRect(0,0,400,200);


var animation = bodymovin.loadAnimation({
    container: document.getElementById('id1'),
    rederer: 'svg',
    loop: true,
    autoplay: true,
    path: "data/1/data1.json"
});

var animation2 = bodymovin.loadAnimation({
    container: document.getElementById('id2'),
    rederer: 'svg',
    loop: true,
    autoplay: true,
    path: "data/2/data.json"
});


var animation3 = bodymovin.loadAnimation({
    container: document.getElementById('id3'),
    rederer: 'svg',
    loop: true,
    autoplay: true,
    path: "data/3/data.json"
});


