import { Schema, model } from 'mongoose';

const _schema = new Schema(
  {
    username: {
      type: String,
      index: true,
      required:true
    },
    password: {
      type: String,
      required:true
    },
    name: {
      type: String,
      required:true
    },
    email:{
      type: String,
      index: true,
      required:true
    },
    mobile:{
      type: String,
      index: true,
      required:true
    },
    status: {
      type: Boolean,
      default: true,
      index: true
    }
  },
  {
    timestamps: true
  }
);
_schema.index({ id: 1, status: 1 });
export default model('User', _schema);
