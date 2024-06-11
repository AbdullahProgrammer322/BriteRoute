import mongoose from 'mongoose';

const quoteSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    smallsuitcase: {
      type: String,
      required: true,
    },
    largesuitcase: {
      type: String,
      required: true,
    },
    eventtype: {
      type: String,
      required: true,
    },
    from: {
      type: [String],
      required: true,
    },
    to: {
      type: [String],
      required: true,
    },
    pickupDate: {
      type: Date,
      required: true,
    },
    pickupTime: {
      type: String,
      required: true,
    },
    numberOfPassengers: {
      type: Number,
      required: true,
    },
    additionalinfo: {
      type: String,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

const Quote = mongoose.model('Quote', quoteSchema);

export default Quote;
