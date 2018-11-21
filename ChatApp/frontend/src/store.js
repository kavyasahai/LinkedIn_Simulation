import { OrderedMap } from "immutable";
import _ from "lodash";

const users = new OrderedMap({
  "1": {
    _id: "1",
    name: "Tuan",
    created: new Date(),
    avatar: "https://api.adorable.io/avatars/100/abott@t.png"
  },
  "2": {
    _id: "2",
    name: "Alex",
    created: new Date(),
    avatar: "https://api.adorable.io/avatars/100/abott@a.png"
  },
  "3": {
    _id: "3",
    name: "Kevin",
    created: new Date(),
    avatar: "https://api.adorable.io/avatars/100/abott@k.png"
  }
});

export default class Store {
  constructor(appComponent) {
    this.app = appComponent;
    this.messages = new OrderedMap();
    this.channels = new OrderedMap();
    this.activatedChannelId = null;
    this.user = {
      _id: "0",
      name: "Tuan Ung",
      created: new Date()
    };
  }

  searchUsers(search = "") {
    let searchUserList = new OrderedMap();

    if (_.trim(search).length) {
      users.filter(user => {
        const name = _.get(user, "name");
        const userId = _.get(user, "_id");
        if (_.includes(name, search)) {
          searchUserList = searchUserList.set(userId, user);
        }
      });
    }
    return searchUserList.valueSeq();
  }
  getCurrentUser() {
    return this.user;
  }

  getMembersFromChannel(channel) {
    let members = new OrderedMap();
    if (channel) {
      channel.members.map((value, key) => {
        const user = users.get(key);
        members = members.set(key, user);
      });
    }
    return members.valueSeq();
  }

  getActivatedChannel() {
    const channel = this.activatedChannelId
      ? this.channels.get(this.activatedChannelId)
      : this.channels.first();
    return channel;
  }

  setActivatedChannel(channelId) {
    this.activatedChannelId = channelId;
    this.update();
  }

  addMessage(index, message = {}) {
    this.messages = this.messages.set(index, message);
    const channelId = _.get(message, "channelId");
    if (channelId) {
      const channel = this.channels.get(channelId);
      channel.messages = channel.messages.set(index, true);
      this.channels = this.channels.set(channelId, channel);
    }
    this.update();
  }

  getMessages() {
    return this.messages.valueSeq();
  }

  getMessageFromChannel(channel) {
    let messages = [];
    if (channel) {
      channel.messages.map((value, key) =>
        messages.push(this.messages.get(key))
      );
    }
    return messages;
  }

  addChannel(index, channel = {}) {
    this.channels = this.channels.set(`${index}`, channel);
    this.update();
  }

  getChannels() {
    this.channels = this.channels.sort((a, b) => {
      if (a.created > b.created) return -1;
      else if (a.created < b.created) return 1;
      else return 0;
    });
    //this.update();
    return this.channels.valueSeq();
  }

  onCreateNewChannel(channel = {}) {
    this.addChannel(_.get(channel, "_id"), channel);
    this.setActivatedChannel(_.get(channel, "_id"));
    this.update();
  }

  update() {
    this.app.forceUpdate();
  }
}
