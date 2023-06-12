import { Link } from "react-router-dom"

const StartPage = () => {
    return (
        <>
            <h1>StartPage</h1>
            <Link to='/play'><button>Play</button></Link>
        </>
    )
}

export default StartPage