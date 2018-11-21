import React, { Component } from "react";
import avatar from "../images/avatar.jpg";
import classNames from "classnames";
import { OrderedMap } from "immutable";
import _ from "lodash";
import SearchUser from "./searchuser";
import { ObjectId } from "bson";
import { throws } from "assert";
import moment from "moment";

class Messenger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: window.innerHeight,
      newMessage: "",
      searchUser: "",
      showSearchUser: false
    };

    this._onResize = this._onResize.bind(this);
    this.addTextMessage = this.addTextMessage.bind(this);
    this.handleSend = this.handleSend.bind(this);
    this.renderMessage = this.renderMessage.bind(this);
    this.scrollMessagesToBottom = this.scrollMessagesToBottom.bind(this);
    this._onCreateChannel = this._onCreateChannel.bind(this);
  }

  _onCreateChannel() {
    const channelId = new ObjectId().toString();
    const newChannel = {
      _id: channelId,
      title: "",
      lastMessage: "",
      members: new OrderedMap({
        "1": true,
        "2": true
      }),
      messages: new OrderedMap(),
      isNew: true,
      created: new Date()
    };

    this.props.store.onCreateNewChannel(newChannel);
  }

  scrollMessagesToBottom() {
    if (this.messageRef) {
      this.messagesRef.scrollTop = this.messagesRef.scrollHeight;
    }
  }
  _onResize() {
    this.setState({
      height: window.innerHeight
    });
  }

  renderMessage(message) {
    const text = _.get(message, "body", "");
    const html = _.split(text, "\n").map((line, key) => {
      return <p key={key} dangerouslySetInnerHTML={{ __html: line }} />;
    });
    return html;
  }

  handleSend() {
    const { newMessage } = this.state;
    if (_.trim(newMessage).length) {
      const messageId = new ObjectId().toString();
      const activatedChannel = this.props.store.getActivatedChannel();
      const channelId = _.get(activatedChannel, "_id", null);
      const currentUser = this.props.store.getCurrentUser();
      const currentUserName = _.get(currentUser, "name");
      const message = {
        _id: messageId,
        author: currentUserName,
        channelId: channelId,
        body: this.state.newMessage,
        avatar: avatar,
        me: true
      };
      this.setState({
        newMessage: ""
      });

      this.props.store.addMessage(messageId, message);
    }
  }

  addTextMessage() {
    const { store } = this.props;

    for (let i = 0; i < 100; i++) {
      let isMe = false;
      if (i % 2 === 0) isMe = true;
      const newMessage = {
        _id: `${i}`,
        author: `Author: ${i}`,
        body: `The body of message ${i}`,
        avatar: avatar,
        me: isMe
      };
      store.addMessage(`${i}`, newMessage);
    }

    for (let c = 0; c < 10; c++) {
      const newChannel = {
        _id: `${c}`,
        title: `Channel title ${c}`,
        lastMessage: `Hey there ...${c}`,
        members: new OrderedMap({
          "1": true,
          "2": true
        }),
        messages: new OrderedMap(),
        created: new Date()
      };
      let msgId = `${c}`;
      let moreMsgId = `${c + 1}`;
      newChannel.messages = newChannel.messages.set(msgId, true);
      newChannel.messages = newChannel.messages.set(moreMsgId, true);
      store.addChannel(`${c}`, newChannel);
    }
  }

  componentDidUpdate() {
    this.scrollMessagesToBottom();
  }

  componentDidMount() {
    window.addEventListener("resize", this._onResize);
    this.addTextMessage();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this._onResize);
  }

  render() {
    const { height } = this.state;
    const activatedChannel = this.props.store.getActivatedChannel();
    const messages = this.props.store.getMessageFromChannel(activatedChannel);
    const channels = this.props.store.getChannels();
    const members = this.props.store.getMembersFromChannel(activatedChannel);

    console.log("this is messages:" + messages);
    const style = {
      height: height
    };
    console.log(this.props.store);
    return (
      <div style={style} className="app-messenger">
        <div className="header">
          <div className="left">
            <button className="left-action">
              <i className="icon-edit-modify-streamline" />
            </button>
            <button onClick={this._onCreateChannel} className="right-action">
              <i className="icon-edit-modify-streamline" />
            </button>
            <h2>Messenger</h2>
          </div>
          <div className="content">
            {_.get(activatedChannel, "isNew") ? (
              <div className="toolbar">
                <label>To: </label>
                <input
                  placeholder=" Search people...."
                  onChange={event => {
                    const searchUserText = _.get(event, "target.value");
                    this.setState({
                      searchUser: searchUserText,
                      showSearchUser: true
                    });
                  }}
                  type="text"
                  value={this.state.searchUser}
                />
                {this.state.showSearchUser ? (
                  <SearchUser
                    onSelect={user => {
                      console.log("thafasf", user);
                      this.setState(
                        {
                          showSearchUser: false
                        },
                        () => {}
                      );
                    }}
                    search={this.state.searchUser}
                    store={this.props.store}
                  />
                ) : null}
              </div>
            ) : (
              <h2>{_.get(activatedChannel, "title", "")}</h2>
            )}
          </div>
          <div className="right">
            <div className="user-bar">
              <div className="profile-name">Tuan Ung</div>
              <div className="profile-image">
                <img src={avatar} alt="My Image" />
              </div>
            </div>
          </div>
        </div>
        <div className="main">
          <div className="sidebar-left">
            <div className="channels">
              {channels !== undefined &&
                channels.map((channel, index) => {
                  return (
                    <div
                      onClick={index => {
                        this.props.store.setActivatedChannel(channel._id);
                      }}
                      key={channel._id}
                      className={classNames("channel", {
                        active:
                          _.get(activatedChannel, "_id") ===
                          _.get(channel, "_id", null)
                      })}
                    >
                      <div className="user-image">
                        <img src={avatar} alt="" />
                      </div>
                      <div className="channel-info">
                        <h2> {channel.title}</h2>
                        <p>{channel.lastMessage}</p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="content">
            <div ref={ref => (this.messagesRef = ref)} className="messages">
              {messages !== undefined &&
                messages.map((message, index) => {
                  return (
                    <div
                      key={index}
                      className={classNames("message", { me: message.me })}
                    >
                      <div className="message-user-image">
                        <img src={avatar} alt="" />
                      </div>
                      <div className="message-body">
                        <div className="message-author">
                          {message.me ? "You" : message.author} say
                        </div>
                        <div className="message-text">
                          {this.renderMessage(message)}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="messenger-input">
              <div className="text-input">
                <textarea
                  value={this.state.newMessage}
                  placeholder="Write your message here...."
                  onKeyUp={event => {
                    if (event.key === "Enter" && !event.shiftKey) {
                      this.handleSend();
                    }
                  }}
                  onChange={event => {
                    this.setState({
                      newMessage: _.get(event, "target.value")
                    });
                  }}
                />
              </div>
              <div className="actions">
                <button onClick={this.handleSend} className="send">
                  Send
                </button>
              </div>
            </div>
          </div>

          <div className="sidebar-right">
            {members.size > 0 ? (
              <div>
                <h2 className="title">Members</h2>
                <div className="members">
                  {members !== undefined &&
                    members.map((member, index) => {
                      return (
                        <div key={index} className="member">
                          <div className="user-image">
                            <img src={_.get(member, "avatar")} alt="" />
                          </div>
                          <div className="member-info">
                            <h2> {_.get(member, "name")}</h2>
                            <p> Joined: {moment(member.created).fromNow()}</p>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Messenger;
