let form = document.getElementById('container');
let submitSuccess = document.getElementById('submit-success');

function submit(){
    form.style.display = "none";
    submitSuccess.style.display = "block";
    alert(`You have Submitted the form Successfully`);
}