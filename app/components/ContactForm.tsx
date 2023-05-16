"use client";
import { useForm, SubmitHandler, FieldError } from "react-hook-form";

interface IFormInput {
  email: string;
  name: string;
  message: string;
}

const InputWrapper = ({
  children,
  label,
  error,
  errorMessage,
}: {
  children: React.ReactNode;
  label: string;
  error: FieldError | undefined;
  errorMessage: string | undefined;
}) => {
  return (
    <>
      <label htmlFor={label} className='mb-2 ml-1 block text-xs font-bold text-zinc-400'>
        {label}
      </label>
      <div
        className={`mb-2 rounded-md ${
          error
            ? "bg-red-400"
            : "bg-zinc-600 from-fuchsia-600 to-blue-600 transition-all focus-within:bg-gradient-to-br hover:bg-gradient-to-br"
        }  p-[1px]`}
      >
        {children}
      </div>
      <span
        className={`mb-4 ml-1 block text-xs font-bold  md:mb-4 ${
          error ? "text-red-400" : "cursor-default select-none text-transparent"
        }`}
      >
        {error ? errorMessage : "all good"}
      </span>
    </>
  );
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<IFormInput>({ mode: "onBlur" });
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  const registerOptions = {
    email: {
      required: "please enter an email",
      pattern: {
        value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        message: "please enter a valid email",
      },
    },
    name: { required: "please provide me with your name" },
    message: { required: "i'd prefer if you didn't send an empty message" },
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='h-max rounded-lg bg-gradient-to-br from-fuchsia-600 to-blue-600 p-[1px] align-bottom text-sm md:w-1/2'
    >
      <div className='rounded-lg bg-zinc-950 p-4 md:p-8'>
        <InputWrapper label='email' error={errors?.email} errorMessage={errors?.email?.message}>
          <input
            id='email'
            type='email'
            {...register("email", registerOptions.email)}
            className='block w-full rounded-md bg-zinc-950 p-3 text-zinc-50 outline-none placeholder:text-zinc-600'
          />
        </InputWrapper>
        <InputWrapper label='name' error={errors?.name} errorMessage={errors?.name?.message}>
          <input
            id='name'
            type='text'
            {...register("name", registerOptions.name)}
            className='block w-full rounded-md bg-zinc-950 p-3 text-zinc-50 outline-none placeholder:text-zinc-600'
          />
        </InputWrapper>
        <InputWrapper
          label='message'
          error={errors?.message}
          errorMessage={errors?.message?.message}
        >
          <textarea
            id='message'
            rows={7}
            {...register("message", registerOptions.message)}
            className='mb-0 w-full resize-none rounded-md border-none bg-zinc-950 p-3 align-bottom text-zinc-50 outline-none placeholder:text-zinc-600'
          ></textarea>
        </InputWrapper>
        <button
          id='submit'
          type='submit'
          disabled={!isDirty || !isValid}
          className='group mx-auto ml-auto block w-min md:mr-0'
        >
          <div className='rounded-md bg-transparent from-fuchsia-600 to-blue-600 p-[1px] group-disabled:bg-zinc-600 group-disabled:hover:bg-gradient-to-br'>
            <div className='rounded-md px-12 py-2 text-zinc-600 group-hover:text-transparent group-enabled:bg-indigo-600  group-enabled:text-zinc-50 group-disabled:cursor-not-allowed group-disabled:bg-zinc-900'>
              <span className='font-medium  group-hover:bg-gradient-to-br group-hover:from-fuchsia-600 group-hover:to-blue-600 group-hover:bg-clip-text  '>
                submit
              </span>
            </div>
          </div>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
