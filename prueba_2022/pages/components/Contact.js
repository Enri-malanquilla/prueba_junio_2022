const Contact = ({ data, id, setDragData, setContact, contact }) => {
  const handleDragStart = (id, group) => {
    setDragData({ id: id, initialGroup: group });
  };

  const handleDeleteContact = (e) => {
    e.preventDefault();
    contact.splice(id, 1);
    setContact([...contact]);
  };

  return (
    <li
      className='card'
      onDragStart={(e) => handleDragStart(id, data.group)}
      draggable
    >
      <article>
        <h1>{data.name}</h1>
        <p>{data.phone}</p>
        <p>{data.address}</p>

        <button className='deleteGroup' onClick={handleDeleteContact}>
          X
        </button>
      </article>
    </li>
  );
};
export { Contact };
