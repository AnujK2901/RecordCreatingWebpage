import {MDCRipple} from '@material/ripple/index';
import {MDCTopAppBar} from '@material/top-app-bar';
import {MDCTextField} from '@material/textfield';

const topAppBar = new MDCTopAppBar(document.querySelector('.mdc-top-app-bar'));
const exam = new MDCTextField(document.querySelector('.exam'));
const subject = new MDCTextField(document.querySelector('.subject'));
const chapter = new MDCTextField(document.querySelector('.chapter'));
const lesson = new MDCTextField(document.querySelector('.lesson'));
const topic = new MDCTextField(document.querySelector('.topic'));
const questionText = new MDCTextField(document.querySelector('.question-text'));
const buttonRipple = new MDCRipple(document.querySelector('.save-button'));

function validate() {
    if (!exam.isValid()){
        exam.focus()
    }
}