import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

export const ToVisitor = ({
  name = "Vrishank",
  message = "Hi vrishank, i was wondering if you could help me with my project. I need help with the backend. It was cool meeting you at the hackathon.",
}: {
  name: string;
  message: string;
}) => {
  return (
    <Html>
      <Head />
      <Preview>Thanks for reaching out, {name}</Preview>
      <Tailwind>
        <Body className='mx-auto my-auto bg-white font-sans'>
          <Container className='mx-auto my-[40px] w-[465px] rounded-lg border-2 border-solid border-zinc-300 p-[20px]'>
            <Section className='my-[10px]'>
              <Container className=' h-[75px] w-[75px] rounded-full bg-indigo-400'>
                <Text className='rounded-full text-center text-[40px]'>👋</Text>
              </Container>
              <Heading className='mx-0 mb-0 p-0 text-center text-[28px] font-semibold text-indigo-600'>
                Thanks for reaching out!
              </Heading>
            </Section>
            <Section className='my-0 font-medium'>
              <Text className='text-[14px] leading-[10px] text-black'>Hi {name},</Text>
              <Text className='text-[14px] leading-[30px] text-black'>
                {"I'm"} so glad you reached out! {"I'll"} get back to you as soon as I can. If you
                have anything else to say in the meantime, feel free to reply to reply to this
                email, or send me another email at{" "}
                <Link
                  href='mailto:vrishank@utexas.edu'
                  className='italic text-indigo-600 underline'
                >
                  vrishank@utexas.edu
                </Link>
              </Text>
            </Section>
            <Hr className='mx-0 my-[22px] w-full rounded border border-solid border-zinc-300' />
            <Text className=' text-[14px] font-semibold leading-[10px] text-black'>
              {"Here's a copy of the message you sent me:"}
            </Text>
            <Text className='rounded-md bg-indigo-100 p-[10px] text-[13px] font-medium italic leading-[24px] text-indigo-900'>
              {message}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ToVisitor;
