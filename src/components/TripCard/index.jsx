import {Container, Image, Description} from './styles'

export function TripCard({title, url, ...rest}){
    return(
        <Container>
           <Image  $url={url} {...rest} />
           <Description>{title}</Description>
        </Container>
    )
}