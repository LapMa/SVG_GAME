function choose() {
    let obj = document.getElementById("obj").value;
    let megjelen = document.getElementById("megjelenites");
    let szel = document.getElementById("szel").value;
    let mag = document.getElementById("mag").value;

    if (obj == "kor") {
        megjelen.innerHTML = `<svg width="475" height="342" xmlns="http://www.w3.org/2000/svg">
                                    <circle id="alakzat" cx="100" cy="100" r="${szel}" stroke="green" stroke-width="4" fill="yellow" /> 
                                </svg>`;

    } else if (obj == "teglalap") {
        megjelen.innerHTML = `<svg width="475" height="342" xmlns="http://www.w3.org/2000/svg">
                                    <rect id="alakzat" width="${szel}" height="${mag}" x="10" y="10" rx="20" ry="20" fill="blue" /> 
                                </svg>`;
    } else if (obj == "ellipszis") {
        megjelen.innerHTML = `<svg width="475" height="342" xmlns="http://www.w3.org/2000/svg">
                                    <ellipse id="alakzat" rx="${szel}" ry="${mag}" cx="100" cy="200" style="fill:yellow;stroke:green;stroke-width:3" />
                                </svg>`;
    }
    frissit();
}

function frissit() {
    var alakzat = document.getElementById("alakzat");
    var x = 0;
    var y = 0;

    window.addEventListener("keydown", function (event) {
        if (event.key == "ArrowUp") {
            if (y > 0) y -= 10;
        }
        if (event.key == "ArrowDown") {
            if (y < 250) y += 10;
        }
        if (event.key == "ArrowRight") {
            if (x < 370) x += 10;
        }
        if (event.key == "ArrowLeft") {
            if (x > 0) x -= 10;
        }
        alakzat.setAttribute("transform", `translate(${x},${y})`);
        if ((x <= 0 || x >= 370) && (y <= 0 || y >= 240)) {
            alert("Elérted a szélét!");
        }
    });
}

function createDot(x, y) {
    var elem = document.createElement("div");
    elem.setAttribute("class", "dot");
    elem.setAttribute("style", "left:" + x + "px;top:" + y + "px;");
    document.getElementsByTagName("body")[0].appendChild(elem);
    return elem;
}

function anotherDot() {
    var x = Math.floor(Math.random() * 350) + 10; // Adjusted for inner space
    var y = Math.floor(Math.random() * 250) + 10;

    // Ellenőrizze, hogy a pont a kisebb szegélyen belül van-e
    if (x > 70 && x < window.innerWidth - 70 && y > 70 && y < window.innerHeight - 70) {
        createDot(x, y);
    }
}


for (var i = 0; i < 50; i++) {
    anotherDot();
}