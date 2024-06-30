import Button from "../../Button";

type FormSuccessProps = {
    name: string;
    email: string;
};

const successStyles = 'flex flex-col items-center h-auto w-1/2 sm:w-full p-3 text-green-800 rounded-lg border border-green-50 bg-green-50';
const buttonSuccessStyles = 'w-auto m-2 p-3 rounded-lg font-bold whitespace-nowrap border border-customColorGreen transition-colors duration-300 ease-in-out hover:bg-customColorGreen hover:bg-gradient-to-l hover:from-transparent hover:via-transparent hover:to-customColorGreen hover:text-green-50';
const noticeStyles = `${successStyles} w-auto`;

export default function FormSuccess({ name, email }: FormSuccessProps) {

  return (
    <div className={successStyles}>
      <p>
        {`Hello `}
        <strong>{`${name}`}</strong>
        {`, your email has been sent successfully! Your protocol number is: `}
        <strong>{`4526176127`}</strong>.
        {`We will contact you shortly to resolve your case via email: `}
        <strong>{`${email}. `}</strong>
        {`Due to the pandemic, our deadline is 3 business days.`}
        <span className={noticeStyles}>
          <strong>{`Thank you for understanding!`}</strong>
          <strong>{`He cares for himself 😷😄`}</strong>
        </span>
      </p>
        <Button typeButton="button" className={buttonSuccessStyles} routeButton='/'>To Start</Button>
    </div>
  )
}