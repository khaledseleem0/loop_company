import  {  useEffect, useState } from 'react';
import {data} from './../dummy'
import { Container, Img, Header, TitleHeaderImg, BtnHeaderImg, ImgContainer, ImgOverlay } from './creations';
export default function Creations() {
    const [creations, setCreations] = useState([]);

    useEffect(() => {
        setCreations(data[0])
    }
,[])


    return (<>

            <div className='container'>
                <Header>
                    <TitleHeaderImg>our creations</TitleHeaderImg>
                    <BtnHeaderImg>see all</BtnHeaderImg>
                </Header>
                <Container>
                    {

                        creations.map((ele, index) => {
                            return ( 
                                <>
                                    <ImgContainer key={index}>
                                        <Img src={(window.innerWidth < 600 ? "/images/mobile":"/images/desktop")+process.env.PUBLIC_URL+ele} alt="ele" />
                                        <ImgOverlay>
                                            <span>
                                                {
                                                    ele.slice(ele.indexOf('-') + 1).slice("jpg", -4).replace("-", " ")
                                                }
                                            </span>
                                        </ImgOverlay>

                                    </ImgContainer>
                                </>

                            )
                        })
                    }
                </Container>
            </div>
        </>
    )
}
