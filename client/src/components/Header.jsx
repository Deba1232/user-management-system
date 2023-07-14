export default function Header() {
  return (
    <div className="w-[100%] relative flex items-center justify-center bg-[#2e343d] p-2">
      <h1 className="text-center text-[2rem] text-[#fff]">
        User Management System
      </h1>
      <button className="absolute right-[5rem] rounded-lg bg-[#3468a3] p-[0.3rem] text-[1rem] text-[#f6f5f5] hover:opacity-90 active:scale-90">
        + Add User
      </button>
    </div>
  );
}
