interface ButtonProps {
  children: React.ReactNode;
}
const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className="bg-emerald-600 px-5 py-3 rounded border-none text-lg font-light w-[max-content] text-white">
      {children}
    </button>
  );
};

export default Button;
