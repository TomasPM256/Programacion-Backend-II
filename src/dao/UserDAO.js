
import User from '../models/User.js';
export default class UserDAO {
  getByEmail = email => User.findOne({ email });
  getById = id => User.findById(id);
  updatePassword = (id, pass) => User.findByIdAndUpdate(id, { password: pass });
}
