import CompanyInfo from '../models/CompanyInfo.js';

// Create a new company info
export const createCompanyInfo = async (req, res) => {
  try {
    const newCompanyInfo = new CompanyInfo(req.body);
    const savedCompanyInfo = await newCompanyInfo.save();
    res.status(201).json(savedCompanyInfo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all company info
export const getAllCompanyInfo = async (req, res) => {
  try {
    const companyInfos = await CompanyInfo.find();
    res.status(200).json(companyInfos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a single company info by ID
export const getCompanyInfoById = async (req, res) => {
  try {
    const companyInfo = await CompanyInfo.findById(req.params.id);
    if (!companyInfo) {
      return res.status(404).json({ error: 'Company info not found' });
    }
    res.status(200).json(companyInfo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a company info by ID
export const updateCompanyInfo = async (req, res) => {
  try {
    const updatedCompanyInfo = await CompanyInfo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedCompanyInfo) {
      return res.status(404).json({ error: 'Company info not found' });
    }
    res.status(200).json(updatedCompanyInfo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a company info by ID
export const deleteCompanyInfo = async (req, res) => {
  try {
    const deletedCompanyInfo = await CompanyInfo.findByIdAndDelete(
      req.params.id
    );
    if (!deletedCompanyInfo) {
      return res.status(404).json({ error: 'Company info not found' });
    }
    res.status(200).json({ message: 'Company info deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
