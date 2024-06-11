import NavigationItem from '../models/navigationModel.js';

export const getAllNavigationItems = async (req, res) => {
  try {
    const navigationItems = await NavigationItem.find();
    res.json(navigationItems);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const addNavigationItem = async (req, res) => {
  const { name, url } = req.body;
  try {
    const newItem = new NavigationItem({ name, url });
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
export const getNavigationItemById = async (req, res) => {
  try {
    const { id } = req.params;
    const navigationItem = await NavigationItem.findById(id);
    if (!navigationItem) {
      return res.status(404).json({ error: 'Navigation item not found' });
    }
    res.json(navigationItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
export const updateNavigationItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, url } = req.body;
    const updatedItem = await NavigationItem.findByIdAndUpdate(
      id,
      { name, url },
      { new: true, runValidators: true }
    );
    if (!updatedItem) {
      return res.status(404).json({ error: 'Navigation item not found' });
    }
    res.json(updatedItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
export const deleteNavigationItem = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedItem = await NavigationItem.findByIdAndDelete(id);
    if (!deletedItem) {
      return res.status(404).json({ error: 'Navigation item not found' });
    }
    res.json({ message: 'Navigation item deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
