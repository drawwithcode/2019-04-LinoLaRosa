var song;
var analyzer;
var button;
var mic;

function preload() {

    song = loadSound("./assets/neverscared.mp3");

}

function setup() {

    createCanvas(windowWidth, windowHeight);

    button = createButton("PLAY");
    button.position(windowWidth / 2 - 50, windowHeight - 100);
    button.size(100, 50);
    button.mousePressed(suona);

    mic = new p5.AudioIn();
    mic.start();

    analyzer = new p5.Amplitude();
    analyzer.setInput(song);
}

function suona() {

    if (!song.isPlaying()) {
        song.play();
        button.html("PAUSE");
    } else {
        song.pause();
        button.html("PLAY");
    }
}

function draw() {

    background(lerpColor(color("white"), color("black"), frameCount / 1000));

    noStroke();
    textAlign(CENTER, CENTER);
    textSize(25);
    fill("white");
    text("SING ON THIS BEAT AND SEE WHAT HAPPENS!", windowWidth / 2, 100);

    if (song.currentTime() > 14) {
        background("teal");
        fill("purple");
    }

    if (song.currentTime() > 17.5) {
        background("orange");
        fill("blue");
    }

    if (song.currentTime() > 21) {
        background("green");
        fill("red");
    }

    if (song.currentTime() > 24.5) {
        background("purple");
        fill("yellow");
    }

    if (song.currentTime() > 28) {
        background("orange");
        fill("orange");
        strokeWeight(6);
        stroke("teal")
    }

    if (song.currentTime() > 31.5) {
        background("aqua");
        fill("aqua");
        strokeWeight(6);
        stroke("pink");
    }

    if (song.currentTime() > 35) {
        background("blue");
        fill("blue");
        strokeWeight(6);
        stroke("red");
    }

    if (song.currentTime() > 38.5) {
        background("khaki");
        fill("khaki");
        strokeWeight(6);
        stroke("green");
    }

    if (song.currentTime() > 40.25) {
        background("DarkGoldenRod");
        fill("DarkGoldenRod");
        strokeWeight(6);
        stroke("black");
    }

    if (song.currentTime() > 40.6875) {
        background("black");
        fill("black");
        strokeWeight(6);
        stroke("DarkGoldenRod");
    }

    if (song.currentTime() > 41.125) {
        background("DarkGoldenRod");
        fill("DarkGoldenRod");
        strokeWeight(6);
        stroke("black");
    }

    if (song.currentTime() > 41.5625) {
        background("black");
        fill("black");
        strokeWeight(6);
        stroke("DarkGoldenRod");
    }

    if (song.currentTime() > 42) {
        background("red");
        fill("red");
        strokeWeight(12);
        stroke("blue");
    }

    if (song.currentTime() > 45.5) {
        background("lightgreen");
        fill("lightgreen");
        strokeWeight(12);
        stroke("lightpink");
    }

    if (song.currentTime() > 49) {
        background("lightsalmon");
        fill("lightsalmon");
        strokeWeight(12);
        stroke("lightseagreen");
    }

    if (song.currentTime() > 52.5) {
        background("lightblue");
        fill("lightblue");
        strokeWeight(12);
        stroke("blue");
    }

    if (song.currentTime() > 55.5) {
        background("black");
        fill("yellow");
        noStroke();
    }

    var volume = 0;
    volume = analyzer.getLevel(); //mi calcola ogni frame il volume della canzone
    volume = map(volume, 0, 1, 0, height); //rimappo il volume da 0 e 1 (valori correnti, o ci sarebbe o non ci sarebbe) a 0 e altezza dello schermo

    var volumemic = mic.getLevel();

    ellipse(windowWidth * 0.6666, windowHeight / 2, volumemic * 400);

    rectMode(CENTER);
    rect(windowWidth / 3, windowHeight / 2, volume, volume);

    fill("white");

}
