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
      console.log(results)
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
          console.log('Usunięto...')
          contactsList.splice(indexToDelete, 1);
           fs.writeFile(contactsPath, JSON.stringify(contactsList));
        }
      });
      
    })
    .catch((err) => {
      console.log(err);
    });
};

// const addContact = () => {
//   fs.readFile(contactsPath).then(resp => {
//     console.log(JSON.parse(resp).length)
//   })
// }
  //  listContacts();
  // getContactById('05olLMgyVQdWRwgKfg5J6');
   removeContact('05olLMgyVQdWRwgKfg5J6');

// addContact()
