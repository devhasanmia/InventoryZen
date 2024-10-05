type TButton = {
  type: "button" | "submit" | "reset";
  background: string;
  text: string;
  onChange?: () => void;
};

const Button = ({ type, background, text, onChange }: TButton) => {
  return (
    <button
      type={type}
      onChange={onChange}
      className={`w-full bg-${background}-500  text-white py-2 px-4  rounded-lg shadow-md hover:bg-${background}-600 transition duration-300`}
    >
      {text}
    </button>
  );
};

export default Button;
