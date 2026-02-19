
let language = {
    english: [
        { character: "Q" },
        { character: "W" },
        { character: "E" },
        { character: "R" },
        { character: "T" },
        { character: "Y" },
        { character: "U" },
        { character: "I" },
        { character: "O" },
        { character: "P" },
        { character: "A" },
        { character: "S" },
        { character: "D" },
        { character: "F" },
        { character: "G" },
        {
            character: "H",
            hello: "hii",
            howareyou: "i'm fine,thanks"
        },
        { character: "J" },
        { character: "K" },
        { character: "L" },
        { character: "Z" },
        { character: "X" },
        { character: "C" },
        { character: "V" },
        { character: "B" },
        { character: "N" },
        { character: "M" }]

,
farsi: [
    { character: "ض" },
    { character: "ص" },
    { character: "ث" },
    { character: "ق" },
    { character: "ف" },
    { character: "غ" },
    { character: "ع" },
    { character: "ه" },
    { character: "خ" },
    { character: "ح" },
    { character: "ج" },
    { character: "چ" },
    { character: "پ" },
    { character: "ش" },
    { character: "س" },
    { character: "ی" },
    { character: "ب" },
    { character: "ل" },
    { character: "ا" },
    { character: "ت" },
    { character: "ن" },
    { character: "م" },
    { character: "ک" },
    { character: "گ" },
    { character: "ظ" },
    { character: "ط" },
    { character: "ز" },
    { character: "ر" },
    { character: "ذ" },
    { character: "د" },
    { character: "ئ" },
    { character: "و" }]
}

function getQuestion() {
    let question = document.getElementById("Question").value;
    return question;
}

function response(question) {

    let answer = "";
    let value = "";
    let result = "";

    question = question.toUpperCase();

    for (let i = 0; i < 23; i++) {
        if (language.english[i].character == question) {
            answer = "yes";
        }
    }


    return answer;
}

function show_response() {
    question = getQuestion()
    let text1 = document.getElementById("msg1").innerHTML = question;
    let text2 = document.getElementById("msg2").innerHTML = response(question);
    document.getElementById("Question").value = "";
}
