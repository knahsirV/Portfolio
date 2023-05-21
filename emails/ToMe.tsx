import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

export const ToMe = ({
  name = "Vrishank",
  message = "Hi vrishank, i was wondering if you could help me with my project. I need help with the backend. It was cool meeting you at the hackathon.",
  email = " vrishank@vrishank.net",
}: {
  name: string;
  message: string;
  email: string;
}) => {
  return (
    <Html>
      <Head />
      <Preview>{message.length >= 90 ? message.slice(0, 89) : message}</Preview>
      <Tailwind>
        <Body className='mx-auto my-auto bg-white font-sans'>
          <Container className='mx-auto my-[40px] w-[465px] rounded-lg border-2 border-solid border-zinc-300 p-[20px]'>
            <Section className='my-[10px]'>
              <Container className=' h-[75px] w-[75px] rounded-full bg-indigo-400'>
                <Text className='rounded-full text-center text-[40px]'>👋</Text>
              </Container>
              <Heading className='mx-0 mb-0 p-0 text-center text-[28px] font-semibold text-indigo-600'>
                New message from {name}
              </Heading>
            </Section>
            <Section className='my-0 font-medium'>
              <Text className='text-[14px] leading-[10px] text-black'>
                {"Here's what they said:"}
              </Text>
              <Text className='rounded-md bg-indigo-100 p-[15px] text-[14px] italic leading-[30px] text-indigo-900'>
                {message}
              </Text>
              <Text className=' text-[14px] leading-[30px] text-black'>
                Respond to them at{" "}
                <Link href={`mailto: ${email}`} className='italic text-indigo-600 underline'>
                  {email}
                </Link>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ToMe;
