const Contact = ({ data, id, setDragData }) => {
  const handleDragStart = (id, group) => {
    setDragData({ id: id, initialGroup: group });
  };

  return (
    <li
      style={{ border: 'solid 2px red' }}
      onDragStart={(e) => handleDragStart(id, data.group)}
      draggable
    >
      <article>
        <h1>{data.name}</h1>
        <p>{data.phone}</p>
        <p>{data.address}</p>
      </article>
    </li>
  );
};
export { Contact };
