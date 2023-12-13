let school = document.getElementById('login-school')
let college1 = document.getElementById('login-college-within')
let college2 = document.getElementById('login-college-outside')
let official = document.getElementById('login-official')
let showPassword = document.getElementById('showed')
let hidePassword = document.getElementById('hided')
let password = document.getElementsByName('password')

let cross = Array.from(document.querySelectorAll('.cross'))
let blackBacks = document.getElementById('blackBack')

let schoolInfo = document.getElementById('school-info')
let collegeLoginWithin = document.getElementById('college-login-within')
let collegeLoginOutside = document.getElementById('college-login-outside')
let officialLogin = document.getElementById('official-login')

cross.forEach((close) => {
    close.onclick = () => {
        blackBacks.style.display = 'none';
        schoolInfo.style.display = 'none';
        collegeLoginWithin.style.display = 'none';
        collegeLoginOutside.style.display = 'none';
        officialLogin.style.display = 'none';
    }
})

const show = () => {
    Array.from(password).forEach((pass) => {
        pass.type = 'text';
    })
}
const hide = () => {
    Array.from(password).forEach((pass) => {
        pass.type = 'password';
    })
}

school.onclick = () => {
    blackBacks.style.display = 'block';
    schoolInfo.style.display = 'flex';
}

college1.onclick = () => {
    blackBacks.style.display = 'block';
    collegeLoginWithin.style.display = 'flex';
}

college2.onclick = () => {
    blackBacks.style.display = 'block';
    collegeLoginOutside.style.display = 'flex';
}

official.onclick = () => {
    blackBacks.style.display = 'block';
    officialLogin.style.display = 'flex';
}

showPassword.onclick = () => {
    showPassword.style.display = 'none';
    hidePassword.style.display = 'block';
    show();
}

hidePassword.onclick = () => {
    showPassword.style.display = 'block';
    hidePassword.style.display = 'none';
    hide();
}

