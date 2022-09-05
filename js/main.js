document.querySelector('#ask').addEventListener('click', magic8)
document.querySelector('#ask').addEventListener('touchend', magic8)
// document.querySelector('#askagain').addEventListener('click', magic8)
document.querySelector('#reset').addEventListener('click', reset)
document.querySelector('#reset').addEventListener('touchend', reset)



let eightBall = ''


    
function magic8(){
    
    let randomNumber = Math.floor(Math.random() * 8);
    let userQuestion = document.querySelector('#userQuestion').value

    if (userQuestion === ''){
        document.querySelector('#warning').innerText = 'Please ask a question first.'
    }else{
        document.querySelector('#viewQuestion').innerText = `You have asked: ${userQuestion}`
    
        switch (randomNumber) {
            case 0:
                eightBall = 'It is certain'
                break;
            case 1:
                eightBall = 'It is decidedly so'
                break;
            case 2:
                eightBall = 'Reply hazy try again'
                break;
            case 3:
                eightBall = 'Cannot predict now'
                break;
            case 4:
                eightBall = 'Do not count on it'
                break;
            case 5:
                eightBall = 'My sources say no'
                break;
            case 6:
                eightBall = 'Outlook not so good'
                break;
            case 7:
                eightBall = 'Signs point to yes'
                break;
            // default:
            //     eightBall = 'Please ask a question!'
            //     break;
        }
    document.querySelector('#viewAnswer').innerText = `${eightBall}.`
    document.querySelector('#warning').innerText = '';
    }

    
}



function reset(){
    document.querySelector("#form").reset();
    document.querySelector('#viewQuestion').innerText = '';
    document.querySelector('#viewAnswer').innerText = '';
    document.querySelector('#warning').innerText = '';
}

