import { useState } from "react"
import quizQuestion from "./quiz-Data";
import { ActionButton, HeroSection, HeroSubtitle, HeroTitel, PageContainer, QuizBode, ResultBanner, ScorBadge, SectionTitel, SubButton } from "./styles";
import QuestionsCard from "../../components/common/Question-Card";
import AppTemplate from "../../components/app-template";

const QuizPage=()=>{
const [seletedAnswer,setSeletedAnswer]=useState({});
const[isSubmitted,setIsSubmitted]=useState(false);
const [scor,setScor]=useState(0); 

const HandelOptionChange=(questionId,option)=>{
    if(isSubmitted)return;
    setSeletedAnswer({...seletedAnswer,[questionId]:option});

} ;
const HandelSubmit=()=>{
    if(Object.keys(seletedAnswer).length<quizQuestion.length){
        return;

    }
    let currentScore=0;
    quizQuestion.forEach((q)=>{
        if(seletedAnswer[q.id]===q.correctAnswer){
            currentScore =currentScore+ Number(1);
        }
    });
    setScor(currentScore);
    setIsSubmitted(true);

};
const HandelTryAgain=()=>{
    setSeletedAnswer({});
    setIsSubmitted(false);
    setScor(0);
};
return(
    <AppTemplate>

    <PageContainer>
<HeroSection>
    <HeroTitel>Test Your Knowledge </HeroTitel>
    <HeroSubtitle> Answer the question below and click submit to ckeck  your score</HeroSubtitle>
    {isSubmitted&&<ScorBadge>score :{scor}/{quizQuestion.length}</ScorBadge>}

</HeroSection>
<SectionTitel>choose the correct answer </SectionTitel>
<QuizBode> 
{quizQuestion.map((q)=>(
    <QuestionsCard 
    key={q.id}
    q={q}
    seletedAnswer={seletedAnswer[q.id]}
    isSubmitted={isSubmitted}
    onOptionChange={HandelOptionChange}
    />

))}
{!isSubmitted ?(
    <SubButton onClick={HandelSubmit}>SUBMIT QUIZ</SubButton>
):(
    <>
    <ResultBanner>
        <h4> Keep Practicing!</h4>
        <p>you answered {scor} out of {quizQuestion.length} questions corrctly.</p>
    </ResultBanner>
<ActionButton  onClick={HandelTryAgain}>Tray Again</ActionButton>
    </>

)}

</QuizBode>
    </PageContainer>
</AppTemplate>
);


}
export default QuizPage;