import './Filter.css';

export default function Filter({ value, onInput }) {
  return (
    <label>
      <h3>Find contact by name</h3>
      <input className="filter__input" type="text" value={value} onChange={onInput} />
    </label>
  );
}
