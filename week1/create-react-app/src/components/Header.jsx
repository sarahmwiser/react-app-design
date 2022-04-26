import Navigation from "./Navigation.jsx"

const Header = ({links}) => {

    return (

        <header>
            <Navigation links={links} />
        </header>
    )
}

export default Header;