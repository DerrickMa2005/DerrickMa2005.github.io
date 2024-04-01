localStorage.setItem("currentMode", "dark")
document.getElementById("body").setAttribute("data-bs-theme", localStorage.getItem("currentMode"));
document.getElementById("lightswitchborder").onclick = function() {
    if (localStorage.getItem("currentMode") == "light") {
        localStorage.setItem("currentMode", "dark");
        document.getElementById("body").setAttribute("data-bs-theme", localStorage.getItem("currentMode"));
        document.getElementById("LinkedinLogo").setAttribute("src", "Images/Linkedin.png");
        document.getElementById("GithubLogo").setAttribute("src", "Images/GitHub.png");
        document.getElementById("EmailLogo").setAttribute("src", "Images/Mail_Icon.png");
        setTimeout(function() {document.getElementById("switchicon").setAttribute("class", "lighticon")}, 100);
    }
    else {
        localStorage.setItem("currentMode", "light");
        document.getElementById("body").setAttribute("data-bs-theme", localStorage.getItem("currentMode"));
        document.getElementById("LinkedinLogo").setAttribute("src", "Images/LinkedinLight.png");
        document.getElementById("GithubLogo").setAttribute("src", "Images/GitHubLight.png");
        document.getElementById("EmailLogo").setAttribute("src", "Images/Mail_Icon_Light.png");
        setTimeout(function() {document.getElementById("switchicon").setAttribute("class", "darkicon")}, 100);
    }
};