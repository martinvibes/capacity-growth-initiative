import mongoose, { Schema, Document } from 'mongoose';

export interface ICarouselImage extends Document {
  id: string;
  imageUrl: string;
  caption?: string;
  alt?: string;
}

const CarouselImageSchema: Schema = new Schema({
  id: { type: String, required: true, unique: true },
  imageUrl: { type: String, required: true },
  caption: { type: String },
  alt: { type: String },
}, {
  timestamps: true,
});

// Prevent duplicate model registration
const CarouselImage = mongoose.models.CarouselImage || mongoose.model<ICarouselImage>('CarouselImage', CarouselImageSchema);

export default CarouselImage;
