import styled from 'styled-components';

export const PageContainer = styled.div`
  max-width: 100%;
  margin: 0 ;
  background-color: #eee;
  padding: 0;
  font-family: sans-serif;
  min-height: 100vh;
`;
export const ContentWrapper=styled.div`
width: 1200px;
margin: 0 auto;
padding: 40px  20px;

`;
export const HeroSection=styled.div`
  background: linear-gradient(180deg, #0a192f 0%, #20427c 100%);
background-color: var(--color-secondry);
color: white;
text-align: center;
padding: 40px 40px;
position: relative;
/* bottom: 40px; */
width: auto;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  color: white;
  margin-bottom: 8px;
  backgroud-color:blue;
  
`;

export const Subtitle = styled.p`
  text-align: center;
  color: var(--color-text-muted);
  margin-bottom: 40px;
  line-height: 1.5;
background-color: var(--color-secondr);

`;

export const FilterBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 15px;
  position: relative;
  bottom: 10px;
`;
export const hr=styled.hr`
position: relative;
bottom: 40px;
`

export const CategoryButtons = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const CategoryBtn = styled.button`
  padding: 8px 16px;
  border-radius: 20px;
  border: 1px solid var(--color-border);
  background: ${props => props.active ? 'var(--color-primary)': 'var(--color-bg-light)'};
  color: ${props => props.active ? 'var(--color-bg-light)' : 'var(--color-text-muted)'};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${props => props.active ? 'var(--color-primary-hover)' : 'var(--color-border)'};
  }
`;

export const ViewActions = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  left: 80px;
  /* gap: 10px; */
`;

export const SortSelect = styled.select`
  color: var(--color-text-muted);
  font-size: 0.9rem;
  padding:8px 12px;
  border-radius:6px;
  border-color:#4a5568;
  position: relative;
  right: 15px;
  outline:none;
`;

export const ViewBtn = styled.button`
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  border: 1px solid var(--color-border);
  background: ${props => props.active ? 'var(--color-primary)' : 'var(--color-bg-light)'};
  color: ${props => props.active ? 'var(--color-border)' : 'var(--color-text-muted)'};
  cursor: pointer;
  
 
`;

export const ResultsCount = styled.div`
  color: var(--color-text-muted);
  font-size: 0.9rem;
  margin-bottom: 20px;
`;

export const ProductsGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  width: 100%;
  margin-top: 40px;
  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const ProductsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CardWrapper = styled.div`
  border: 1px solid var(--color-border);
  width: ${props=>props.isList?"100%":"400px"};
  border-radius: 12px;
  overflow: hidden;
  background: var(--color-border);
  background-color: white;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: ${props => props.isList ? 'row' : 'column'};
  padding: ${props => props.isList ? '20px' : '0'};
  gap: ${props => props.isList ? '20px' : '0'};
  align-items: ${props => props.isList ? 'center' : 'stretch'};
    overflow: hidden;

`;

export const ImageArea = styled.div`
  background: var(--color-secondry);
  height: ${props => props.isList ? '120px' : '180px'};
  width: ${props => props.isList ? '150px' : '100%'};
  min-width: ${props => props.isList ? '150px' : 'auto'};
  border-radius: ${props => props.isList ? '8px' : '0'};
  display: flex;
  position: relative;
  bottom:${props=>props.isList?"40px":'0'} ;
  align-items: center;
  justify-content: center;
  color: white;
  position: relative;
  top: ${props=>props.isList?"":""};
  .image-placholder{
    font-size: 2rem;
    color: var(--color-bg-light);
  }
`;

export const CardBadge = styled.span`
  position: absolute;
  top: ${props => props.isList ? '6px' : '12px'};
  left: ${props => props.isList ? '6px' : '12px'};
  background: var(--color-primary);
  color: white;
  padding: 4px 8px;
  font-size: 0.75rem;
  font-weight: bold;
  border-radius: 4px;
`;

export const CardContent = styled.div`
  padding: ${props => props.isList ? '0' : '20px'};
  flex-grow: 1;
  background-color:white;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ProductCategory = styled.span`
  font-size: 0.8rem;
  color: var(--color-text-muted);
`;

export const ProductTitle = styled.h3`
  margin: ${props => props.isList ? '2px 0 6px 0' : '4px 0'};
  font-size: ${props => props.isList ? '1.2rem' : '1.1rem'};
  color: #1a202c;
`;

export const ProductDescription = styled.p`
  font-size: 0.85rem;
  color: var(--color-text-muted);
  line-height: 1.4;
  margin: ${props => props.isList ? '0 0 8px 0' : '0'};
`;

export const RatingStars = styled.div`
  color: #ecc94b;
  position: relative;
  /* top: px; */
  font-size: 0.9rem;
`;
export const CustomButtom=styled.span`
position: relative;
left: ${props=>props.isList?'100px':"0"};

`;
 export const RivewTextList=styled.span`
position: relative;
top: 20px;
`;

export const ReviewsText = styled.span`
  color: #718096;
  position: relative;
  bottom: 30px;
  right: 90px;
  /* overflow: hidden; */
  /* margin: 10px;/ */
  /* top: 10px; */
  margin-top: 10px;
  /* margin-left: 10px; */
  margin-bottom: 15px;
  .stars{
    position: relative;
    left: 20px;
  }
`;

export const ListHeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  display: flex;
  
  `;
  export const ListFooterRow = styled.div`
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 10px;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 15px;
  width: 100%;
`;

export const ProductPrice = styled.span`
  font-weight: bold;
  font-size: ${props => props.isList ? '1.3rem' : '1.2rem'};
  color: var(--color-primary-hover);
`;

export const PricePeriod = styled.span`
  font-size: 0.8rem;
  color: var(--color-text-muted);
  font-weight: normal;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: ${props => props.isList ? '8px' : '5px'};
  position: relative;
left: ${props=>props.isList?'730px':"0"};

`;

export const NoResults = styled.div`
  text-align: center;
  padding: 40px;
  color: var(--color-text-muted);
  font-size: 1.2rem;
`;
 export const FaStar=styled.span`
position: relative;
bottom: 20px;
`