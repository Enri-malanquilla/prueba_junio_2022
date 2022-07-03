import { Contact } from './Contact';

const Group = ({ data, contact, setDragData, dragData, setContact }) => {
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

  return (
    <li
      style={{ border: 'solid 2px green' }}
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
                  />
                );
              })}
        </ul>
      </div>
    </li>
  );
};
export { Group };
