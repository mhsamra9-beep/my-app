import { queries } from "@testing-library/dom";

const quizQuestion=[
{
    id:1,
    question:'Q1. what dose HTML stand for ?',
    optinos:[
 'HyperText Markup Languege',       
 'HyperText Machine Languege',       
 'HightText Markup Languege',
 'None of the above'        
    ],
    correctAnswer:'HyperText Markup Languege'
},
{
    id: 2,
    question:'Q2. which CSS property changes the background color',
    optinos:[
        'color ',
        'bg-ground',
        "background-color",
        'background'
    ],
    correctAnswer:"background-color"
}, 
{
id:3,
question:'Q3.which Boostrap calss makes a button green ? ',
optinos:[
    "btn-primary",
    'btn-dark',
    'btn-warning',
    'btn-success'
],
correctAnswer:"btn-success"

},

];
export default quizQuestion;
