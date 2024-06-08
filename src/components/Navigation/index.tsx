import Button from "../Button";

export default function Navigation() {
    return (
      <nav className="flex flex-wrap justify-center items-center">
        <Button typeButton="button" routeButton='/aboutUs'>About us</Button>
        <Button typeButton="button" routeButton='/company'>Company</Button>
        <Button typeButton="button" routeButton='/trackOrder'>Track order</Button>
        <Button typeButton="button" routeButton='/contactUs'>Contact us</Button>
      </nav>
    )
  }