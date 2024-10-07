// Get the input fields and button
const daysInput = document.getElementById("daysInput");
const daysSelect = document.getElementById("daysSelect");
const calculateBtn = document.getElementById("calculateBtn");
const result = document.getElementById("result");

// Disable one input when the other is used
daysInput.addEventListener("input", function() {
    if (daysInput.value) {
        daysSelect.disabled = true;  // Disable dropdown when input field has value
    } else {
        daysSelect.disabled = false; // Enable dropdown when input field is empty
    }
});

daysSelect.addEventListener("change", function() {
    if (daysSelect.value) {
        daysInput.disabled = true;  // Disable input field when dropdown has selection
    } else {
        daysInput.disabled = false; // Enable input field when dropdown has no selection
    }
});

// Add event listener to the calculate button
calculateBtn.addEventListener("click", function() {
    const startDateInput = document.getElementById("startDate").value;

    // Validation: ensure a valid date and either days input or dropdown is selected
    if (!startDateInput || (!daysInput.value && !daysSelect.value)) {
        result.textContent = "Please enter a valid date and select or enter the number of days.";
        return;
    }

    // Parse the start date
    const startDate = new Date(startDateInput);
    let numberOfDays = 0;

    // Determine which input is used and get the value
    if (daysInput.value) {
        numberOfDays = parseInt(daysInput.value);
    } else if (daysSelect.value) {
        numberOfDays = parseInt(daysSelect.value);
    }

    // Calculate the new date by adding the number of days
    startDate.setDate(startDate.getDate() + numberOfDays);

    // Format the result date as YYYY-MM-DD
    const endDate = startDate.toISOString().split('T')[0];

    // Display the result
    result.textContent = `The end date is: ${endDate}`;
});
