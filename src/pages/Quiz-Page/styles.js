import styled from "styled-components";

 export const PageContainer=styled.div`
background-color: var(--color-bg-light);
font-family: var(--primary-font);
min-height: 100vh;
padding-bottom:50px ;

`;
 export const HeroSection=styled.div`
  background: linear-gradient(180deg, #0a192f 0%, #20427c 100%);
background-color: var(--color-secondry);
color: white;
text-align: center;
padding: 60px 20px;

`;
export const HeroTitel=styled.h2`
font-size: 2.24rem;
font-weight: 700;
margin-bottom: 15px;

`;
export const HeroSubtitle=styled.p`
color: #dbd9d9;
font-size: 1rem;
margin-bottom: 25px;

`;
export const ScorBadge=styled.div`
background-color: #ef4444;
color: white;
display: inline-block;
padding: 10px 30px;
border-radius: 25px;
font-weight: bold;

`;
export const SectionTitel=styled.h3`
text-align: center;
color: var(--color-text-main);
font-size: 1.8rem;
margin: 40px 0 20px 0;

`;
export const QuizBode=styled.div`
max-width: 600px;
margin: 0 auto;
padding: 0 20px;
display: flex;
flex-direction: column;
gap: 25px;

`;
export const SubButton=styled.button`
background-color: #10b981;
color: white;
padding: 14px;
border: none;
position: relative;
left: 140px;
border-radius: 8px;
font-size: 1rem;
font-weight: bold;
cursor: pointer;
margin-top: 15px;
width: 45%;
&:hover{
    background-color: #059669;

}
`;
export const ResultBanner=styled.div`
background-color: #fee2e2;
border-radius: 12px;
padding: 25px ;
text-align: center;

`;
export const ActionButton=styled.button`
background-color: ${props=> props.primary?'white':'#10b981'};
color: ${props=>props.primary?'white':"white"};
border: ${props=>props.primary?'none':'1px solid #e5e7eb'};
padding: 14px 30px;
border-radius: 6px;
font-weight: bold;
cursor: pointer;
margin-top: 10px;
width: 45%;
position: relative;
left: 140px;
`;
