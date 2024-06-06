import mongoose from 'mongoose';

const conversationSchema = new mongoose.Schema (
  {
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
    ],
    masseges: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
        defaultValue: [],
      },
    ],
  },
  {timestamps:true}
);

const Conversation = mongoose.model("Conversation", conversationSchema);

export default Conversation;