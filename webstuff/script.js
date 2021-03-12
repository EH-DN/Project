let a = false
let body = 3

function Swap() {

    if (a == false) {
        a = true;
    } else {
        a = false;
    }
    Change();
}

function ChooseBody(b) {
    let btn_full = document.getElementById("3/3_button");
    let btn_body = document.getElementById("2/3_button");
    let btn_head = document.getElementById("1/3_button");

    body = b;
    switch (body) {
        case 3:
            btn_full.src = "img/btn_full.png";
            btn_body.src = "img/btn_body_off.png";
            btn_head.src = "img/btn_head_off.png";
            break

        case 2:
            btn_full.src = "img/btn_full_off.png";
            btn_body.src = "img/btn_body.png";
            btn_head.src = "img/btn_head_off.png";
            break

        case 1:
            btn_full.src = "img/btn_full_off.png";
            btn_body.src = "img/btn_body_off.png";
            btn_head.src = "img/btn_head.png";
            break
    }
    Change();
}


function Change() {
    let image = document.getElementById("image");
    let genderButton = document.getElementById("gender_button")

    if (a == false) {
        genderButton.src = "img/btn_male.png"
        switch (body) {
            case 3: image.src = "img/dude_full.png"; break
            case 2: image.src = "img/dude_body.png"; break
            case 1: image.src = "img/dude_head.png"; break

        }

    } else {
        genderButton.src = "img/btn_girl.png"
        switch (body) {
            case 3: image.src = "img/girl_full.png"; break
            case 2: image.src = "img/girl_body.png"; break
            case 1: image.src = "img/girl_head.png"; break

        }
    }

}