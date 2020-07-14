import mongoose from "mongoose";

const loanInfoSchema = new mongoose.Schema({
  LoanRange: {
    type: String,
  },
  BusinessName: {
    type: String,
  },
  Address: {
    type: String,
  },
  City: {
    type: String,
  },
  State: {
    type: String,
  },
  Zip: {
    type: Number,
  },
  NAICSCode: {
    type: Number,
  },
  BusinessType: {
    type: String,
  },
  RaceEthnicity: {
    type: String,
  },
  Gender: {
    type: String,
  },
  Veteran: {
    type: String,
  },
  NonProfit: {
    type: String,
  },
  JobsRetained: {
    type: String,
  },
  DateApproved: {
    type: Number,
  },
  Lender: {
    type: String,
  },
  CD: {
    type: String,
  }
});

loanInfoSchema.index({ LoanRange: 1, BusinessName: 1 });

export const LoanInfo = mongoose.model("loanInfo", loanInfoSchema, "loaninfos");
