const Contact = ({ data }) => {
  return (
    <li>
      <article>
        <h1>{data.name}</h1>
        <p>{data.phone}</p>
        <p>{data.address}</p>
      </article>
    </li>
  );
};
export { Contact };
