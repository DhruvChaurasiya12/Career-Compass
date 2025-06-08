import Application from "../models/Application.js";

export const getApplications = async (req, res) => {
  const apps = await Application.find({userId: req.user._id});
  res.json(apps);
};

export const addApplication = async (req, res) => {
  const newApp = await Application.create({...req.body, userId: req.user._id});
  res.status(201).json(newApp);
};

export const updateApplication = async (req, res) => {
  const app = await Application.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(app);
};

export const deleteApplication = async (req, res) => {
  await Application.findByIdAndDelete(req.params.id);
  res.json({message: "Deleted"});
};
