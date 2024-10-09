// Function to store records
function storeRecords() {
    const carBrand = document.getElementById('carBrand').value;
    const carPrice = document.getElementById('carPrice').value;
    const carKey = document.getElementById('carKey').value;

    const carDetails = {
        Brand: carBrand,
        Price: carPrice,
        Key: carKey
    };

    // Check if any field is empty
    if (carDetails.Key === "" || carDetails.Brand === "" || carDetails.Price === "") {
        alert("Please fill in all fields");
    } else {
        // Check if the key already exists
        if (localStorage.getItem(carDetails.Key)) {
            alert("Car Details already exist");
        } else {
            // Store car details in localStorage
            localStorage.setItem(carDetails.Key, JSON.stringify(carDetails));
            alert("Car Details added successfully");
        }
    }
}

// Function to retrieve records
function retrieveRecords() {
    const retrieveKey = document.getElementById('retrieveKey').value;

    // Check if the key is empty
    if (retrieveKey === "") {
        alert("Please enter a key");
        return;
    }

    // Check if the key exists in localStorage
    if (localStorage.getItem(retrieveKey)) {
        const carDetails = JSON.parse(localStorage.getItem(retrieveKey));
        let htmlData = `
        <p class="h6">${carDetails.Brand}, ${carDetails.Price}</p>`;
        document.getElementById('Store').innerHTML = htmlData; 
    } else {
        alert("No record found with this key");
    }
}

// Function to delete records
function deleteRecords() {
    const deleteKey = document.getElementById('deleteKey').value;

    // Check if the key is empty
    if (deleteKey === "") {
        alert("Please enter a key");
        return;
    }

    // Check if the key exists in localStorage
    if (localStorage.getItem(deleteKey)) {
        localStorage.removeItem(deleteKey); // Remove the record
        alert("Car Details deleted successfully");
    } else {
        alert("No record found with this key");
    }
}

// Function to clear all records
function clearAllRecords() {
    localStorage.clear(); // Clear all records
    alert("All records cleared successfully");
}
