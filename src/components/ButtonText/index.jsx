import { Container } from "./styles";

export function ButtonText({title, isAtive = false ,...rest}){
    return(
        <Container type="button" $isactive={isAtive} {...rest}>
            {title}            
        </Container>
    )
}