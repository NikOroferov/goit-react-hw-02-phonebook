import './Contacts.css';

export default function Contacts({ contacts, handleDeleteContact }) {
  return (
    <ul className="contacts__list">
      {contacts.map(({ id, name, number }) => (
        <li className="contacts__item" key={id}>
          <p className="contacts__name">{name}</p>
          <p>{number}</p>
          <button className="delete__btn" onClick={() => handleDeleteContact(id)}>
            Delete contact
          </button>
        </li>
      ))}
    </ul>
  );
}
