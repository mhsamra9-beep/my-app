import styled from "styled-components";

const CardContiner=styled.div`
    background: white;
    border-radius: 12px;
    padding: 30px ;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.5);
    margin-bottom: 20px;

`;
const QuestionText=styled.h3`
    font-size: 1.1rem;
    color: var(----color-text-main,#1a202c);
    margin-bottom: 20px ;
    font-weight: 600;

`;
const QuestionList=styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;

`;
const OptionLabel=styled.label`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 20px ;
    border-radius:8px ;
    transition: all 0.2s ease;
    cursor: ${props=>props.isSubmitted?"not-allowed":"pointer"};
    border: 1px solid ${ props=>{
        if(props.$isSubmitted){
            if(props.isCorrectOption)return "#10b981";
            if(props.isSelected && !props.isCorrectOption)return '#ef4444';

            return'#e2e8f0';
        }
        return props.isSelected?"#10b981":"#e2e8f0";

    }};
    background-color: ${ props=>{
        if(props.isSubmitted){
            if(props.isCorrectOption)return "#10b981";
            if(props.isSelected && !props.isCorrectOption)return '#ef4444';
            return "transparent";
        }
             
        return props.isSelected? "#10b981":"transparent";
    }};
    cursor: pointer;
transition: all 0.2 ease;
&:hover{
    border-color: ${props=>props.isSubmitted ? '':"#10b981"};
    background-color: ${props=>props.isSubmitted?"":"#f9fafd"};
}
`;
const RadioInput=styled.input`
    margin-right: 12px;
    accent-color: #10b981;
    transform: scale(1.5);
cursor: pointer;

`;
const OptionTextContiner=styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    gap: 12px;

`;
const StatusText=styled.span`
  font-size: 0.85rem  ;
  font-weight: 600;
  color: #10b981;

`;
const QuestionsCard=({q,seletedAnswer,isSubmitted,onOptionChange})=>{
    return(
        <CardContiner>
<QuestionText>{q.question}</QuestionText>
<QuestionList>
  { q.optinos && q.optinos.map((optino,index)=>{
const isSelected=seletedAnswer===optino;
const isCorrectOption=q.correctAnswer===optino;
return(
    <OptionLabel key={index}
    isSelected={isSelected}
    isCorrectOption={isCorrectOption}
    isSubmitted={isSubmitted}
    >
<OptionTextContiner>
    <RadioInput
    type="radio"
    name={`question-${q.id}`}
    checked={isSelected}
    disabled={isSubmitted}
    onChange={()=>onOptionChange(q.id,optino)}
    />
    <span>{optino}</span>
</OptionTextContiner>
{/* {isSubmitted&& isCorrectOption&& <StatusText>Correct</StatusText>} */}
    </OptionLabel>
) 

  })}  
</QuestionList>

        </CardContiner>
    )
}
export default QuestionsCard;