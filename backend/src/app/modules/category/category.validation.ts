import { z } from "zod";

const create = z.object({
    body: z.object({
        categoryName: z.string({
            required_error: "দয়া করে ক্যাটেগরির নাম প্রদান করুন। এটি খালি রাখা যাবে না।",
            invalid_type_error: "ক্যাটেগরির নাম অবশ্যই একটি স্ট্রিং হতে হবে।",
        }).min(2, "ক্যাটেগরির নাম খালি রাখা যাবে না।")
    })
});

const update = z.object({
    body: z.object({
        categoryName: z.string({
            required_error: "দয়া করে ক্যাটেগরির নাম প্রদান করুন। এটি খালি রাখা যাবে না।",
            invalid_type_error: "ক্যাটেগরির নাম অবশ্যই একটি স্ট্রিং হতে হবে"
        }).optional()
    })
})


export const CategoryValidation = {
    create,
    update

}