function Button({ children, type }) {
  return (
    <button
      className={`${type ? "w-full" : "md:w-56"} w-full rounded-md bg-blue-600 px-4 py-2 text-blue-50 hover:bg-blue-400`}
    >
      {children}
    </button>
  );
}

export default Button;
