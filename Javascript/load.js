if (localStorage.getItem("currentMode") == null) {
    localStorage.setItem("currentMode", "dark");
}
document.getElementById("body").style.transition = "none";
document.getElementById("heading").style.transition = "none";
document.getElementById("footer").style.transition = "none";
if (document.getElementById("hr") != null) {
    document.getElementById("hr").style.transition = "none";
}
console.log(document.getElementById("body").style.transition);
document.getElementById("body").setAttribute("data-bs-theme", localStorage.getItem("currentMode"));
console.log(document.getElementById("body").getAttribute("data-bs-theme"));
if (localStorage.getItem("currentMode") == null || localStorage.getItem("currentMode") == "light") {
    document.getElementById("LinkedinLogo").setAttribute("src", "Images/LinkedinLight.png");
    document.getElementById("GithubLogo").setAttribute("src", "Images/GitHubLight.png");
    document.getElementById("EmailLogo").setAttribute("src", "Images/Mail_Icon_Light.png");
    document.getElementById("switchicon").setAttribute("class", "darkicon");
}
else {
    document.getElementById("LinkedinLogo").setAttribute("src", "Images/Linkedin.png");
    document.getElementById("GithubLogo").setAttribute("src", "Images/GitHub.png");
    document.getElementById("EmailLogo").setAttribute("src", "Images/Mail_Icon.png");
    document.getElementById("switchicon").setAttribute("class", "lighticon");
}