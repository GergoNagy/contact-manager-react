import React, { Component } from "react";
import Constact from "./Contact";

import { Consumer } from "../../context";

class Constacts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;

          return (
            <React.Fragment>
              {contacts.map(contact => (
                <Constact key={contact.id} contact={contact} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Constacts;
