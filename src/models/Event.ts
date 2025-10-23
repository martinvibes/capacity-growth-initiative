import mongoose, { Schema, Document } from 'mongoose';

export interface IEvent extends Document {
  id: string;
  title: string;
  date: string;
  time?: string;
  location?: string;
  locationType?: "zoom" | "facebook" | "venue";
  description?: string;
  image: string;
}

const EventSchema: Schema = new Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String },
  location: { type: String },
  locationType: { type: String, enum: ['zoom', 'facebook', 'venue'] },
  description: { type: String },
  image: { type: String, required: true },
}, {
  timestamps: true,
});

// Prevent duplicate model registration
const Event = mongoose.models.Event || mongoose.model<IEvent>('Event', EventSchema);

export default Event;
