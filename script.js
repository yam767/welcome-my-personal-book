let contacts = [];

// Save new contact or update an existing one
document.getElementById('address-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let address = document.getElementById('address').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;

    // Create a new contact object
    let contact = { name, address, email, phone };

    // Add new contact to the array
    contacts.push(contact);

    // Clear form inputs
    document.getElementById('address-form').reset();

    // Update the contact list
    displayContacts();
});

// Display all contacts
function displayContacts() {
    let tableBody = document.getElementById('contacts-table').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';

    contacts.forEach((contact, index) => {
        let row = tableBody.insertRow();

        // Create cells for contact details
        row.insertCell(0).innerText = contact.name;
        row.insertCell(1).innerText = contact.address;
        row.insertCell(2).innerText = contact.email;
        row.insertCell(3).innerText = contact.phone;

        // Create action buttons (Edit & Delete)
        let actionsCell = row.insertCell(4);
        actionsCell.classList.add('actions');
        
        // Edit button
        let editButton = document.createElement('button');
        editButton.innerText = 'Edit';
        editButton.onclick = function() {
            editContact(index);
        };

        // Delete button
        let deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.onclick = function() {
            deleteContact(index);
        };

        actionsCell.appendChild(editButton);
        actionsCell.appendChild(deleteButton);
    });
}

// Edit contact details
function editContact(index) {
    let contact = contacts[index];

    document.getElementById('name').value = contact.name;
    document.getElementById('address').value = contact.address;
    document.getElementById('email').value = contact.email;
    document.getElementById('phone').value = contact.phone;

    // Remove the contact from the array before editing
    contacts.splice(index, 1);
    displayContacts();
}

// Delete contact from the list
function deleteContact(index) {
    contacts.splice(index, 1);
    displayContacts();
}

// Display initial contacts (default 10 individuals)
document.addEventListener('DOMContentLoaded', function() {
    // Sample contacts
    contacts = [
        { name: 'John Doe', address: '123 Main St', email: 'john@example.com', phone: '123-456-7890' },
        { name: 'Jane Smith', address: '456 Oak St', email: 'jane@example.com', phone: '987-654-3210' },
        { name: 'Alice Johnson', address: '789 Pine St', email: 'alice@example.com', phone: '555-123-4567' },
        { name: 'Bob Brown', address: '321 Elm St', email: 'bob@example.com', phone: '555-987-6543' },
        { name: 'Charlie Davis', address: '654 Cedar St', email: 'charlie@example.com', phone: '555-246-8102' },
        { name: 'David Williams', address: '987 Maple St', email: 'david@example.com', phone: '555-369-2580' },
        { name: 'Emily Wilson', address: '135 Birch St', email: 'emily@example.com', phone: '555-741-8520' },
        { name: 'Frank Harris', address: '246 Spruce St', email: 'frank@example.com', phone: '555-963-2584' },
        { name: 'Grace Martin', address: '369 Fir St', email: 'grace@example.com', phone: '555-147-2583' },
        { name: 'Hannah Lee', address: '482 Redwood St', email: 'hannah@example.com', phone: '555-963-7410' }
    ];

    displayContacts();
});
