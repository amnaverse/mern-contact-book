import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const avatarColors = ['var(--c1)', 'var(--c2)', 'var(--c3)', 'var(--c4)', 'var(--c5)', 'var(--c6)'];

function getAvatarColor(name) {
  const index = name.charCodeAt(0) % avatarColors.length;
  return avatarColors[index];
}

function App() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [photo, setPhoto] = useState('');

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    const response = await axios.get('http://localhost:3000/contacts');
    setContacts(response.data);
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setPhoto(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const addContact = async () => {
    if (!name.trim() || !phone.trim()) return;
    await axios.post('http://localhost:3000/contacts', { name, phone, photo });
    setName('');
    setPhone('');
    setPhoto('');
    fetchContacts();
  };

  const deleteContact = async (contactName) => {
    await axios.delete(`http://localhost:3000/contacts/${contactName}`);
    fetchContacts();
  };

  return (
    <div className="book">
      <div className="book-header">
        <span className="book-eyebrow">Personal Directory</span>
        <h1 className="book-title">Contact Book</h1>
        <p className="book-sub">Every connection, one tap away.</p>
      </div>

      <div className="add-form">
        <input
          type="text"
          placeholder="Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <label className="photo-picker">
          {photo ? (
            <img src={photo} alt="preview" className="photo-preview" />
          ) : (
            <span>+ Photo</span>
          )}
          <input type="file" accept="image/*" onChange={handlePhotoChange} hidden />
        </label>
        <button className="add-btn" onClick={addContact}>
          Add contact
        </button>
      </div>

      {contacts.length === 0 ? (
        <div className="empty-state">
          <p>No contacts yet — add your first one above.</p>
        </div>
      ) : (
        <ul className="contact-list">
          {contacts.map((contact) => (
            <li className="contact-row" key={contact._id}>
              {contact.photo ? (
                <img src={contact.photo} alt={contact.name} className="avatar-photo" />
              ) : (
                <div className="avatar" style={{ background: getAvatarColor(contact.name) }}>
                  {contact.name.charAt(0).toUpperCase()}
                </div>
              )}
              <div className="contact-info">
                <div className="contact-name">{contact.name}</div>
                <div className="contact-phone">{contact.phone}</div>
              </div>
              <button className="delete-btn" onClick={() => deleteContact(contact.name)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
