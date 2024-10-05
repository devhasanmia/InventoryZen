import { Types } from "mongoose";

export type TUnit =
  | "পিস" // পিস (Piece or Unit Count)
  | "কেজি" // কিলোগ্রাম (Weight)
  | "মণ" // মণ (Traditional Weight Unit)
  | "গ্রাম" // গ্রাম (Weight)
  | "টন" // টন (Metric Ton)
  | "লিটার" // লিটার (Volume)
  | "মিলিলিটার" // মিলিলিটার (Volume)
  | "ডজন" // ডজন (Dozen)
  | "গজ" // গজ (Length)
  | "মিটার" // মিটার (Length)
  | "সেন্টিমিটার" // সেন্টিমিটার (Length)
  | "ইঞ্চি" // ইঞ্চি (Length)
  | "ফুট" // ফুট (Length)
  | "কোয়ার্টার" // কোয়ার্টার (Traditional Weight Unit)
  | "পাউন্ড" // পাউন্ড (Weight)
  | "আউন্স" // আউন্স (Weight)
  | "মিলিগ্রাম" // মিলিগ্রাম (Weight)
  | "লিটার" // লিটার (Volume)
  | "কিউবিক মিটার" // কিউবিক মিটার (Volume)
  | "গ্যালন" // গ্যালন (Volume)
  | "কুইন্টাল" // কুইন্টাল (Traditional Unit)
  | "বারেল" // বারেল (Volume, often used in oil)
  | "প্যাকেট" // প্যাকেট (Packet or Package Unit)
  | "বোতল"; // বোতল (Bottle)

export type TProduct = {
  productName: string;
  productBrand: string;
  productCategory: string;
  unit: TUnit;
  SKU: string;
};
