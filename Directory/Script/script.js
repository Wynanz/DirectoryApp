let xmlhttp = new XMLHttpRequest();
let url = "../data/data.json";

xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        myFunction(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

let students = [];

function myFunction(arr) {
    for (let i = 0; i < arr.students.length; i++) {
        let nFo = {
            "firstName": arr.students[i].firstName,
            "lastName": arr.students[i].lastName,
            "nickName": arr.students[i].nickName,
            "email": arr.students[i].email,
            "slack": arr.students[i].slack,
            "hobbies": arr.students[i].hobbies
        }
        students.push(nFo);
    }
}

let btnNext = document.getElementById("btnNext"),
    btnPrevious = document.getElementById("btnPrevious"),
    btnRandom = document.getElementById("btnRandom"),

    firstName = document.getElementById("firstName"),
    lastName = document.getElementById("lastName"),
    nickName = document.getElementById("nickName"),
    email = document.getElementById("email"),
    slack = document.getElementById("slack"),
    hobby = document.getElementById("hobby")
    




let count = 0;

btnNext.addEventListener("click", function (e) {
    if (count < 0) {
        count = students.length - 1;
    }
    else if (count > students.length - 1) {
        count = 0;
    }
    firstName.value = students[count].firstName;
    lastName.value = students[count].lastName;
    nickName.value = students[count].nickName;
    email.value = students[count].email;
    slack.value = students[count].slack;
    hobby.value = students[count].hobbies;
    count++;
})

btnPrevious.addEventListener("click", function (e) {
    if (count < 0) {
        count = students.length - 1;
    }
    else if (count > students.length - 1) {
        count = 0;
    }
    firstName.value = students[count].firstName;
    lastName.value = students[count].lastName;
    nickName.value = students[count].nickName;
    email.value = students[count].email;
    slack.value = students[count].slack;
    hobby.value = students[count].hobbies;
    count--;
})


btnRandom.addEventListener("click", function (e){
    let rNum = Math.floor(Math.random()*students.length)
    firstName.value = students[rNum].firstName;
    lastName.value = students[rNum].lastName;
    nickName.value = students[rNum].nickName;
    email.value = students[rNum].email;
    slack.value = students[rNum].slack;
    hobby.value = students[rNum].hobbies;
    count = rNum;
})

let colorClick = document.getElementById('colorClick');
colorClick.addEventListener('click', function (e) {
    
    document.body.style.backgroundColor = "black";
    document.getElementById("whiteHeader").className = "header center pulse text-white";
})