const { Model } = require('objection');

class User extends Model {
  static get tableName() {
    return 'users';
  }
}

module.exports = User;
  
/*
✅ Purpose:
This defines the User model class that Objection will use to interact with the users table.
Later, you can use it like
*/