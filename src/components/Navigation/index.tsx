import Button from "../Button";
import { useNavigate } from "react-router-dom";

export default function Navigation() {
  const history = useNavigate();
  const handleClick = (evento: React.MouseEvent<HTMLButtonElement>) => {
    const route = evento.currentTarget.getAttribute('data-route-button');
    if (route) {
      history(route);
    }
  };
    return (
      <nav className="flex flex-row justify-center items-center">
        <Button typeButton="button" onClick={handleClick} routeButton='/aboutUs'>About us</Button>
        {/* <Button typeButton="button" onClick={handleClick} routeButton='/company'>Company</Button> */}
        <Button typeButton="button" onClick={handleClick} routeButton='/trackOrder'>Track order</Button>
        <Button typeButton="button" onClick={handleClick} routeButton='/contactUs'>Contact us</Button>
      </nav>
    )
  }