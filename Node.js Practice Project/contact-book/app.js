const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Add Contact
function addContact() {
  rl.question("Enter contact name: ", (name) => {
    rl.question("Enter phone number: ", (phone) => {
      const contact = {
        name: name,
        phone: phone
      };

      fs.readFile("contacts.json", "utf8", (err, data) => {
        let contacts = [];

        if (!err) {
          contacts = JSON.parse(data);
        }

        contacts.push(contact);

        fs.writeFile(
          "contacts.json",
          JSON.stringify(contacts, null, 2),
          (err) => {
            if (err) {
              console.log("Error saving contact");
            } else {
              console.log("\n✅ Contact saved successfully!");
            }

            showMenu();
          }
        );
      });
    });
  });
}

// View Contacts
function viewContacts() {
  fs.readFile("contacts.json", "utf8", (err, data) => {
    if (err) {
      console.log("Error reading contacts");
      showMenu();
      return;
    }

    const contacts = JSON.parse(data);

    console.log("\n📋 All Contacts:");

    if (contacts.length === 0) {
      console.log("No contacts found.");
    } else {
      contacts.forEach((contact, index) => {
        console.log(`${index + 1}. ${contact.name} - ${contact.phone}`);
      });
    }

    showMenu();
  });
}

// Search Contact
function searchContact() {
  rl.question("Enter contact name to search: ", (name) => {
    fs.readFile("contacts.json", "utf8", (err, data) => {
      if (err) {
        console.log("Error reading contacts");
        showMenu();
        return;
      }

      const contacts = JSON.parse(data);

      const contact = contacts.find(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      );

      if (contact) {
        console.log("\n🔍 Contact Found!");
        console.log("Name:", contact.name);
        console.log("Phone:", contact.phone);
      } else {
        console.log("\n❌ Contact not found.");
      }

      showMenu();
    });
  });
}

// Delete Contact
function deleteContact() {
  rl.question("Enter contact name to delete: ", (name) => {
    fs.readFile("contacts.json", "utf8", (err, data) => {
      if (err) {
        console.log("Error reading contacts");
        showMenu();
        return;
      }

      let contacts = JSON.parse(data);

      const oldLength = contacts.length;

      contacts = contacts.filter(
        (contact) => contact.name.toLowerCase() !== name.toLowerCase()
      );

      if (contacts.length === oldLength) {
        console.log("\n❌ Contact not found.");
        showMenu();
        return;
      }

      fs.writeFile(
        "contacts.json",
        JSON.stringify(contacts, null, 2),
        (err) => {
          if (err) {
            console.log("Error deleting contact");
          } else {
            console.log("\n🗑️ Contact deleted successfully!");
          }

          showMenu();
        }
      );
    });
  });
}

// Update Contact
function updateContact() {
  rl.question("Enter contact name to update: ", (name) => {
    fs.readFile("contacts.json", "utf8", (err, data) => {
      if (err) {
        console.log("Error reading contacts");
        showMenu();
        return;
      }

      const contacts = JSON.parse(data);

      const contact = contacts.find(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      );

      if (!contact) {
        console.log("\n❌ Contact not found.");
        showMenu();
        return;
      }

      rl.question("Enter new phone number: ", (newPhone) => {
        contact.phone = newPhone;

        fs.writeFile(
          "contacts.json",
          JSON.stringify(contacts, null, 2),
          (err) => {
            if (err) {
              console.log("Error updating contact");
            } else {
              console.log("\n✏️ Contact updated successfully!");
            }

            showMenu();
          }
        );
      });
    });
  });
}

// Main Menu
function showMenu() {
  console.log("\n📒 Contact Book");
  console.log("----------------");
  console.log("1. Add Contact");
  console.log("2. View Contacts");
  console.log("3. Search Contact");
  console.log("4. Delete Contact");
  console.log("5. Update Contact");
  console.log("6. Exit");

  rl.question("\nChoose an option: ", (choice) => {
    if (choice === "1") {
      addContact();
    } else if (choice === "2") {
      viewContacts();
    } else if (choice === "3") {
      searchContact();
    } else if (choice === "4") {
      deleteContact();
    } else if (choice === "5") {
      updateContact();
    } else if (choice === "6") {
      console.log("\nGoodbye! 👋");
      rl.close();
    } else {
      console.log("\n❌ Invalid option.");
      showMenu();
    }
  });
}

// Start the Contact Book
showMenu();