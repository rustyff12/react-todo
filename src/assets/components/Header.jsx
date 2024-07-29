import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
export default function Header() {
    /* function handleClick() {
        console.log("Clicked");
    } */
    return (
        <header className="header">
            <div className="header-logo">
                <FontAwesomeIcon
                    className="header-logo--icon"
                    icon={faSquareCheck}
                />
                <h1 className="header-logo--title">Todo App</h1>
            </div>
            {/* <button className="header-menu" type="button">
                <FontAwesomeIcon
                    className="header-menu--icon"
                    icon={faBars}
                    onClick={handleClick}
                />
            </button> */}
        </header>
    );
}
