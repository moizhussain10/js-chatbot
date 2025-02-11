function sendMessage() {
    let input = document.getElementById("userInput");
    let message = input.value;
    
    
    let chat = document.getElementById("chat");
    chat.innerHTML += "<p><strong>You:</strong> " + message + "</p>";
    input.value = "";

    let botResponse = getBotResponse(message);

setTimeout(() => {
    chat.innerHTML += "<p><strong>Bot:</strong> " + botResponse + "</p>";
}, 1500);

}

function getBotResponse(input) {
    if (input.toLowerCase() === "hello") {
        return "Hi there! How can I help?";

    }else if (input.toLowerCase() == "how many courses does smit have") {
        return "According to available information, Saylani Mass IT Training (SMIT) offers a wide range of IT courses including web development, mobile app development, CCNA, graphic designing, and computer-based accounting, but the exact number of individual courses is not readily available";

    }else if (input.toLowerCase() == "how can i submit the form" || "what is the process of submit the form") {
        return "go to the saylani welfare form and fill the form and then submit it then download your id card and print it out then attest the id card from any of the saylani branch";

    }else if (input.toLowerCase() == "how many branches of saylani in karachi") {
        return "Saylani Welfare International Trust operates numerous branches across Karachi to serve the underprivileged. While the exact number of branches isn't specified, their network includes locations in areas such as Bahadurabad, Clifton, Gulistan-e-Jauhar, Gulshan-e-Iqbal, Federal B. Area, Kharadar, and others. Additionally, they provide services at over 50 locations in Karachi, offering meals to more than 63,000 individuals daily.";

    } else {
        return "Sorry, I don't understand that.";
    }
}





