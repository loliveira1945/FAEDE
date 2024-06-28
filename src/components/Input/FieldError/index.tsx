type FieldErrorProps = {
    children: React.ReactNode;
    show?: boolean;
};

export default function FieldError({ children, show = false }: FieldErrorProps) {
  return(
    <p className={`m-2 ${show ? 'visible' : 'invisible'} text-pink-600 text-sm`}>
      {children}
    </p>
  )
}