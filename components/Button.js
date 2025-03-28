export default function Button({ children, ...props }) {
    return (
      <button {...props} className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700">
        {children}
      </button>
    );
  }
  