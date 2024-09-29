// import { z } from "zod";

// export const customerValidationSchema = z.object({
//   customerName: z.string({
//     required_error:
//       "অনুগ্রহ করে গ্রাহকের নাম প্রদান করুন। এটি ফাঁকা রাখা যাবে না।",
//     invalid_type_error: "গ্রাহকের নাম অবশ্যই একটি স্ট্রিং হতে হবে।",
//   }),
//   mobileNumber: z
//     .number({
//       required_error: "অনুগ্রহ করে মোবাইল নম্বর প্রদান করুন।",
//       invalid_type_error: "মোবাইল নম্বর অবশ্যই একটি সংখ্যা হতে হবে।",
//     })
//     .int("মোবাইল নম্বর অবশ্যই একটি পূর্ণসংখ্যা হতে হবে।") // Ensuring it's an integer
//     .min(
//       10000000000,
//       "মোবাইল নম্বর অবশ্যই ১১ সংখ্যার হতে হবে। অনুগ্রহ করে সঠিক নম্বর প্রদান করুন."
//     )
//     .max(
//       99999999999,
//       "মোবাইল নম্বর অবশ্যই ১১ সংখ্যার হতে হবে। অনুগ্রহ করে সঠিক নম্বর প্রদান করুন."
//     ),
//   address: z
//     .string({
//       required_error: "ঠিকানা প্রদান বাধ্যতামূলক।",
//       invalid_type_error: "ঠিকানা অবশ্যই একটি স্ট্রিং হতে হবে।",
//     })
//     .min(3, "অনুগ্রহ করে সঠিক ঠিকানা লিখুন।"),
//   nid: z
//     .number()
//     .optional()
//     .refine((value) => !value || value > 0, {
//       message: "এনআইডি নম্বর সঠিক হতে হবে, অথবা এটি ফাঁকা রাখা যাবে।",
//     }),
//   due: z
//     .number()
//     .optional()
//     .refine((value) => !value || value >= 0, {
//       message: "বাকির পরিমাণ সঠিক হতে হবে, অথবা এটি ফাঁকা রাখা যাবে।",
//     }),
// });

// export type TCustomer = z.infer<typeof customerValidationSchema>;
