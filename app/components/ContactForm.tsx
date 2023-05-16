"use client";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler, FieldError } from "react-hook-form";
import sendEmail from "../send-email";

export interface IFormInput {
  email: string;
  name: string;
  message: string;
}

const InputWrapper = ({
  children,
  label,
  forValue,
  error,
  errorMessage,
}: {
  children: React.ReactNode;
  label: string;
  forValue: string;
  error: FieldError | undefined;
  errorMessage: string | undefined;
}) => {
  return (
    <>
      <label htmlFor={forValue} className='mb-2 ml-1 block text-xs font-bold text-zinc-400'>
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
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid, isSubmitSuccessful },
  } = useForm<IFormInput>({ mode: "onBlur" });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setLoading(true);
    sendEmail(data.email, data.name, data.message).then((val) => {
      console.log(val);
    });
    setLoading(false);
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

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='h-max rounded-lg bg-gradient-to-br from-fuchsia-600 to-blue-600 p-[1px] align-bottom text-sm md:w-1/2'
    >
      <div className='rounded-lg bg-zinc-950 p-4 md:p-8'>
        <InputWrapper
          label='email'
          forValue='email'
          error={errors?.email}
          errorMessage={errors?.email?.message}
        >
          <input
            id='email'
            type='email'
            {...register("email", registerOptions.email)}
            className='block w-full rounded-md bg-zinc-950 p-3 text-zinc-50 outline-none placeholder:text-zinc-600'
          />
        </InputWrapper>
        <InputWrapper
          label='name'
          forValue='name'
          error={errors?.name}
          errorMessage={errors?.name?.message}
        >
          <input
            id='name'
            type='text'
            {...register("name", registerOptions.name)}
            className='block w-full rounded-md bg-zinc-950 p-3 text-zinc-50 outline-none placeholder:text-zinc-600'
          />
        </InputWrapper>
        <InputWrapper
          label='how can i help you?'
          forValue='message'
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
            <div className='flex items-center gap-2 rounded-md px-12 py-2 text-zinc-600 group-hover:text-transparent group-enabled:bg-indigo-600  group-enabled:text-zinc-50 group-disabled:cursor-not-allowed group-disabled:bg-zinc-900'>
              <span className='font-medium group-hover:bg-gradient-to-br group-hover:from-fuchsia-600 group-hover:to-blue-600 group-hover:bg-clip-text  '>
                submit
              </span>
              {loading && (
                <svg className='h-4 w-4 animate-spin' viewBox='3 3 18 18'>
                  <path
                    className='fill-indigo-900'
                    d='M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z'
                  ></path>
                  <path
                    className='fill-indigo-300'
                    d='M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z'
                  ></path>
                </svg>
              )}
            </div>
          </div>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
