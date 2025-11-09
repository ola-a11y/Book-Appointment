import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [role, setRole] = useState("Admin"); // Admin / Doctor
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // بيانات وهمية
  const users = {
    Admin: { email: "admin@test.com", password: "123456", redirect: "/admin/dashboard" },
    Doctor: { email: "doctor@test.com", password: "654321", redirect: "/doctor/dashboard" }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const user = users[role];

    if (email === user.email && password === user.password) {
      localStorage.setItem("isAuth", "true");
      localStorage.setItem("role", role); // نخزن الدور عشان نعرف هو Admin ولا Doctor
      navigate(user.redirect);
    } else {
      alert("❌ البريد أو كلمة المرور غير صحيحة");
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
        <p className="text-2xl font-semibold text-primary">
          {role} <span className="text-zinc-600">Login</span>
        </p>

        <div className="w-full">
          <p>Email</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>

        <div className="w-full">
          <p>Password</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>

        <button className="bg-primary text-white w-full py-2 rounded-md text-base">
          Login
        </button>

        {role === "Admin" ? (
          <p>
            Doctor Login?{" "}
            <span
              onClick={() => setRole("Doctor")}
              className="text-primary underline cursor-pointer"
            >
              Click here
            </span>
          </p>
        ) : (
          <p>
            Admin Login?{" "}
            <span
              onClick={() => setRole("Admin")}
              className="text-primary underline cursor-pointer"
            >
              Click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default AdminLogin;
