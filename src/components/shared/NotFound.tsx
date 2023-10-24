import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <Container style={{color: 'var(--foreground-color)'}}>
            <h1>Oops! You seem to be lost.</h1>
            <p>Here are some helpful links:</p>
            <Link to='/'>Home</Link>
        </Container>
    )
}