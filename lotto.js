const generateBtn = document.getElementById('generate-btn');
const resultDiv = document.getElementById('result');
const currentDateH2 = document.getElementById('current-date');
const currentTimeH2 = document.getElementById('current-time');

function generateNumbers() {
    updateDateTime();
    let numbers = [];

    resultDiv.innerHTML = '';
    for (let i = 0; i < 6; i++) {
        const span = document.createElement('span');
        span.textContent = '0';
        resultDiv.appendChild(span);
        numbers.push(0);
    }

function startChangingNumbers() {
        let intervals = [];
        for (let i = 0; i < 6; i++) {
            (function (index) {
                intervals[index] = setInterval(() => {
                        const randomNum = Math.floor(Math.random() * 45) + 1;
                        numbers[index] = randomNum;
                        resultDiv.children[index].textContent = randomNum;
                    }, 50); 
                })(i);
             }
            setTimeout(() => stopNumbers(intervals), 4000);
        }

function stopNumbers(intervals) {
    for (let i = 0; i < 6; i++) {
        clearInterval(intervals[i]);
        }
    }
        startChangingNumbers();
    }

function updateDateTime() {
    const today = new Date();

    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    currentDateH2.textContent = '현재날짜 : ' + year + '/' + month + '/' + date;

    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    currentTimeH2.textContent = '현재시간 : ' + hours + ':' + minutes + ':' + seconds;
}

generateBtn.addEventListener('click', generateNumbers);

updateDateTime();
setInterval(updateDateTime, 1000);