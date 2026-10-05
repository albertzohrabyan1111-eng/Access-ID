var opeye = document.querySelector(`.openeye`)
var clouseye = document.querySelector(`.noopeye`)
var password = document.querySelector(`#password`)
var password2 = document.querySelector(`#password-Name`)
var email = document.querySelector(`#emaeil`)
var eleminp = document.getElementsByClassName(`elem`)
var knop = 0
var ko = null     
function password_eye() {
    knop++
    if (knop % 2 != 0) {
        opeye.style = `
            display: block;
            `
        clouseye.style = `
            display: none;
        `
        password.type = `text`
    } else {
        opeye.style = `
            display: none;
        `
        clouseye.style = `
            display: block;
        `
        password.type = `password`
    }
}


function f1(pay) {
    if (pay == true) {
        email.classList.add(`anim`)
        if (ko == 1) {
            email.classList.remove(`anim2`)
        }
    } else if (pay == false) {
        password2.classList.add(`anim`)
        if (ko == 1) {
            password2.classList.remove(`anim2`)
        }
    }
}

function f2(pay) {
    if (pay == true) {
        if (eleminp[0].value == ``) {
            email.classList.remove(`anim`)
            email.classList.add(`anim2`)
            ko = 1
        }
    } else if (pay == false) {
        if (eleminp[1].value == ``) {
            password2.classList.remove(`anim`)
            password2.classList.add(`anim2`)
            ko = 1
        }

    }
}