import Button from "../Button";
import Title from "../Title";

const buttonStyles = 'w-1/5 m-2 p-3 rounded-lg font-bold whitespace-nowrap border border-customColorBlue hover:bg-customColorBlue';

export default function Forms() {
    return (
    <form className="flex flex-col flex-wrap items-center rounded-lg h-full w-9/12 my-16 bg-customColorPurple border border-customColorBlue">
        <Title>Still have any questions? Contact us!</Title>
        <Button 
          typeButton="submit"
          className={buttonStyles}>
            To send
        </Button>
    </form>
  )
}