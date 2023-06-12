function submitForm(event) {
    event.preventDefault(); // 阻止表单默认的提交行为
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let form = document.getElementById("myForm");
    let formNameList = ["firstName", "lastName", "email", "phone", "datePrefer", "timePrefer", "caseDetails"]
    const arrList = []
    var values = []; //复选框值
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            values.push(checkbox.value);
        }
    })
    formNameList.forEach((item) => {
        arrList.push(form.elements[item].value)
    })
    arrList.push(values)
    if (arrList.length != 0 && values.length != 0) {
        window.localStorage.setItem('myForm', JSON.stringify(arrList))
        window.location.href = 'submitResult.html'
    } else {
        window.localStorage.removeItem('myForm', JSON.stringify(arrList))
    }
}