import Button from "../../components/Button";
import { FieldValues, useForm } from "react-hook-form";

const RegisterForm = () => {
  const { register, handleSubmit } = useForm();

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
