import {Container} from './styles'


export function SubTitle({title, iconSrc}){
    return(
        <Container>
        <h2>
          <img src={iconSrc} alt={title} /> {title}
        </h2>
      </Container>
    )
}