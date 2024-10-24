import mongoose from "mongoose";

const SkillSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  imaeURL: {
    type: String,
    required: true,
  },
});

const SkillModel = mongoose.model("Skill", SkillSchema);

export default SkillModel;
