
export default class UserRepository {
  constructor(dao) {
    this.dao = dao;
  }
  getByEmail(email) { return this.dao.getByEmail(email); }
  getById(id) { return this.dao.getById(id); }
  updatePassword(id, pass) { return this.dao.updatePassword(id, pass); }
}
