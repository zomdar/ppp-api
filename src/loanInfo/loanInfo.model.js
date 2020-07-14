import mongoose from "mongoose";

const stateInfoSchema = new mongoose.Schema({
  states: {
    type: Array
  }
});

stateInfoSchema.index({});

export const StateInfo = mongoose.model("stateInfo", stateInfoSchema, 'stateinfo');
