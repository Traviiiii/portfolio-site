function showPlaceholderContent(contentId) {
    // Hide all content sections
    hideAllContent();

    // Show the selected content section after a small delay
    setTimeout(function() {
        document.getElementById(`content${contentId}`).style.display = 'block';

        // Scroll to the selected content section
        document.getElementById(`content${contentId}`).scrollIntoView({ behavior: 'smooth' });
    }, 50); // Adjust the delay (in milliseconds) as needed
}

function hideAllContent() {
    // Hide all content sections
    for (let i = 1; i <= 3; i++) {
        document.getElementById(`content${i}`).style.display = 'none';
    }
}