import React , {Component} from 'react';
import axios from 'axios';
import {Container ,Img,Headerimg,TitleHeaderImg,BtnHeaderImg,ImgContainer,ImgOverlay} from './creations';
class  Creations extends Component {
   state={
    images:[],
    icons:[]
}
    componentDidMount() {
       axios.get("./app.json").then(
           (res)=>{
            let images = res.data[0];
            let icons= res.data[1];
            this.setState({
            images,
            icons
    })
           }
       )
   }

    
   render(){
    let images_srcs = this.state.images;
    let  img = images_srcs.map((ele,index)=>{
                return(
                    <>
                      <ImgContainer key={index}>
                        <Img src={ele} alt="ele"/>
                        <ImgOverlay>
                        <span>
                            {
                                ele.slice(ele.indexOf('-')+1).slice("jpg",-4).replace("-"," ")
                                }
                        </span>
                        </ImgOverlay>

                    </ImgContainer>
                    </>
                  
                )
     })
    return(
      <>
     
        <div>
             <Headerimg>
            <TitleHeaderImg>our creations</TitleHeaderImg>
            <BtnHeaderImg>see all</BtnHeaderImg>
              </Headerimg>
              <Container>
              {img}
              </Container>
        </div>
        </>
    )
   }
};
export default Creations;
