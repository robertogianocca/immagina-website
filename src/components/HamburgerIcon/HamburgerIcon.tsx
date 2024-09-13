import { FiMenu } from "react-icons/fi";

interface Props {
  addClass: string;
}

const HamburgerIcon = ({ addClass }: Props) => {
  return <FiMenu size="40px" className={`lg:hidden ${addClass}`} />;
};

export default HamburgerIcon;
