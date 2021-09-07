import React, { Component } from 'react';
import './App.css';
import Form from 'components/Form/Form';
import Filter from 'components/Filter/Filter';
import Contacts from 'components/Contacts/Contacts';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Jagatai Khan', number: '6556-083-12' },
      { id: 'id-2', name: 'Lion el Jonson', number: '6556-464-07' },
      { id: 'id-3', name: 'Rogal Dorn', number: '6555-701-13' },
      { id: 'id-4', name: 'Robaut Guilliman', number: '6556-111-12' },
    ],
    filter: '',
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleFormSubmit = data => {
    const { contacts } = this.state;
    const exists = contacts.find(contact => contact.name.toLowerCase() === data.name.toLowerCase());

    exists === undefined
      ? this.setState({ contacts: contacts.concat(data) })
      : alert(`${data.name} is alredy in the contacts list`);
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const equalFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(equalFilter));
  };

  render() {
    let { filter } = this.state;
    return (
      <div className="wrapper">
        <section className="section">
          <h1>Phonebook</h1>
          <Form onSubmit={this.handleFormSubmit} />
        </section>

        <section className="section">
          <h2>Contacts</h2>
          <Filter value={filter} onInput={this.changeFilter} />
          <Contacts contacts={this.getVisibleContacts()} handleDeleteContact={this.deleteContact} />
        </section>
      </div>
    );
  }
}
