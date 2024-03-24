        var greetingElement = document.getElementById("greetingMessage");
        var currentTime = new Date().getHours();
        var greetingMessage = "";

        if (currentTime >= 0 && currentTime <= 12) {
            greetingMessage = "Good morning, and welcome to my small portfolio. On this website, I display some of my projects, interests, and achievements, to give a general gist of what I do. My main passion is computer science, inserting it into almost every aspect of my life. In fact, this description is designed to change the 'good morning' message based on the time of day! Further contact information can also be found here. Thanks for visiting!";
        } else if (currentTime >= 12 && currentTime <= 18) {
            greetingMessage = "Good afternoon, and welcome to my small portfolio. On this website, I display some of my projects, interests, and achievements, to give a general gist of what I do. My main passion is computer science, inserting it into almost every aspect of my life. In fact, this description is designed to change the 'good afternoon' message based on the time of day! Further contact information can also be found here. Thanks for visiting!";
        } else if (currentTime >= 18 && currentTime <= 24) {
            greetingMessage = "Good evening, and welcome to my small portfolio. On this website, I display some of my projects, interests, and achievements, to give a general gist of what I do. My main passion is computer science, inserting it into almost every aspect of my life. In fact, this description is designed to change the 'good evening' message based on the time of day! Further contact information can also be found here. Thanks for visiting!";
        } else {
            greetingMessage = "Hi! Welcome to my small portfolio. On this website, I display some of my projects, interests, and achievements, to give a general gist of what I do. My main passion is computer science, inserting it into almost every aspect of my life. In fact, this description would normally display a good morning/evening message using JavaScript based on the time of day, though it doesn't seem to be working as of now. 😅 Further contact information can be found in the contact section! Thanks for visiting :D";
        }

        greetingElement.textContent = greetingMessage;
