import { Container } from "react-bootstrap";

const CustomContainer = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default CustomContainer;