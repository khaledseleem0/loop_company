import {Container,Img,Card,Title,ImgContainer}from './productss';
import  {  useEffect, useState } from 'react';
import {data} from '../dummy'
// import img  from './../images/desktop/image-curiosity.jpg';
export default function Products() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        setProducts(data[1])
    }
,[])

      
        return(
            <Container>
            
            {products.map((ele)=>{
                return(
                    <Card key={Math.random(1)}>
                        <ImgContainer>
                        <Img src={ele}/>
                        </ImgContainer>
                        <Title > img title </Title>
                    </Card>

                )
        })}
            </Container>
        )
    
}
