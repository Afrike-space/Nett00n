document.addEventListener("DOMContentLoaded", function() {







    

    const lightIcon = document.getElementById("theme-toggle-light");
    const darkIcon = document.getElementById("theme-toggle-dark");

    // Function to set the theme based on the mode
    function setTheme(mode) {
        if (mode === "dark") {
            document.body.classList.add("dark-mode");
            document.body.classList.remove("light-mode");
            lightIcon.style.display = "block";
            darkIcon.style.display = "none";
        } else {
            document.body.classList.add("light-mode");
            document.body.classList.remove("dark-mode");
            lightIcon.style.display = "none";
            darkIcon.style.display = "block";
        }
    }

    // Function to toggle modes
    function toggleMode() {
        if (document.body.classList.contains("dark-mode")) {
            setTheme("light");
            localStorage.setItem("theme", "light"); // Save preference
        } else {
            setTheme("dark");
            localStorage.setItem("theme", "dark"); // Save preference
        }
    }

    // Check for saved theme preference in localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        setTheme(savedTheme); // Set the theme based on saved preference
    } else {
        setTheme("light"); // Default to light mode if no preference is saved
    }

    // Event listener for the icons
    darkIcon.addEventListener("click", toggleMode);
    lightIcon.addEventListener("click", toggleMode);
});

document.querySelector(".account-dropdown").onclick = function(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    var dropdown = document.getElementById("accountDropdown");
    dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
};

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.account-dropdown') && !event.target.closest('.account-dropdown')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            dropdowns[i].style.display = "none";
        }
    }
};



document.addEventListener("DOMContentLoaded", function () {
    const notificationIcon = document.getElementById("notification-icon");
    const notificationContainer = document.getElementById("notification-container");
  
    notificationIcon.addEventListener("click", function (event) {
      event.stopPropagation(); // Prevents click from propagating to document
      notificationContainer.classList.toggle("active");
    });
  
    // Close the notification when clicking outside
    document.addEventListener("click", function (event) {
      if (!notificationContainer.contains(event.target) && !notificationIcon.contains(event.target)) {
        notificationContainer.classList.remove("active");
      }
    });
  });
  

  document.addEventListener("DOMContentLoaded", function() {
    const commentBtn = document.querySelector(".comment-btn");
    const commentContainer = document.querySelector(".comment-container");
    const closeBtn = document.querySelector(".close-btn");

    commentBtn.addEventListener("click", function() {
        commentContainer.classList.add("show-comments");
    });

    closeBtn.addEventListener("click", function() {
        commentContainer.classList.remove("show-comments");
    });
});






document.addEventListener("DOMContentLoaded", function () {
    const videos = document.querySelectorAll(".short-video");

    videos.forEach((video) => {
        video.addEventListener("click", () => {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        });
    });

    const likeButtons = document.querySelectorAll(".like-btn");
    const dislikeButtons = document.querySelectorAll(".dislike-btn");

    likeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            button.classList.toggle("liked");
        });
    });

    dislikeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            button.classList.toggle("disliked");
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const videos = document.querySelectorAll(".short-video");
    const shortsContainer = document.querySelector(".shorts-container");
    const upBtn = document.getElementById("upBtn");
    const downBtn = document.getElementById("downBtn");

    let currentIndex = 0; // Tracks the currently viewed short

    // Play/Pause video on click
    videos.forEach((video) => {
        video.addEventListener("click", () => {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        });
    });

    // Like/Dislike buttons
    document.querySelectorAll(".like-btn").forEach((btn) => {
        btn.addEventListener("click", () => btn.classList.toggle("liked"));
    });

    document.querySelectorAll(".dislike-btn").forEach((btn) => {
        btn.addEventListener("click", () => btn.classList.toggle("disliked"));
    });

    // Function to scroll to a specific short
    function scrollToShort(index) {
        if (index >= 0 && index < videos.length) {
            videos[index].scrollIntoView({ behavior: "smooth", block: "center" });
            currentIndex = index;
        }
    }

    // Scroll up
    upBtn.addEventListener("click", () => {
        scrollToShort(currentIndex - 1);
    });

    // Scroll down
    downBtn.addEventListener("click", () => {
        scrollToShort(currentIndex + 1);
    });

});


document.querySelectorAll('.comment-btn').forEach(button => {
    button.addEventListener('click', function () {
        let short = this.closest('.short');
        let commentContainer = short.querySelector('.comment-container');

        if (commentContainer.style.right === "0px") {
            commentContainer.style.right = "-300px";
            short.style.transform = "translateX(0)"; // Move video back
        } else {
            commentContainer.style.right = "0px";
            short.style.transform = "translateX(-50px)"; // Move video left
        }
    });
});



