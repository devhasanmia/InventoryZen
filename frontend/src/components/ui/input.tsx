import { UseFormRegisterReturn } from "react-hook-form";

type TInput = {
  type:
    | "button"
    | "submit"
    | "reset"
    | "text"
    | "password"
    | "email"
    | "number";
  placeholder: string;
  register?: UseFormRegisterReturn;
};

const Input = ({ type, placeholder, register }: TInput) => {
  return (
    <input
      {...(register || {})}
      type={type}
      className={`mt-1 focus:ring-2 focus:ring-[#1677ff] block w-full border border-gray-300 rounded-md p-2 focus:outline-none`}
      placeholder={placeholder}
      required={false}
    />
  );
};

export default Input;
