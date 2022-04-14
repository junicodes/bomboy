import styles from './Header.module.scss';
import { FaArrowDown } from "@react-icons/all-files/fa/FaArrowDown";
import { HeaderProps } from './Interfaces';


const Header = ({headerText, heroText, heroTextAuthor}: HeaderProps) => {

    return (
        <div data-testid="header-component" className={`${styles.container} h-20 w-full flex justify-between items-center`}>
           <img className={`h-54 w-40`} src="/images/logo.png" />
        </div>
    )
}

export default Header;
 