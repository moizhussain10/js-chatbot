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
    if (input.toLowerCase() === "hello" || input.toLowerCase() === "hi") {
        return "Hi there! How can I help?";
    }
        if (input.toLowerCase() === "how are you") {
            return "I'm just a bot, but I'm feeling great! How about you?";      
        }
         else if (input.toLowerCase() === "what's your name" || input.toLowerCase() === "who are you") {
            return "I'm your friendly chatbot, here to help you! 😊";
        }
        else if (input.toLowerCase() === "fine") {
            return "thats great how can i help you😊";
        }  else if (input.toLowerCase() === "what can you do") {
            return "I can answer your questions, provide information, and help with various topics! Just ask me anything.";
        
        } else if (input.toLowerCase() === "tell me a joke") {
            return "Why did the computer catch a cold? Because it left its Windows open! 😂";
        
        } else if (input.toLowerCase() === "who created you") {
            return "I was created by a team of developers to assist and chat with awesome people like you!";
        
        } else if (input.toLowerCase() === "what's the weather like") {
            return "I can't check live weather yet, but you can try searching online for the latest forecast! 🌤️";
        
        } else if (input.toLowerCase() === "do you like music") {
            return "I don't have ears, but I hear music is amazing! What's your favorite song? 🎵";
        
        } else if (input.toLowerCase() === "tell me something interesting") {
            return "Did you know? Honey never spoils! Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3000 years old and still good to eat! 🍯";
        
        } else if (input.toLowerCase() === "what courses does smit offer") {
            return "Saylani Mass IT Training (SMIT) offers a variety of IT courses, including Web Development, Mobile App Development, Graphic Designing, CCNA, and more. For a complete list, visit their official website.";
            
        } else if (input.toLowerCase() === "how do i register for a course at smit") {
            return "To register for a course at SMIT, visit the Saylani Welfare website, fill out the registration form, submit your details, and download your student ID card after approval.";
            
        } else if (input.toLowerCase() === "where are saylani branches located in karachi") {
            return "Saylani Welfare has multiple branches in Karachi, including Bahadurabad, Clifton, Gulshan-e-Iqbal, Federal B. Area, and Kharadar. They operate over 50 service points in the city.";
            
        } else if (input.toLowerCase() === "what services does saylani welfare provide") {
            return "Saylani Welfare offers various services, including free meals, medical assistance, education, vocational training, and financial aid to those in need.";
            
        } else if (input.toLowerCase() === "how can i donate to saylani welfare") {
            return "You can donate to Saylani Welfare through their official website, bank transfer, or by visiting one of their branches in person.";
            
        } else {
            return "I'm sorry, I couldn't understand your question. Could you please rephrase it?";
        }

}





