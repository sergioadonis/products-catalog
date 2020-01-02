const BaseModel = require('./baseModel');
const { PERSONS } = require('../contants');

// Person model.
class Person extends BaseModel {
  static get tableName() {
    return PERSONS;
  }

  static get relationMappings() {
    return {
      children: {
        relation: BaseModel.HasManyRelation,
        modelClass: Person,
        join: {
          from: 'persons.id',
          to: 'persons.parentId',
        },
      },
    };
  }
}

module.exports = Person;
