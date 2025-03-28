export default function Input({ label, ...props }) {
    return (
      <div className="mb-4">
        <label className="block text-white text-sm mb-2">{label}</label>
        <input {...props} className="w-full p-2 border rounded bg-gray-800 text-white" />
      </div>
    );
  }
  