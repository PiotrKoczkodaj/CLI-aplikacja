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
        console.log(results[0]);
        
    })
    .catch((err) => {
      console.log(err);
    });
};

const removeContact = (contactId) => {
  fs.readFile(contactsPath)
    .then((resp) => {
      const contactsList = JSON.parse(resp);
      const results = contactsList.filter((contact) => {
        return contact.id === contactId;
      });
        const indexToDelete = contactsList.indexOf(results[0]);
         contactsList.splice(indexToDelete, 1);
        console.log(contactsList)
    })
    .catch((err) => {
      console.log(err);
    });
};

const addContact = (name, email, phone) => {
    
}

//  listContacts();
// //   getContactById('05olLMgyVQdWRwgKfg5J6');
   removeContact('AeHIrLTr6JkxGE6SN-0Rw');

