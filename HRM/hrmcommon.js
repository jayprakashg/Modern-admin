
document.addEventListener('DOMContentLoaded', function () {

    /*------------------Tooltips start------------------*/
    document.querySelectorAll('[data-tooltip]').forEach(elem => {
        elem.addEventListener('mouseenter', function () {
            const tooltip = document.createElement('div');
            tooltip.className = 'custom-tooltip absolute px-3 py-2 text-sm font-medium text-white dark:text-slate-400 bg-gray-900 dark:bg-slate-950 rounded-lg shadow-sm';
            tooltip.textContent = this.getAttribute('data-tooltip');

            // Read data-direction and assign it to the tooltip
            const direction = this.getAttribute('data-direction');
            tooltip.setAttribute('data-direction', direction);

            document.body.appendChild(tooltip);

            const rect = this.getBoundingClientRect();

            // Set tooltip position based on direction
            switch (direction) {
                case 'top':
                    tooltip.style.left = rect.left + window.scrollX + (rect.width / 2 - tooltip.offsetWidth / 2) + 'px';
                    tooltip.style.top = rect.top + window.scrollY - tooltip.offsetHeight - 6 + 'px';
                    break;
                case 'right':
                    tooltip.style.left = rect.right + window.scrollX + 6 + 'px';
                    tooltip.style.top = rect.top + window.scrollY + (rect.height / 2 - tooltip.offsetHeight / 2) + 'px';
                    break;
                case 'bottom':
                    tooltip.style.left = rect.left + window.scrollX + (rect.width / 2 - tooltip.offsetWidth / 2) + 'px';
                    tooltip.style.top = rect.bottom + window.scrollY + 6 + 'px';
                    break;
                case 'left':
                    tooltip.style.left = rect.left + window.scrollX - tooltip.offsetWidth - 6 + 'px';
                    tooltip.style.top = rect.top + window.scrollY + (rect.height / 2 - tooltip.offsetHeight / 2) + 'px';
                    break;
            }

            tooltip.style.opacity = '1';
            tooltip.style.visibility = 'visible';

            this.addEventListener('mouseleave', function () {
                tooltip.remove();
            });
        });
    });
    /*------------------Tooltips End------------------*/

    /*--------------------------------------Toggle visibility user and notification javascript Start---------------------------------------------*/
    const toggleBtn = document.getElementById('UserOption');
    const fadeElement = document.getElementById('UserWrap');
    const useroverlay = document.querySelector('.globaloverlay');// Access the first element in the collection
    const userhided = document.getElementById('userhide');

    toggleBtn.addEventListener('click', function () {
        document.body.style.overflow = "hidden";
        if (fadeElement.classList.contains("openuserpopup")) {
            // If the popup is open, close it
            fadeElement.classList.remove("openuserpopup");
            useroverlay.style.display = "none";
        } else {
            // If the popup is closed, open it
            fadeElement.classList.add("openuserpopup");
            useroverlay.style.display = "block";
        }
    });

    useroverlay.addEventListener('click', function () {
        // Close the popup when the overlay is clicked
        fadeElement.classList.remove("openuserpopup");
        useroverlay.style.display = "none";
        document.body.style.overflow = "auto";
    });
    userhided.addEventListener('click', function () {
        // Close the popup when the overlay is clicked
        fadeElement.classList.remove("openuserpopup");
        useroverlay.style.display = "none";
        document.body.style.overflow = "auto";
    });

    /*Notification javascript*/
    const notifyn = document.getElementById('notifications');
    const notifyw = document.getElementById('notifywrap');
    const notifyoverlay = document.querySelector('.globaloverlay');
    const notifyclosed = document.getElementById('notifyclose');

    notifyn.addEventListener('click', function () {
        document.body.style.overflow = "hidden";
        if (notifyw.classList.contains("notifywrapper-right")) {
            // If the popup is open, close it
            notifyw.classList.remove("notifywrapper-right");
            useroverlay.style.display = "none";
        } else {
            // If the popup is closed, open it
            notifyw.classList.add("notifywrapper-right");
            useroverlay.style.display = "block";
        }
    });
    notifyoverlay.addEventListener('click', function () {
        // Close the popup when the overlay is clicked
        notifyw.classList.remove("notifywrapper-right");
        notifyoverlay.style.display = "none";
        document.body.style.overflow = "auto";
    });
    notifyclosed.addEventListener('click', function () {
        // Close the popup when the overlay is clicked
        notifyw.classList.remove("notifywrapper-right");
        notifyoverlay.style.display = "none";
        document.body.style.overflow = "auto";
    });
    /*--------------------------------------Toggle visibility user and notification javascript End---------------------------------------------*/

    /*--------------------------------------Employee search javascript Start---------------------------------------------*/
    // Select elements
    const searchIcon = document.getElementById('search-cicon');
    const searchDiv = document.getElementById('search-div');
    const body = document.body;

    // Check if elements exist before adding event listeners
    if (searchIcon && searchDiv) {
        // Add event listener to the search icon
        searchIcon.addEventListener('click', function (event) {
            searchDiv.classList.add('active-search');
            event.stopPropagation();
        });

        // Add event listener to the body
        body.addEventListener('click', function () {
            searchDiv.classList.remove('active-search');
        });

        // Prevent closing if clicking inside the searchDiv
        searchDiv.addEventListener('click', function (event) {
            event.stopPropagation();
        });
    }

    // Show the employee list
    function ShowList() {
        const empList = document.querySelector(".emp-list");
        if (empList) {
            empList.style.display = "block";
        }
    }

    // Hide employee list when clicking outside the input or list
    document.addEventListener("click", function (e) {
        const searchInput = document.getElementById("searchInput");
        const empList = document.getElementById("empList");

        if (searchInput && empList && !searchInput.contains(e.target) && !empList.contains(e.target)) {
            empList.style.display = "none";
        }
    });

    // Add click event to the input to show the list
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
        searchInput.addEventListener('click', ShowList);
    }
});
/*--------------------------------------Employee search javascript End---------------------------------------------*/

/*--------------------------------------Edit button click show add delete buttons start---------------------------------------------*/
// Mapping buttons to their corresponding divs
const buttonDivMap = {
    'PaymentInformationBtn': 'PaymentInformation',
    'KYCDetailsBtn': 'KYCDetails',
    'UploadImageBtn': 'UploadImage',
    'QualificationBtn': 'Qualification',
    'Work-ExperienceBtn': 'Work-Experience',
    'Family-MembersBtn': 'Family-Members',
    'HobbiesBtn': 'Hobbies'
};

// Remove the class on page load for all divs
for (let divId in buttonDivMap) {
    const divElement = document.getElementById(buttonDivMap[divId]);
    if (divElement) {
        divElement.classList.remove('activeClass');
    }
}

// Add event listeners to each button
for (let buttonId in buttonDivMap) {
    const buttonElement = document.getElementById(buttonId);
    if (buttonElement) {
        buttonElement.addEventListener('click', function () {
            const divElement = document.getElementById(buttonDivMap[buttonId]);
            if (divElement) {
                // Toggle the class
                divElement.classList.toggle('activeClass');
            }
        });
    }
}
/*--------------------------------------Edit button click show add delete buttons End---------------------------------------------*/


/*--------------------------------------Render Sidemenu javascript Start---------------------------------------------*/
        // Function to load Sidemenu.html content
//         function loadSubmenu() {
//             fetch('sidemenu2.html')
//                 .then(response => {
//                     if (!response.ok) {
//                         throw new Error('Network response was not ok');
//                     }
//                     return response.text();
//                 })
//                 .then(data => {
//                     document.getElementById('submenu-container').innerHTML = data;
//                     // Display success message
//                     // Call the sidebar function
//                     sidebar();
//                 })
//                 .catch(error => {
//                     //console.error('Error fetching the submenu:', error);
//                 });
// }
 
/*--------------------------------------Render Sidemenu javascript end---------------------------------------------*/

        // Call loadSubmenu when the window finishes loading
//         window.onload = function () {
//             loadSubmenu();
// };


/* ---------------------------Function to toggle dark mode and change the logo src---------------------------*/
tailwind.config = {
    darkMode: 'class',
}
function darkModeListener() {
    // Toggle the 'dark' class on the <html> element
    document.querySelector("html").classList.toggle("dark");
    // Get the logo element
    const logo = document.querySelector(".hrm-logo");
    // Check if the logo element exists before trying to modify it
    if (logo) {
        // Check if dark mode is active
        const isDarkMode = document.querySelector("html").classList.contains("dark");
        // Change the logo src based on the dark mode status
        if (isDarkMode) {
            // If dark mode is active, set the dark mode logo
            logo.src = "./img/hrmlogodark.png"; // Replace with the dark mode logo URL
        } else {
            // If dark mode is not active, set the light mode logo
            logo.src = "./img/hrmlogo.png"; // Replace with the light mode logo URL
        }
    }
}
// Add event listener to the checkbox input to trigger dark mode
const darkToggle = document.querySelector("input[type='checkbox']#dark-toggle");

// Check if the checkbox exists before adding the event listener
if (darkToggle) {
    darkToggle.addEventListener("click", darkModeListener);
}
/* ---------------------------Function to toggle dark mode and change the logo src---------------------------*/

/*--------------------------------------Sidemenu javascript Start---------------------------------------------*/
        function sidebar() {
            // Sidebar toggle functionality
            const sidebar = document.querySelector(".sidebar");
            const sidebarBtn = document.querySelector(".open-menu-icon");

            if (sidebar && sidebarBtn) {
                sidebarBtn.addEventListener("click", () => {
                    sidebar.classList.toggle("close");
                    sidebarBtn.classList.toggle("ri-menu-unfold-line");

                    // Append overlay when sidebar is opened
                    if (!sidebar.classList.contains("close")) {
                        const overlay = document.createElement("div");
                        overlay.classList.add("overlay-bg");
                        document.body.appendChild(overlay);

                        // Add click event to close both sidebar and overlay
                        overlay.addEventListener("click", () => {
                            sidebar.classList.add("close");
                            sidebarBtn.classList.remove("ri-menu-unfold-line");
                            overlay.remove();
                        });
                    } else {
                        // Remove overlay if sidebar is closed
                        const existingOverlay = document.querySelector(".overlay-bg");
                        if (existingOverlay) {
                            existingOverlay.remove();
                        }
                    }
                });
            } else {
                /*console.error('Sidebar or Sidebar button not found.');*/
            }

        // Submenu toggle functionality using event delegation
        const navLinks = document.querySelector(".nav-links");
        if (navLinks) {
            navLinks.addEventListener("click", (e) => {
                const arrow = e.target.closest(".arrow");
                if (arrow) {
                    const arrowParent = arrow.closest('.menu-item');
                    if (arrowParent) {
                        arrowParent.classList.toggle("showMenu");
                    } else {
                        /*console.error('Arrow parent with .menu-item not found.');*/
                    }
                }
            });
        } else {
            /*console.error('Nav links container not found.');*/
        }
}
      // Run sidebar function after the DOM is loaded
window.addEventListener('DOMContentLoaded', sidebar);

/*--------------------------------------Sidemenu javascript end---------------------------------------------*/











