import { Model, model, models, Schema } from "mongoose";

export interface PortfolioVisitDocument {
  _id: string;
  ipAddress: string;
  path: string;
  userAgent?: string;
  createdAt: Date;
  updatedAt: Date;
}

const portfolioVisitSchema = new Schema<PortfolioVisitDocument>(
  {
    ipAddress: {
      type: String,
      required: true,
      trim: true,
    },
    path: {
      type: String,
      required: true,
      trim: true,
    },
    userAgent: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

portfolioVisitSchema.index({ createdAt: -1 });
portfolioVisitSchema.index({ ipAddress: 1, path: 1, createdAt: -1 });

const PortfolioVisit =
  models.PortfolioVisit || model("PortfolioVisit", portfolioVisitSchema);

export default PortfolioVisit as Model<PortfolioVisitDocument>;
