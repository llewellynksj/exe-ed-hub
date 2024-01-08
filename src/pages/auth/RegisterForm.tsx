import Button from "../../components/Button";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z
  .object({
    username: z
      .string()
      .min(3, { message: "Username must be at least 3 characters long" }),
    password1: z.string().min(6),
    password2: z.string().min(6),
  })
  .refine((data) => data.password1 === data.password2, {
    message: "Passwords must match!",
    path: ["password2"],
  });

type FormData = z.infer<typeof schema>;

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
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
        <label htmlFor="password1" className="form-label">
          Password
        </label>
        <input
          id="password1"
          type="password"
          className="form-control"
          {...register("password1")}
        />
        {errors.password1 && (
          <p className="text-danger">{errors.password1.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="password2" className="form-label">
          Confirm Password
        </label>
        <input
          id="password2"
          type="password"
          className="form-control"
          {...register("password2")}
        />
        {errors.password2 && (
          <p className="text-danger">{errors.password2.message}</p>
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
      </div>
    </form>
  );
};

export default RegisterForm;
