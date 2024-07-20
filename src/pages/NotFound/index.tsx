import { Box } from "@mui/material"
import Lottie from "components/Animation/Lottie"
import Title from "components/Title"
import { useParams } from "react-router-dom"
import * as NotFoundAnimation from "assets/animation/not_found.json";
import Container from "components/Container";
import Div from "components/Div";

const NotFound = () => {

    const params = useParams()

    return (
        <Container>
            <Title variant='h4'>Página "{params.pageName}" não encontrada</Title>
            <Div>
                <Lottie width='auto' height={400} isStopped={false} animationData={NotFoundAnimation} />
            </Div>
        </Container>
    )
}

export default NotFound