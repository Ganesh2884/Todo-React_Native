import Realm from 'realm';

const TaskSchema = {
  name: 'Task',
  properties: {
    _id: 'int',
    name: 'string',
    status: 'string?',
  },
  primaryKey: '_id',
};

let realm = new Realm({schema: [TaskSchema], schemaVersion: 1});

getPrimaryKeyId = model => {
  if (realm.objects(model).max('_id')) {
    return realm.objects(model).max('_id') + 1;
  }
  return 1;
};

export default {TaskSchema, realm};
