import Button from "../../node_modules/react-bootstrap/esm/Button";
import './BannerButton.css';

type BannerButtonProps = {
  formSubmitted: boolean;
  onClick: () => void;
}

export const BannerButton = ({formSubmitted, onClick}: BannerButtonProps) => {
  const buttonText = formSubmitted ? 'Send Another Message' : 'Get In Touch';
  return <Button className={'banner-button'} onClick={onClick}>{buttonText}</Button>
}