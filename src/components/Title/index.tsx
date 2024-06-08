type TitleProps = {
    children?: string;
};

export default function Title({ children }: TitleProps) {
    return (
    <h1 className="text-center text-3xl font-bold pt-8">{children}</h1>
  )
}