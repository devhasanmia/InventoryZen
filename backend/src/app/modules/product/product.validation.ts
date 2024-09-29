import { z } from "zod";

const TUnit = z.enum([
  "পিস", // Piece or Unit Count
  "কেজি", // Kilogram (Weight)
  "মণ", // Traditional Weight Unit
  "গ্রাম", // Gram (Weight)
  "টন", // Metric Ton (Weight)
  "লিটার", // Liter (Volume)
  "মিলিলিটার", // Milliliter (Volume)
  "ডজন", // Dozen (Count)
  "গজ", // Yard (Length)
  "মিটার", // Meter (Length)
  "সেন্টিমিটার", // Centimeter (Length)
  "ইঞ্চি", // Inch (Length)
  "ফুট", // Foot (Length)
  "কোয়ার্টার", // Quarter (Traditional Weight Unit)
  "পাউন্ড", // Pound (Weight)
  "আউন্স", // Ounce (Weight)
  "মিলিগ্রাম", // Milligram (Weight)
  "কিউবিক মিটার", // Cubic Meter (Volume)
  "গ্যালন", // Gallon (Volume)
  "কুইন্টাল", // Quintal (Traditional Unit)
  "বারেল", // Barrel (Volume, often used in oil)
  "প্যাকেট", // Packet (Package Unit)
  "বোতল", // Bottle (Package Unit)
]);

export const productValidationSchema = z.object({
  body: z.object({
    productName: z.string({
      required_error: "অনুগ্রহ করে প্রোডাক্টের নাম প্রদান করুন।",
      invalid_type_error: "প্রোডাক্টের নাম অবশ্যই একটি স্ট্রিং হতে হবে।",
    }),
    productBrand: z.string({
      required_error: "অনুগ্রহ করে প্রোডাক্টের ব্র্যান্ড প্রদান করুন।",
      invalid_type_error: "প্রোডাক্টের ব্র্যান্ড অবশ্যই একটি স্ট্রিং হতে হবে।",
    }),
    productCategory: z.string({
      required_error: "অনুগ্রহ করে প্রোডাক্টের ক্যাটেগরি প্রদান করুন।",
      invalid_type_error: "প্রোডাক্টের ক্যাটেগরি অবশ্যই একটি স্ট্রিং হতে হবে।",
    }),
    unit: TUnit,
    SKU: z.string({
      required_error: "অনুগ্রহ করে প্রোডাক্টের SKU প্রদান করুন।",
      invalid_type_error: "প্রোডাক্টের SKU অবশ্যই একটি স্ট্রিং হতে হবে।",
    }),
  }),
});
