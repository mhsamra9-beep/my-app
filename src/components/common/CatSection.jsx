import { Link } from "react-router-dom";
import styled from "styled-components";

const CatContiner=styled.section`
    background-color: #060949;
    padding-top: 96px;
    padding-bottom: 96px;


`;
const CatContent=styled.div`
  max-width  :48rem ;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  /* display: flex; */
  /* gap: 24px; */
  padding-left: 24px;
  padding-right: 24px;

`;
const CatTitle=styled.h2`
  font-size  :1.87rem ;
  color: white;
  font-weight: 700;
  letter-spacing: -0.025em;
  margin: 0;

`;
const CatDescription=styled.p`
    color: #9ca3af ;
    display: inline-block;
    max-width: 36rem;
    margin-left: auto;
    margin-right: auto;
    font-size: 1rem;
    line-height: 1.6;

`;
const BtnGroup=styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px ;
    padding-top: 8px;
    position: relative;
    left: 250PX;

`;
const PrimaryBtn=styled(Link)`
    background-color: #22c55e;
    color: #ffffff;
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
const CatSection=()=>{
    return(
        <CatContiner>
            <CatContent>
                <CatTitle>ready to get started  </CatTitle>
                <CatDescription>
                    join thousaent of team using DKUST solution to bulid, automate , and scale thier operations    
                </CatDescription>
                <BtnGroup>
                    <PrimaryBtn to="/register">creeat free account  </PrimaryBtn>
                    <SecondaryBtn to="/login">sgin  in </SecondaryBtn>
                </BtnGroup>
            </CatContent>
        </CatContiner>
    )
}
export default CatSection;
