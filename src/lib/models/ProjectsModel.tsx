import mongoose from "mongoose";
import SkillModel from "./SkillsModel";

const ProjectSchema = new mongoose.Schema({
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
  description: {
    type: String,
    required: true,
  },
  webLink: {
    type: String,
    required: true,
  },
  github_Link: {
    type: String,
    required: true,
  },
  skills: {
    type: String,
    ref: SkillModel,
  },
});

const ProjectsModel = mongoose.model("Project", ProjectSchema);

export default ProjectsModel;