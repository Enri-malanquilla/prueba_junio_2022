import { Contact } from './Contact';

const Group = ({
  data,
  contact,
  setDragData,
  dragData,
  setContact,
  setGroup,
  group,
  index,
}) => {
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const changeCategory = (itemId, group) => {
    const newItems = [...contact];
    newItems[itemId].group = group;
    setContact([...newItems]);
  };

  const handleDrop = (e, group) => {
    const selected = dragData.id;
    changeCategory(selected, group);
  };

  const handleDeleteGroup = (e) => {
    e.preventDefault();
    group.splice(index + 1, 1);
    setGroup([...group]);
  };

  return (
    <li
      className='contact_group'
      onDragOver={handleDragOver}
      onDrop={(e) => handleDrop(e, data)}
    >
      <div>
        <h1>{data}</h1>
        <ul>
          {contact &&
            contact

              .filter((item) => item.group === data)
              .map((item, index) => {
                return (
                  <Contact
                    key={index}
                    data={item}
                    id={index}
                    setDragData={setDragData}
                    contact={contact}
                    setContact={setContact}
                  />
                );
              })}
        </ul>
      </div>
      <button className='deleteGroup' onClick={handleDeleteGroup}>
        X
      </button>
    </li>
  );
};
export { Group };
