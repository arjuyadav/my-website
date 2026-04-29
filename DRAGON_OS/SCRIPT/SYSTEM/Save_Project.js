// Add a beforeunload event listener
window.addEventListener("beforeunload", (event) => {
    // Set a custom message
    const message = "Are you sure you want to leave this site? Changes you made may not be saved.";

    // Set the event returnValue property
    event.returnValue = message;
    // Display the confirmation dialog
    return message;
});

let unsavedChanges = false;

// Set this to true whenever there are changes that need saving
function markUnsavedChanges() {
    unsavedChanges = true;
}

// Add a beforeunload event listener
window.addEventListener("beforeunload", (event) => {
    if (unsavedChanges) {
        const message = "You have unsaved changes. Are you sure you want to leave?";
        event.returnValue = message;
        return message;
    }
});