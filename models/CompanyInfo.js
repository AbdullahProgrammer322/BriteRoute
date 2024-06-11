import mongoose from 'mongoose';

const companyInfoSchema = new mongoose.Schema(
  {
    logo: {
      type: Buffer,
      required: true,
    },
    whatsappNumber: {
      type: String,
      required: true,
    },
    MobileNumber: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    gmail: {
      type: String,
      required: true,
    },
    companyRegNumber: {
      type: String,
      required: true,
    },
    socialMedia: {
      facebook: {
        type: String,
        required: true,
      },
      instagram: {
        type: String,
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

const CompanyInfo = mongoose.model('CompanyInfo', companyInfoSchema);

export default CompanyInfo;
