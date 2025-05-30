import { Model, model, models, Schema } from "mongoose";

interface publicJournalDocument {
  title: string;
  text: string;
}

const publicJournalSchema = new Schema<publicJournalDocument>(
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

const PublicJournal =
  models.PublicJournal || model("PublicJournal", publicJournalSchema);

export default PublicJournal as Model<publicJournalDocument>;
