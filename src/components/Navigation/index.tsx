import Button from "../Button";

const buttonStyles = 'w-auto m-2 p-3 rounded-lg font-bold whitespace-nowrap border border-customColorBlue hover:border-customColorPurple';

export default function Navigation() {
    return (
      <nav className="flex flex-wrap justify-center items-center">
        <Button typeButton="button" routeButton='/aboutUs' className={buttonStyles}>About us</Button>
        <Button typeButton="button" routeButton='/company' className={buttonStyles}>Company</Button>
        <Button typeButton="button" routeButton='/trackOrder' className={buttonStyles}>Track order</Button>
        <Button typeButton="button" routeButton='/contactUs' className={buttonStyles}>Contact us</Button>
      </nav>
    )
  }