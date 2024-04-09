function updateCopyright() {
    // Get Current Year
    var currentYear = new Date().getFullYear();
    // Get all document elements
    var copyrightElements = document.querySelectorAll('body, body *');
    // Loop to iterate through all elements
    copyrightElements.forEach(function(element) {
        // Check if element contains "Copyright ©"
        if (element.innerHTML.includes("Copyright ©")) {
            // Replace "XXXX" with current year
            var updatedText = element.innerHTML.replace(/Copyright © \d{4}/g, "Copyright © " + currentYear);
            // Update HTML with new text
            element.innerHTML = updatedText;
            // Change text color to red
            element.style.color = "red";
        }
    });
}

// Call the function when the document is loaded
document.addEventListener("DOMContentLoaded", function() {
    updateCopyright();
});