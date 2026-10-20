import styled from "styled-components";
import { Link } from 'react-router-dom';

import StatsSection from "./StatsSection";
 const HeroWrapper=styled.div`
    width: 100%;
    background-color: #05214c;
    background: 
    /* inear-gradient(to right ,rgba(255,255,255,0.01)1px ,transparent 1px  ), */
linear-gradient(135deg ,#061630 0%,#091f3d 50%,#122b54 100%  );

 `;
const HeroContainer=styled.section`
    max-width: 1200px;

    padding: 60px 24px;

   display :flex ;
   grid-template-columns: repeat(1,minmax(0,1fr));
   gap: 40px;
   align-items: center;

@media (max-width: 1024px){
   grid-template-columns: repeat(2,minmax(0,1fr));

}
`;
const HeroContent=styled.div`
    display: flex;
    position: relative;
    left: 100px;
    padding: 100px;
    width: 50%;
    flex-direction: column;
    gap: 24px;
    text-align: left;

` ;
const HeroTitle=styled.h1`
    font-size: 2.4rem;
    color: white;
    font-weight: 800;
    line-height: 1.3;
    letter-spacing: 7px;
    margin: 0;
@media (max-width: 1024px){
    font-size: 3.5rem;

}
`;
const HighLineText=styled.span`
    color: #22c55e;
`;
const HeroDescription=styled.p`
    color: #9ca3af;
    font-size: 1.25rem;
    max-width: 36rem;
    line-height: 1.6;
    margin: 0;


`;
const BtnGroup=styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px ;
    padding-top: 8px;

`;
const PrimaryLink=styled(Link)`
    background-color: #22c55e;
    color: #000000;
    font-weight: 600;
    padding: 12px 24px;
    border-radius:8px ;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: all 0.2 ease;
&:hover{
    background-color: #16a34a;
}
`;
const SecondaryBtn=styled(Link)`
      background-color: transparent;
    color: #ffffff;
    font-weight: 600;
    padding: 12px 24px;
    border-radius:8px ;
    border: 1px solid #374151;
    cursor: pointer;
    transition: all 0.2 ease;
    &:hover{
        background-color: #6b7280;
    }
`;
const HeroSection=()=>{
return(
    <HeroWrapper>
    <HeroContainer>
    <HeroContent>
    <HeroTitle>
                Powring The Future  <br/>
                With <HighLineText> smart <br/> Technologe</HighLineText> 
            </HeroTitle>
            <HeroDescription>
                we build AI-drive softwaer robotict systems and intellgent 
            </HeroDescription>
            <BtnGroup>
                <PrimaryLink to="/products"><span></span> Explore proudect  </PrimaryLink>
                <SecondaryBtn to="/quiz">Take the Quiz</SecondaryBtn>
            </BtnGroup>
        </HeroContent>
        <StatsSection/>
    </HeroContainer>
    </HeroWrapper>
)}
export default HeroSection;
