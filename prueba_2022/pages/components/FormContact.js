import { useState } from 'react';

const FormContact = ({ setAddContact, setContact, contact }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const handlerDataContact = (e) => {
    e.preventDefault();
    const data = {
      name,
      address,
      phone,
      group: 'contacts',
    };
    setContact([...contact, data]);
    setAddContact(false);
  };

  return (
    <form onSubmit={handlerDataContact}>
      <div>
        <label>Nombre</label>
        <input
          placeholder='Nombre contacto'
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        ></input>
      </div>
      <div>
        <label>Dirección</label>
        <input
          placeholder='Dirección'
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
          required
        ></input>
      </div>
      <div>
        <label>Teléfono</label>
        <input
          placeholder='Telefono'
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          required
        ></input>
      </div>
      <button type='submit'>Crear</button>
    </form>
  );
};
export { FormContact };
