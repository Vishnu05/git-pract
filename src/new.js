let a = document.getElementById(document)

console.log("Rebase")

/** changing the innerHtml */

let git = document.getElementById('text')
console.log(git)

git.innerHTML = "Git Rebase"

function textFunction() {
    git.innerHTML = "GIT Rebase is powerful"
}

function move(){
    git.innerHTML = "mousemove function Git rebase"
}

function out() {
    git.innerHTML = "On mouseout Git Rebase is showing the dependency tree good"
}

let upp = document.getElementById('uppper')
let uppar = document.getElementById('uppar')
function up() {
    uppar.innerHTML = upp.value.toUpperCase()
    upp.value = upp.value.toUpperCase()
}