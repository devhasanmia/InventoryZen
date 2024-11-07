import { z } from "zod";

const customerValidationSchema = z.object({
  body: z.object({
    customerName: z.string({
      required_error:
        "অনুগ্রহ করে গ্রাহকের নাম প্রদান করুন। এটি ফাঁকা রাখা যাবে না।",
      invalid_type_error: "গ্রাহকের নাম অবশ্যই একটি স্ট্রিং হতে হবে।",
    }),
    mobileNumber: z
      .string({
        required_error: "অনুগ্রহ করে মোবাইল নম্বর প্রদান করুন।",
        invalid_type_error: "মোবাইল নম্বর অবশ্যই একটি স্ট্রিং হতে হবে।",
      })
      .regex(/^\d{11}$/, "মোবাইল নম্বর অবশ্যই ১১ সংখ্যার হতে হবে।"),
    address: z
      .string({
        required_error: "ঠিকানা প্রদান বাধ্যতামূলক।",
        invalid_type_error: "ঠিকানা অবশ্যই একটি স্ট্রিং হতে হবে।",
      })
      .min(3, "ঠিকানা অবশ্যই অন্তত ৩ অক্ষরের হতে হবে।"),
    nid: z
      .number()
      .optional()
      .refine((value) => !value || value > 0, {
        message: "এনআইডি নম্বর সঠিক হতে হবে, অথবা এটি ফাঁকা রাখা যাবে।",
      }),
    due: z
      .number()
      .optional()
      .refine((value) => !value || value >= 0, {
        message: "বাকির পরিমাণ সঠিক হতে হবে, অথবা এটি ফাঁকা রাখা যাবে।",
      }),
  }),
});

const customerUpdateValidationSchema = z.object({
  body: z.object({
    customerName: z.string({
      required_error:
        "অনুগ্রহ করে গ্রাহকের নাম প্রদান করুন। এটি ফাঁকা রাখা যাবে না।",
      invalid_type_error: "গ্রাহকের নাম অবশ্যই একটি স্ট্রিং হতে হবে।",
    }).optional(), // Make optional
    mobileNumber: z
      .string({
        required_error: "অনুগ্রহ করে মোবাইল নম্বর প্রদান করুন।",
        invalid_type_error: "মোবাইল নম্বর অবশ্যই একটি স্ট্রিং হতে হবে।",
      })
      .regex(/^\d{11}$/, "মোবাইল নম্বর অবশ্যই ১১ সংখ্যার হতে হবে।")
      .optional(), // Make optional
    address: z
      .string({
        required_error: "ঠিকানা প্রদান বাধ্যতামূলক।",
        invalid_type_error: "ঠিকানা অবশ্যই একটি স্ট্রিং হতে হবে।",
      })
      .min(3, "ঠিকানা অবশ্যই অন্তত ৩ অক্ষরের হতে হবে।")
      .optional(), // Make optional
    nid: z
      .string({
        required_error: "এনআইডি নম্বর প্রদান করুন।",
        invalid_type_error: "এনআইডি নম্বর অবশ্যই একটি স্ট্রিং হতে হবে।",
      })
      .optional(),
    due: z
      .number()
      .optional()
      .refine((value) => !value || value >= 0, {
        message: "বাকির পরিমাণ সঠিক হতে হবে, অথবা এটি ফাঁকা রাখা যাবে।",
      }),
  }),
});


export const CustomerValidation = {
  create: customerValidationSchema,
  update: customerUpdateValidationSchema,
}
export type TCustomer = z.infer<typeof customerValidationSchema>;
