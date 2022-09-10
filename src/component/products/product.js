import  React,{Component} from "react";
import {Container,Img,Card,Title,ImgContainer}from './products';
import axios from 'axios';
import img  from './../images/desktop/image-curiosity.jpg';
class Product extends Component{
    state={
        products:[]
    }

    componentDidMount(){
        axios.get("./app.json").then((res)=>{
            this.setState({
                products:res.data[2]
            })
        });
        
    }
    render(){
        const proudcts = this.state.products;
        let renderedpro = proudcts.map((ele)=>{
                return(
                    <Card key={Math.random(1)}>
                        <ImgContainer>
                        <Img src={ele}/>
                        </ImgContainer>
                        <Title > img title </Title>
                    </Card>

                )
        })
       let images =  document.querySelectorAll(".sc-hHftDr");
        return(
            <Container>
            
                    {renderedpro}
            </Container>
        )
    }
}
export default Product;