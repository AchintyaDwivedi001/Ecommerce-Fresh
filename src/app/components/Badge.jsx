const Badge = ({ text, variant = "red", className = "" }) => {
  const variants = {
    red: "bg-red-500 text-white",
    blue: "bg-blue-500 text-white",
    green: "bg-green-500 text-white",
    yellow: "bg-yellow-500 text-black",
  };

  return (
    <span className={`px-2 py-1 text-xs font-bold rounded ${variants[variant]} ${className}`}>
      {text}
    </span>
  );
};

export default Badge;