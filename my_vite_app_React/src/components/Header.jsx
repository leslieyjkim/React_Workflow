/**
 * -Displays the title and the current user
 * -Has a logout button
 * @param {text, logout, user} props //I need to know who the current user is though. so added 'user'in props.
 * @returns 
 */


//'conditional rendering on Logout'
//if the user's logged in, that means,
//we need to know who the current user is though.
const Header = function (props) {

    return (
        <div className="Header">
            <div>{props.text}</div>
            {props.user && <button className="sign-out-button" onClick={props.logout}>Sign Out</button>} 
        </div>
    );
};


export default Header;