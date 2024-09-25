import { FiMenu } from "react-icons/fi";

interface Props {
  addClass: string;
}

const HamburgerIcon = ({ addClass }: Props) => {
  return <FiMenu strokeWidth="2.5px" size="40px" className={`p-0 m-0 lg:hidden ${addClass}`} />;
};

export default HamburgerIcon;
