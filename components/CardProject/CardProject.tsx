import { Container, ImageWrapper, Title, Info, Link, Gradient } from "./CardProject.styles"
import Image from 'next/image'

type CardProjectProps = {
    project: {
        title: string
        image: string
        link: string
    }
}

export function CardProject({ project }: CardProjectProps){
    return(
        <Container>
            <ImageWrapper image={project.image}>
        <Gradient />
        </ImageWrapper>
            <Info>
                <Title>{project.title}</Title>
                <Link href={project.link} target="_blank">
                <Image src='/arrowRight.svg' alt="seta para direita" width={28} height={28} />
                </Link>
            </Info>  
        </Container>
    )
}