const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(mongoose.connect(process.env.MONGO_URI))
  .then(() => console.log('Connected to MongoDB!'))
  .catch((err) => console.log('Connection error:', err));

// Define a Schema (structure of each contact)
const contactSchema = new mongoose.Schema({
  name: String,
  phone: String,
  photo: String,
});

// Create a Model (like a collection)
const Contact = mongoose.model('Contact', contactSchema);

app.get('/', (req, res) => {
  res.send('Hello, Contact Book!');
});

// GET all contacts
app.get('/contacts', async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
});

// POST - add a new contact
app.post('/contacts', async (req, res) => {
  const newContact = new Contact(req.body);
  await newContact.save();
  res.json({ message: 'Contact saved!', contact: newContact });
});

// PUT - update a contact by name
app.put('/contacts/:name', async (req, res) => {
  const updated = await Contact.findOneAndUpdate(
    { name: req.params.name },
    { phone: req.body.phone },
    { new: true }
  );
  if (!updated) return res.status(404).json({ message: 'Contact not found' });
  res.json({ message: 'Contact updated!', contact: updated });
});

// DELETE - remove a contact by name
app.delete('/contacts/:name', async (req, res) => {
  const deleted = await Contact.findOneAndDelete({ name: req.params.name });
  if (!deleted) return res.status(404).json({ message: 'Contact not found' });
  res.json({ message: 'Contact deleted!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server running on http://localhost:3000');
});