const fs = require("node:fs").promises;
const path = require("node:path");


const contactsPath = path.join(__dirname, "/db/", "contacts.json");

const listContacts = () => {
  fs.readFile(contactsPath)
      .then((resp) => {
        console.table(JSON.parse(resp))
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
      if (results[0] === undefined) {
        console.log('Nie ma takiego kontaktu ;( (sprawdź czy wprowadziłeś poprawne id)')
      } else {
        console.log(results[0])
      }
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
          console.table(contactsList)
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
      id: Math.random().toString(36).substring(2,12),
    };
    contactsList.push(contactToAdd);
    fs.writeFile(contactsPath, JSON.stringify(contactsList));
    console.log('Pomyślnie dodano kontakt')
    console.table(contactsList)
  });
};

module.exports ={
    listContacts,
    getContactById,
    removeContact,
    addContact
}