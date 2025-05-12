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
  
  const commentIcon = document.getElementById('comment-icon');
  const commentContainer = document.querySelector('.comment-container');
  const shortVideo = document.querySelector('.short-video');
  const metadata = document.querySelector('.metadata');
  
  commentIcon.addEventListener('click', () => {
    commentContainer.classList.toggle('show');
  
    if (commentContainer.classList.contains('show')) {
      commentContainer.classList.add('shift-left'); // 🔄 Add shift-left to the comment container
      shortVideo.classList.add('shift-left');
      metadata.classList.add('shift-left');
    } else {
      commentContainer.classList.remove('shift-left'); // 🔄 Remove shift-left from the comment container
      shortVideo.classList.remove('shift-left');
      metadata.classList.remove('shift-left');
    }
  });
  
  
  document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.querySelector(".caption-toggle");
    const moreText = document.querySelector(".caption-more");
    const profile = document.querySelector(".Profile");

    toggleBtn.addEventListener("click", () => {
      const isHidden = moreText.classList.toggle("hidden");

      // Toggle button text
      toggleBtn.textContent = isHidden ? "see more" : "see less";

      // Move profile container up or reset it
      if (!isHidden) {
        profile.classList.add("shift-up");
      } else {
        profile.classList.remove("shift-up");
      }
    });
  });

    // 
  document.addEventListener("click", () => {
    const video = document.querySelector(".short-video video");
    if (video) {
      video.muted = false;
      video.play().catch((e) => console.log("Autoplayy with sound failed:", e));
    }
  }, { once: true });   


  const textarea = document.querySelector('.commentt textarea');

  textarea.addEventListener('input', () => {
    textarea.style.height = 'auto'; // Reset height
    textarea.style.height = Math.min(textarea.scrollHeight, 100) + 'px'; // Limit to 100px
  });