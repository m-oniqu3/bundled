import Button from "@/components/Button";
import GoogleButton from "@/components/GoogleButton";
import { registerUser } from "@/services/auth-services";
import { registerFormSchema, RegisterFormSchema } from "@/utils/register";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

function Register() {
  const form = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const {
    register,
    handleSubmit,

    formState: { errors, isSubmitting, isValid },
  } = form;

  const onSubmitForm: SubmitHandler<RegisterFormSchema> = async (data) => {
    console.log(data);

    try {
      const response = await registerUser(data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="w-full space-y-1 " onSubmit={handleSubmit(onSubmitForm)}>
      <div className="space-y-1">
        <label htmlFor="name" className="text-xs ">
          Name
        </label>
        <input
          {...register("name")}
          className="bg-zinc-50 font-light text-xs h-8 w-full rounded-md px-2 focus:outline-none placeholder:text-xs placeholder:font-light"
          placeholder="Sakamoto Taro"
        />

        <p className="input-error">{errors.name?.message}</p>
      </div>

      <div className="space-y-1">
        <label htmlFor="email" className="text-xs ">
          Email
        </label>
        <input
          {...register("email")}
          className="bg-zinc-50 font-light text-xs h-8 w-full rounded-md px-2 focus:outline-none placeholder:text-xs placeholder:font-light"
          placeholder="staro@dsakamotodays.com"
        />

        <p className="input-error">{errors.email?.message}</p>
      </div>

      <div className="space-y-1">
        <label htmlFor="password" className="text-xs ">
          Password
        </label>
        <input
          {...register("password")}
          className="bg-zinc-50 font-light text-xs h-8 w-full rounded-md px-2 focus:outline-none placeholder:text-xs placeholder:font-light"
          placeholder="••••••••"
          type="password"
        />

        <p className="input-error">{errors.password?.message}</p>
      </div>

      <Button
        className="bg-zinc-700 text-white w-full"
        type="submit"
        disabled={isSubmitting || !isValid}
      >
        {isSubmitting ? "Loading" : "Submit"}
      </Button>

      <hr className=" text-zinc-100 my-4" />

      {/* google button */}

      <GoogleButton callback={() => console.log("google")} />
    </form>
  );
}

export default Register;
