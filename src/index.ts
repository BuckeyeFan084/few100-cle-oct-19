
import './styles.css';
import { multiply } from './math';



const number1El = document.getElementById('number1') as HTMLInputElement;
const number1E2 = document.getElementById('number2') as HTMLInputElement;
const multiplyButton = document.getElementById('multiply') as HTMLInputElement;
const answerEl = document.getElementById('answer') as HTMLSpanElement;

// tslint:disable-next-line: only-arrow-functions
multiplyButton.addEventListener('click', function () {

    const n1 = number1El.valueAsNumber;
    const n2 = number1E2.valueAsNumber;

    const answer = multiply(n1, n2);

    answerEl.innerText = answer.toString();
});





