import { z } from "zod";

const stockValidationSchema = z.object({
  body: z
    .object({
      product: z.string({
        required_error: "পণ্য নাম পূরণ করা আবশ্যক।",
        invalid_type_error: "পণ্য নামের দৈর্ঘ্য সঠিক হতে হবে।",
      }),
      quantity: z
        .number({
          required_error: "এই ফিল্ডটি পূরণ করা আবশ্যক।",
          invalid_type_error: "পরিমাণ একটি সংখ্যা হতে হবে।",
        })
        .positive("পরিমাণ ০ এর চেয়ে বেশি হতে হবে।"),
      purchasePrice: z
        .number({
          required_error: "ক্রয় মূল্য পূরণ করা আবশ্যক।",
          invalid_type_error: "ক্রয় মূল্য একটি সংখ্যা হতে হবে।",
        })
        .positive("ক্রয় মূল্য ০ এর চেয়ে বেশি হতে হবে।"),
      salePrice: z
        .number({
          required_error: "বিক্রয় মূল্য পূরণ করা আবশ্যক।",
          invalid_type_error: "বিক্রয় মূল্য একটি সংখ্যা হতে হবে।",
        })
        .positive("বিক্রয় মূল্য ০ এর চেয়ে বেশি হতে হবে।"),
      discount: z
        .number()
        .min(0, "ছাড়ের মূল্য নেতিবাচক হতে পারবে না.")
        .default(0),
      totalPrice: z
        .number({
          required_error: "মোট মূল্য পূরণ করা আবশ্যক।",
          invalid_type_error: "মোট মূল্য একটি সংখ্যা হতে হবে।",
        })
        .default(0),
      dealer: z.string().min(3, "ডিলার নাম অন্তত ৩ অক্ষরের হতে হবে।"),
      cashPayment: z.number().min(0, "নগদ পেমেন্ট নেতিবাচক হতে পারবে না."),
      extraExpense: z
        .number()
        .min(0, "অতিরিক্ত খরচ নেতিবাচক হতে পারবে না.")
        .default(0),
    })
    .refine((data) => data.salePrice > data.purchasePrice, {
      message: "বিক্রয় মূল্য ক্রয় মূল্যের চেয়ে বেশি হতে হবে।",
      path: ["salePrice"],
    })
});

export default stockValidationSchema;
