type CardProps = {
    srcImage?: string;
    altImage?: string;
    className?: string;
};

export default function Card({ altImage = "Imagem ilustrativa", srcImage, className }: CardProps) {
    return (
    <img src={srcImage} alt={altImage} className={`rounded-lg ${className}`}/>
  )
}