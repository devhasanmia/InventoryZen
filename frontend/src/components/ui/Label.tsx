type TLabel = {
  name: string;
  text: string;
};

const Label = ({ name, text }: TLabel) => {
  return (
    <label htmlFor={`${name}`} className="block text-gray-700">
      {text}
    </label>
  );
};

export default Label;
