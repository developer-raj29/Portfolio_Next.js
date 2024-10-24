import mongoose from "mongoose";

const EducationSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  imageURL: {
    type: String,
    required: true,
  },
  standared: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
});

const EducationModel = mongoose.model("Education", EducationSchema);

export default EducationModel;