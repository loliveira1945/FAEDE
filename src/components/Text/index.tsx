type TextProps = {
    children?: string;
};

export default function Text({ children }: TextProps) {
    return (
    <h1 className="p-6">{children}</h1>
  )
}