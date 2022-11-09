getPrimaryKeyId = model => {
  if (realm.objects(model).max('_id')) {
    return realm.objects(model).max('_id') + 1;
  }
  return 1;
};

export default {TaskSchema, realm};
