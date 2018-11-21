import React, { Component } from "react";
import _ from "lodash";

export default class SearchUser extends Component {
  constructor(props) {
    super(props);
    this._onUserClick = this._onUserClick.bind(this);
  }

  _onUserClick(user) {
    if (this.props.onSelect) {
      this.props.onSelect(user);
    }
  }

  render() {
    const { search } = this.props;
    const users = this.props.store.searchUsers(search);

    console.log("Here is users", users);
    return (
      <div className="search-user">
        <div className="user-list">
          {users.map((user, key) => {
            console.log(user);
            return (
              <div
                onClick={() => this._onUserClick(user)}
                key={key}
                className="user"
              >
                <img src={user.avatar} alt="..." />
                <h2>{user.name}</h2>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
