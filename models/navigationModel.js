import mongoose from 'mongoose';

const navigationItemSchema = new mongoose.Schema({
  names: {
    type: String,
    required: true,
  },

  urls: {
    type: String,
    required: true,
  },
});

const NavigationItem = mongoose.model('NavigationItem', navigationItemSchema);

export default NavigationItem;
