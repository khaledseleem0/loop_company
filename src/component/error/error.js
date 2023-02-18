import {Container,Ancor,Containerimg,Heading} from  './errors.js';

 function Error(){
    return(
        <Container>
            <Containerimg style={{backgroundImage:`url(${process.env.PUBLIC_URL}/images/err.png)`}}>
            <Heading> Error 404, page not found now   </Heading>
            <Ancor to="/" >  let's go home  </Ancor>
            </Containerimg>
        

        </Container>
    )
}
export default Error;