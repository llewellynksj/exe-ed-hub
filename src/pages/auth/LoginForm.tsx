import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";
import { useForm, FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { AxiosError } from "axios";

const schema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

type FormData = z.infer<typeof schema>;

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const navigate = useNavigate();
  const [error, setError] = useState("");

  const onSubmit = async (data: FieldValues) => {
    try {
      await axios.post("/dj-rest-auth/login/", data);
      navigate("/");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const axiosError = err as AxiosError;
        setError(axiosError.message);
      } else {
        setError("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="overflow-hidden p-4">
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            id="username"
            type="text"
            className="form-control"
            {...register("username")}
          />
          {errors.username && (
            <p className="text-danger">{errors.username.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="form-control"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-danger">{errors.password.message}</p>
          )}
        </div>
        <div>
          <Button
            onClick={() => console.log("submitted2")}
            textColor="bg-font"
            bgColor="secondary-bg"
            type="submit"
          >
            Submit
          </Button>
          {error && <p className="text-danger">{error}</p>}
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
