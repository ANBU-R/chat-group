import mongoose from "mongoose";

const ChannelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  users: {
    type: [mongoose.Types.ObjectId],
    ref: "User",
  },
});
export default mongoose.model("Channel", ChannelSchema);
