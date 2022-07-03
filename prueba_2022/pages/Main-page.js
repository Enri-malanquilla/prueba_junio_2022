import Head from 'next/head';
import { useState } from 'react';
//hooks
import { useLocalStorage } from './hooks/useLocalStorage';
//components
import { FormContact } from './components/FormContact';
import { FormGroup } from './components/FormGroup';
import { Contact } from './components/Contact';
import { Group } from './components/Groups';

export default function Home() {
  const [addContact, setAddContact] = useState(false);
  const [addGroup, setAddGroup] = useState(false);
  const [search, setSearch] = useState('');
  const [dragData, setDragData] = useState({});
  //storage
  const [contact, setContact] = useLocalStorage([], 'contacts');
  const [group, setGroup] = useLocalStorage(['contacts'], 'groups');
  //functions toogle
  function handlerFormContact(e) {
    e.preventDefault();
    setAddContact(!addContact);
  }
  function handlerFormGroup(e) {
    e.preventDefault();
    setAddGroup(!addGroup);
  }
  //function search filtered by name

  const filteredContact = contact.filter((person) => {
    return person.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      <Head>
        <title>lista de contactos</title>
        <meta name='lista de contactos' content='lista de contactos' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='main'>
        <section className='main'>
          <ul className='groups'>
            <li id='contacts'>
              <h1>Contactos</h1>
              <input
                type='search'
                name='searchContact'
                id='searchContact'
                placeholder='busca contacto'
                onChange={(e) => setSearch(e.target.value)}
              />

              <div>
                <ul>
                  {search.length > 0 &&
                    filteredContact.map((data, index) => {
                      return (
                        <Contact
                          key={index}
                          data={data}
                          id={index}
                          setDragData={setDragData}
                          contact={contact}
                          setContact={setContact}
                        />
                      );
                    })}
                </ul>
                <ul>
                  {contact.length > 0 &&
                    search.length < 1 &&
                    contact.map((data, index) => {
                      return (
                        <Contact
                          key={index}
                          data={data}
                          id={index}
                          setDragData={setDragData}
                          contact={contact}
                          setContact={setContact}
                        />
                      );
                    })}
                </ul>
              </div>
            </li>
            {group.length > 0 &&
              group.slice(1).map((value, index) => {
                return (
                  <Group
                    key={index}
                    data={value}
                    contact={contact}
                    setDragData={setDragData}
                    setContact={setContact}
                    dragData={dragData}
                    setGroup={setGroup}
                    group={group}
                    index={index}
                  />
                );
              })}
          </ul>
        </section>
      </div>
      <section className='btns'>
        <button onClick={handlerFormContact}>Añadir Contacto</button>
        {addContact && (
          <FormContact
            setAddContact={setAddContact}
            setContact={setContact}
            contact={contact}
          />
        )}
        <button onClick={handlerFormGroup}>Crear Grupo</button>
        {addGroup && (
          <FormGroup
            group={group}
            setGroup={setGroup}
            setAddGroup={setAddGroup}
          />
        )}
      </section>
    </div>
  );
}
