import styled from "styled-components";
import { FaRegStar } from "react-icons/fa6";
import { BsBox } from "react-icons/bs";
import { IoCheckboxOutline } from "react-icons/io5";
const FeaturesContainer=styled.section`
    /* background-color: #0f1922; */
    padding-top: 80px;
padding-bottom: 80px;

`;
const FeaturesGrid=styled.div`
max-width: 80rem;
margin-left: auto;
margin-right: auto;
padding-left: 24px;
padding-right: 24px;
display  :flex ;
/* grid-template-columns: repeat(1,minmax(0,1fr)); */
/* flex-direction: row; */
position: relative;
/* left: 100px; */
gap: 300px;
text-align: center;

@media (max-width:768px ) {
grid-template-columns: repeat(3,minmax(0,1fr));
}
`;
const Card =styled.div`
  display  :flex ;
  flex-direction: column;
  gap: 12px;
  
`;
const Icon=styled.div`
  font-size:1.4rem;  

`;
const Title=styled.h4`
  font-size  :1.24 ;
  font-weight: 700;
  letter-spacing: -0.024em;
  margin: 0;

`;
const Discription=styled.p`
  color :#9ca3af ;
  font-size: 0.78;
  max-width: 20rem;
  margin-left: auto;
margin-right: auto;
line-height: 1.65;
`;
const FeatuersCard=({icon,titile,discription })=>(
<Card>
    <Icon>{icon}</Icon>
    <Title>{titile}</Title>
    <Discription>{discription}</Discription>
</Card>

);
const FeaturesSection=()=>{
    const featuresData=[
        {id:1,icon:<IoCheckboxOutline color="#22c55e" />,titile:'Enterprice Security',discription:"AES-256 encryption and zero-log policy across all our platform services."},
        {id:2,icon:<BsBox color="#22c55e" />,titile:"Instant Delivery",discription:"Access your products immediately after purchase — no waiting, no friction."},
        {id:3,icon:<FaRegStar color="#22c55e" />,titile:"Top-Reated Support",discription:"24/7 expert support with an average response time under 2 hours."}
    ];
    return(
        <FeaturesContainer>
<FeaturesGrid>
    {featuresData.map((feature)=>(
        <FeatuersCard 
        key={feature.id}
        icon={feature.icon}
        titile={feature.titile}
        discription={feature.discription}
        />
    ))}
</FeaturesGrid>

        </FeaturesContainer>
    )
};
export default FeaturesSection;
