import { useState } from 'react';

const FormGroup = ({ group, setGroup, setAddGroup }) => {
  const [nameGroup, setNameGroup] = useState('');

  const handlerDataGroup = (e) => {
    e.preventDefault();

    setGroup([...group, nameGroup]);
    setAddGroup(false);
  };

  return (
    <form onSubmit={handlerDataGroup}>
      <legend>Crear Grupo</legend>
      <div>
        <input
          placeholder='Nombre Grupo'
          value={nameGroup}
          onChange={(e) => {
            setNameGroup(e.target.value);
          }}
          required
        ></input>
      </div>
      <button type='submit'>Añadir</button>
    </form>
  );
};
export { FormGroup };
