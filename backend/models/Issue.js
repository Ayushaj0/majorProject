import mongoose from 'mongoose';

const issueSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  issueType: { type: String, required: true },
  description: { type: String, required: true },
});

const Issue = mongoose.model('Issue', issueSchema);

export default Issue;
