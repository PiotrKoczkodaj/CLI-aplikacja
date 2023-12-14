const fs = require("node:fs").promises;
const path = require("node:path");

const contactsPath = path.join(__dirname, "/db/", "contacts.json");

const listContacts = () => {
  fs.readFile(contactsPath)
    .then((resp) => {
      console.log(JSON.parse(resp));
    })
    .catch((error) => {
      console.log(error);
    });
};

const getContactById = (contactId) => {
  fs.readFile(contactsPath)
    .then((resp) => {
      const contactsList = JSON.parse(resp);
      const results = contactsList.filter((contact) => {
        return contact.id === contactId;
      });
      console.log(results);
    })
    .catch((err) => {
      console.log(err);
    });
};

const removeContact = (contactId) => {
  fs.readFile(contactsPath)
    .then((resp) => {
      const contactsList = JSON.parse(resp);
      contactsList.map((contact) => {
        if (contact.id === contactId) {
          const indexToDelete = contactsList.indexOf(contact);
          console.log("Usunięto...");
          contactsList.splice(indexToDelete, 1);
          fs.writeFile(contactsPath, JSON.stringify(contactsList));
          console.log(contactsList.length);
        }
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

const addContact = (name, email, phone) => {
  fs.readFile(contactsPath).then((resp) => {
    const contactsList = JSON.parse(resp);
    const contactToAdd = {
      name,
      email,
      phone,
      id: Math.floor(Math.random() * 789987654321543567),
    };

    contactsList.push(contactToAdd);
    fs.writeFile(contactsPath, JSON.stringify(contactsList));
  });
};

// listContacts();
// getContactById("05olLMgyVQdWRwgKfg5J6");
//  removeContact(3185009610206531);
// addContact('pawel','dddddd',1234464562);
