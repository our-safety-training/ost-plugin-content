// content-model.js - A mongoose model

const DefaultSchema = require('../../../../types/default.schema');
const ObjectIdType = require('../../../../types/objectId.type');
const supportedFiles = require('../../supportedFiles');

module.exports = function (app) {
  
  const mongooseClient = app.get('mongooseClient');
  const content = DefaultSchema(app);
  content.add({
    name: {
      type: String,
      unique: true,
      match: [/^[a-zA-Z0-9/-_.~]+$/, 'Invalid charaters used in filename.'],
      required: [true, 'A file name is required'],
    },
    groupId: ObjectIdType('groups', app),
    perms: [{
      type: String,
      maxLength: 256,
    }],
    bucket: {
      type: String,
      required: true,
      default: process.env.AWS_BUCKET_PRIVATE,
    },
    region: {
      type: String,
      required: true,
      default: process.env.AWS_REGION,
    },
    type: {
      type: String,
      required: [true, 'A file type is required'],
      enum: Object.keys(supportedFiles),
    },
  });

  return mongooseClient.model('content', content);
};
