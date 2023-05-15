const ContactForm = () => {
  return (
    <form className='h-max rounded-lg bg-gradient-to-br from-fuchsia-600 to-blue-600 p-[1px] align-bottom text-sm md:w-1/2'>
      <div className='rounded-lg bg-zinc-950 p-4 md:p-8'>
        <label htmlFor='email' className='mb-2 ml-1 block text-xs font-bold text-zinc-400'>
          email
        </label>
        <div className='mb-4 rounded-md bg-zinc-600 from-fuchsia-600 to-blue-600 p-[1px] transition-all focus-within:bg-gradient-to-br hover:bg-gradient-to-br md:mb-8'>
          <input
            id='email'
            name='email'
            type='email'
            className='block w-full rounded-md bg-zinc-950 p-3 text-zinc-50 outline-none placeholder:text-zinc-600'
          />
        </div>
        <label htmlFor='name' className='mb-2 ml-1 block text-xs font-bold text-zinc-400'>
          name
        </label>
        <div className='mb-4 rounded-md bg-zinc-600 from-fuchsia-600 to-blue-600 p-[1px] transition-colors focus-within:bg-gradient-to-br hover:bg-gradient-to-br md:mb-8'>
          <input
            id='name'
            name='name'
            type='text'
            className='block w-full rounded-md bg-zinc-950 p-3 text-zinc-50 outline-none placeholder:text-zinc-600'
          />
        </div>
        <label htmlFor='message' className='mb-2 ml-1 block text-xs font-bold text-zinc-400'>
          how can i help you?
        </label>
        <div className='mb-4 rounded-md bg-zinc-600 from-fuchsia-600 to-blue-600 p-[1px] transition-all focus-within:bg-gradient-to-br hover:bg-gradient-to-br md:mb-8'>
          <textarea
            name='message'
            id='message'
            rows={7}
            className='mb-0 w-full resize-none rounded-md border-none bg-zinc-950 p-3 align-bottom text-zinc-50 outline-none placeholder:text-zinc-600'
          ></textarea>
        </div>
        <div className='group mx-auto ml-auto w-min rounded-md bg-zinc-600 from-fuchsia-600 to-blue-600 p-[1px] hover:bg-gradient-to-br md:mr-0 '>
          <button
            type='submit'
            disabled
            className='cursor-not-allowed rounded-md px-12 py-2 disabled:bg-zinc-900'
          >
            <span className='font-medium text-zinc-600 group-hover:bg-gradient-to-br group-hover:from-fuchsia-600 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent'>
              submit
            </span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
