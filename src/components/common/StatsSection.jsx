import styled from "styled-components";

 const  StatsSection=()=>{
        
        const statsData=[
            {id:1,number:"12K",text:"Happy Clients"},
            {id:2,number:"340+",text:"project Delivered"},
            {id:3,number:"98%",text:"satfiction Rate"},
            {id:4,number:"24/7",text:"support Available"}
        ];
const StatsGrid =styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 16px;
    width: 500px;
    /* margin-left:100px; */
    position: relative;
    left: 400px;


`;
const Card=styled.div`
  background-color: rgba(180, 181, 182, 0.6); ;
  padding: 24px;
  border-radius: 8px;
border: 1px solid rgba(31,41,55,0.6);
padding-left: 70px;
text-align: left;

  
`;
const StatsNumber=styled.h3`
font-size  :1.87rem ;
font-weight: 700;
color:#22c55e ;
margin: 0;
 @media  (max-width: 1024px){
    font-size: 2.25rem;

 }
`;
const StatsText=styled.p`
    color: #9ca3af;
    font-size: 0.87rem;
    margin-top: 3px;
    margin-bottom: 0;

`;
const StatsCard=({text,number})=>(
    <Card>

    <StatsNumber>{number}</StatsNumber>
    <StatsText>{text}</StatsText>
    </Card>
);
    
        return(
            <StatsGrid>
                {statsData.map((stat)=>(
                    <StatsCard key={stat.id} number={stat.number} text={stat.text} />
                ))}
            </StatsGrid>
        )
        
    }

export default StatsSection;