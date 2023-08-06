import { Link } from 'react-router-dom'

function myButton() {
    return (
        <Link to="/">
            <button>Click to go back!</button>
        </Link>
    );
}


export default myButton