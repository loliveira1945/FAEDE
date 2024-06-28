type LabelProps = {
    children: React.ReactNode;
};

export default function Label({ children }: LabelProps) {
  return(
    <p className={`flex justify-start text-white text-lg`}>
        {children}
    </p>
  )
}