import { SubmitHandler, useForm } from "react-hook-form";
import { useCreateCategoryMutation } from "../../redux/api/api";
import Button from "../../components/ui/Button";
import { useEffect } from "react";
import Swal from "sweetalert2";
import Input from "../../components/ui/input";
import Label from "../../components/ui/Label";
type Inputs = {
  categoryName: string;
};

const AddCategory = () => {
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const [addCategory, { isSuccess }] = useCreateCategoryMutation();

  useEffect(() => {
    if (isSuccess) {
      Swal.fire({
        title: "নতুন গ্রাহক যোগ হয়েছে!",
        text: "গ্রাহকের তথ্যাদি ডাটাবেসে প্রবেশ করা হয়েছে!",
        icon: "success",
        confirmButtonText: "ঠিক আছে",
      }).then(() => {
        reset();
      });
    }
  }, [isSuccess, reset]);

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    addCategory(formData);
    reset();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-semibold text-gray-700 mb-8 text-center">
        ক্যাটাগরি যোগ করুন
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto"
      >
        <div className="mb-4">
          <Label name="categoryName" text="ক্যাটাগরির নাম" />
          <Input
            type="text"
            placeholder="ক্যাটাগরির নাম লিখুন"
            register={register("categoryName")}
          />
        </div>
        {/* Submit Button Start */}
        <Button type="submit" background="blue" text="ক্যাটাগরি যোগ করুন " />
        {/* Submit Button End */}
      </form>
    </div>
  );
};

export default AddCategory;
