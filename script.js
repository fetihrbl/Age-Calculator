const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

function calculateAge() {
    const birthdayValue = birthdayEl.value;
    if (birthdayValue === "") {
        alert("Please Enter Your Birthday");
    } else {
        const age = getAge(birthdayValue);
        resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
    }
}

function getAge(birthdayValue) {
    const currentDay = new Date();
    const birthdayDate = new Date(birthdayValue); 
    let age = currentDay.getFullYear() - birthdayDate.getFullYear(); 
    let month = currentDay.getMonth() - birthdayDate.getMonth(); 

    // Eğer doğum günü henüz bu yıl olmadıysa yaşını bir azalt
    if (month < 0 || (month === 0 && currentDay.getDate() < birthdayDate.getDate())) {
        age--;
    }

    return age;
}

btnEl.addEventListener("click", calculateAge); 
