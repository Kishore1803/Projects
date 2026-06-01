function calculateLove() {
    let name1 = document.getElementById("name1").value.trim();
    let name2 = document.getElementById("name2").value.trim();

    if (name1 === "" || name2 === "") {
        document.getElementById("result").innerHTML =
            "⚠️ Please enter both names!";
        return;
    }

    let loveScore = Math.floor(Math.random() * 101);

    let message = "";

    if (loveScore >= 80) {
        message = "😍 Perfect Match!";
    } else if (loveScore >= 60) {
        message = "❤️ Great Connection!";
    } else if (loveScore >= 40) {
        message = "😊 Good Friendship!";
    } else if (lovescore >= 25) {
        message = "😅 Lets Break Up!";
    }

    document.getElementById("result").innerHTML =
        `${name1} ❤️ ${name2}<br>
         Love Score: ${loveScore}%<br>
         ${message}`;
}