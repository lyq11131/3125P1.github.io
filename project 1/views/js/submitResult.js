(function() {
    let name = document.querySelector('.name')
    let email = document.querySelector('.email')
    let dentist = document.querySelector('.dentist')
    let time = document.querySelector('.time')
    let service = document.querySelector('.service-requirement')
    let phoneNumber = document.querySelector('.phoneNumber')
    let messageList = JSON.parse(window.localStorage.getItem('myForm'))
    name.textContent = `${name.textContent} ${messageList[1]} ${messageList[0]},`
    email.textContent = `${messageList[2]} confirm email has been sent to your email,please check out the details of the appointment.`
    time.textContent = `Your appointment time is ${messageList[4]}`
    service.textContent = `Details of Your Case and Service Requirements:${messageList[6]}`
    phoneNumber.textContent = `Your appointment phone number is ${messageList[3]}`
    if (messageList[7].length == 1) {
        dentist.textContent = `The dentist of your choice is ${messageList[7][0]}} `
    } else if (messageList[7].length == 2) {
        dentist.textContent = `The dentist of your choice is ${messageList[7][0]},${messageList[7][1]}`
    } else if (messageList[7].length == 3) {
        dentist.textContent = `The dentist of your choice is ${messageList[7][0]},${messageList[7][1]} and ${messageList[7][2]}`
    } else if (messageList[7].length == 4) {
        dentist.textContent = `The dentist of your choice is ${messageList[7][0]},${messageList[7][1]},${messageList[7][2]},and ${messageList[7][3]}`
    } else if (messageList[7].length == 5) {
        dentist.textContent = `The dentist of your choice is ${messageList[7][0]},${messageList[7][1]},${messageList[7][2]}, ${messageList[7][3]},and ${messageList[7][4]}`
    } else if (messageList[7].length == 6) {
        dentist.textContent = `The dentist of your choice is ${messageList[7][0]},${messageList[7][1]},${messageList[7][2]}, ${messageList[7][3]}, ${messageList[7][4]} and ${messageList[7][5]}`
    }
    console.log(messageList)
})();

function done() {
    window.location.href = 'homePageIndex.html'
}