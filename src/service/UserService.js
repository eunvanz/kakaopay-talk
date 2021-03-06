import UserDao from '../dao/UserDao'
import MessageDao from '../dao/MessageDao'

class UserService {
  constructor(firebase) {
    this.firebase = firebase
    this.dao = new UserDao(firebase)
    this.messageDao = new MessageDao(firebase)
  }

  getUserByUserId = userId => {
    return this.dao.readUserByUserId(userId)
  }

  getUser = userKey => {
    return this.dao.readUser(userKey)
  }

  postUser = user => {
    return this.dao.createUser(user)
  }

  getAllUser = () => {
    return this.dao.readAllUser()
  }

  putUser = (path, data) => {
    return this.dao.updateUser(path, data)
  }
}

export default UserService
