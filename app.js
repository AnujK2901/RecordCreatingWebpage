import {MDCRipple} from '@material/ripple/index';
import {MDCTopAppBar} from '@material/top-app-bar';
import {MDCTextField} from '@material/textfield';
import {MDCSnackbar} from '@material/snackbar';

let questionFileValid = false;
let answerFileValid = false;
let selectedQuestionFile = null;
let selectedAnswerFile = null;
let answerImageUploadURL = null;
let questionImageUploadURL = null;
let selectedQuestionFileName = null;
let selectedAnswerFileName = null;
let selectedQuestionFileMetadata = null;
let selectedAnswerFileMetadata = null;

const snackbar1 = new MDCSnackbar(document.querySelector('.snackbar1'));
const snackbar2 = new MDCSnackbar(document.querySelector('.snackbar2'));
const snackbar3 = new MDCSnackbar(document.querySelector('.snackbar3'));

const topAppBar = new MDCTopAppBar(document.querySelector('.mdc-top-app-bar'));
const exam = new MDCTextField(document.querySelector('.exam'));
const subject = new MDCTextField(document.querySelector('.subject'));
const chapter = new MDCTextField(document.querySelector('.chapter'));
const lesson = new MDCTextField(document.querySelector('.lesson'));
const topic = new MDCTextField(document.querySelector('.topic'));
const questionText = new MDCTextField(document.querySelector('.question-text'));

const saveButtonRipple = new MDCRipple(document.querySelector('.save-button'));
const questionButtonRipple = new MDCRipple(document.querySelector('.questionImageButton'));
const answerButtonRipple = new MDCRipple(document.querySelector('.answerImageButton'));


const saveButton = document.querySelector('.save-button');
const questionInputElement = document.getElementById("questionImageInput");
const answerInputElement = document.getElementById("answerImageInput");
const questionImageButton = document.getElementById("questionImageButton");
const answerImageButton = document.getElementById("answerImageButton");

saveButton.addEventListener('click', () => {
    if (validate()) {
        uiDisabled(true);
        snackbar1.timeoutMs = -1;
        snackbar1.open();
        // Get a reference to the storage service, which is used to create references in your storage bucket
        var storage = firebase.storage().ref();

        // Create a storage reference from our storage service
        let storageRef = storage.child('images');

        const QuestionImageUploadTask = storageRef.child(selectedQuestionFileName).put(selectedQuestionFile, selectedQuestionFileMetadata);
        const AnswerImageUploadTask = storageRef.child(selectedAnswerFileName).put(selectedAnswerFile, selectedAnswerFileMetadata);
        QuestionImageUploadTask
            .then(snapshot => snapshot.ref.getDownloadURL())
            .then((url) => {
                questionImageUploadURL = url;
                AnswerImageUploadTask
                    .then(snapshot => snapshot.ref.getDownloadURL())
                    .then((url) => {
                        answerImageUploadURL = url;
                        pushData();
                    })
                    .catch((error) => {
                        failed();
                        console.log('AnswerImageUploadTaskError');
                        console.log(error);
                    });
            })
            .catch((error) => {
                failed();
                console.log('QuestionImageUploadTaskError');
                console.log(error);
            });


    } else {
        snackbar3.open();
        if (!exam.valid) {
            exam.valid = false;
            exam.focus();
        }
        if (!subject.valid) {
            subject.valid = false;
            subject.focus();
        }
        if (!chapter.valid) {
            chapter.valid = false;
            chapter.focus();
        }
        if (!lesson.valid) {
            lesson.valid = false;
            lesson.focus();
        }
        if (!topic.valid) {
            topic.valid = false;
            topic.focus();
        }
        if (!questionText.valid) {
            questionText.valid = false;
            questionText.focus();
        }
        /*if (questionFileValid) {
            questionImageButton.focus()
        }
        if (answerFileValid) {
            answerImageButton.focus()
        }*/
    }
});

questionImageButton.addEventListener("click", function (e) {
    if (questionInputElement) {
        questionInputElement.click();
    }
}, false);
answerImageButton.addEventListener("click", function (e) {
    if (answerInputElement) {
        answerInputElement.click();
    }
}, false);

questionInputElement.addEventListener("change", handleQuestionFiles, false);
answerInputElement.addEventListener("change", handleAnswerFiles, false);

function validate() {
    return exam.valid && subject.valid && chapter.valid && lesson.valid && topic.valid && questionText.valid && questionFileValid && answerFileValid;
}

function uiDisabled(booleanValue) {
    exam.disabled = booleanValue;
    subject.disabled = booleanValue;
    chapter.disabled = booleanValue;
    lesson.disabled = booleanValue;
    topic.disabled = booleanValue;
    questionText.disabled = booleanValue;
    saveButton.disabled = booleanValue;
    questionImageButton.disabled = booleanValue;
    answerImageButton.disabled = booleanValue;
}

function clearText() {
    exam.value = '';
    exam.valid = true;
    subject.value = '';
    subject.valid = true;
    chapter.value = '';
    chapter.valid = true;
    lesson.value = '';
    lesson.valid = true;
    topic.value = '';
    topic.valid = true;
    questionText.value = '';
    questionText.valid = true;
}

function clearImages() {
    questionFileValid = false;
    answerFileValid = false;
    selectedQuestionFile = null;
    selectedAnswerFile = null;
    answerImageUploadURL = null;
    questionImageUploadURL = null;
    document.getElementById('questionImageInput').value = "";
    document.getElementById('answerImageInput').value = "";
    document.getElementById("answerImage").src = "image/noImageSelected.jpg";
    document.getElementById("questionImage").src = "image/noImageSelected.jpg";
}

function handleQuestionFiles() {
    if (document.getElementById('questionImageInput').files.length === 1) {
        selectedQuestionFile = document.getElementById('questionImageInput').files[0];
        selectedQuestionFileName = (+new Date()) + '-' + selectedQuestionFile.name;
        selectedQuestionFileMetadata = {contentType: selectedQuestionFile.type};
        document.getElementById("questionImage").style.display = 'block';
        document.getElementById("questionImage").style.width = "20%";
        document.getElementById("questionImage").style.height = "20%";
        document.getElementById("questionImage").src = URL.createObjectURL(selectedQuestionFile);
        document.getElementById("questionImage").onload = function () {
            questionFileValid = true;
            URL.revokeObjectURL(document.getElementById("questionImage").src)
        }
    } else {
        questionFileValid = false;
        clearImages()
    }
}

function handleAnswerFiles() {
    if (document.getElementById('answerImageInput').files.length === 1) {
        selectedAnswerFile = document.getElementById('answerImageInput').files[0];
        selectedAnswerFileName = (+new Date()) + '-' + selectedAnswerFile.name;
        selectedAnswerFileMetadata = {contentType: selectedAnswerFile.type};
        document.getElementById("answerImage").style.display = 'block';
        document.getElementById("answerImage").style.width = "20%";
        document.getElementById("answerImage").style.height = "20%";
        document.getElementById("answerImage").src = URL.createObjectURL(selectedAnswerFile);
        document.getElementById("answerImage").onload = function () {
            answerFileValid = true;
            URL.revokeObjectURL(document.getElementById("answerImage").src)
        }
    } else {
        answerFileValid = false;
        clearImages()
    }
}

function failed() {
    uiDisabled(false);
    //Push Failed
    snackbar1.close();
    snackbar2.labelText = "Uploading Data Failed";
    snackbar2.open();
}

function pushData() {
    firebase.database().ref('data').push({
        exam: exam.value,
        subject: subject.value,
        chapter: chapter.value,
        lesson: lesson.value,
        topic: topic.value,
        answerImageURL: answerImageUploadURL,
        questionImageURL: questionImageUploadURL,
        textFromQuestionImage: questionText.value
    }, function (error) {
        if (error) {
            console.log('DatabaseTaskError');
            console.log(error);
            failed();
        } else {
            uiDisabled(false);
            //Push Success
            snackbar1.close();
            snackbar2.labelText = "Data Uploaded Successfully";
            snackbar2.open();
            clearText();
            clearImages();
        }
    });
}