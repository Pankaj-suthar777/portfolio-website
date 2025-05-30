import { Model, model, models, Schema } from "mongoose";

interface privateJournalDocument {
  title: string;
  text: string;
}

const privateJournalSchema = new Schema<privateJournalDocument>(
  {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const PrivateJournal =
  models.PrivateJournal || model("PrivateJournal", privateJournalSchema);

export default PrivateJournal as Model<privateJournalDocument>;
