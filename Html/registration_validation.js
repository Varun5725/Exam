function Validate() {
    var name = document.getElementById('fname').value;
    var address = document.getElementById('add').value;
    var email = document.getElementById('mail').value;
    var phno = document.getElementById('phno').value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var branch = document.getElementById('branch').value;


    if (name.length <= 2 || name.length >=20 || /\d/.test(name)) {
        alert("Enter a valid Name.");
        return false;
    }
  
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        alert("Please enter a valid Email address.");
        return false;
    }


    if (isNaN(phno) || phno.length !== 10) {
        alert("Please enter a valid Phone number.");
        return false;
    }


    if (!gender.checked) {
        alert("Please select your Gender.");
        return false;
    }
    sessionStorage.name = name;
    sessionStorage.address = address;
    sessionStorage.email = email;
    sessionStorage.phoneNumber = phno;
    sessionStorage.gender = gender.value;
    sessionStorage.branch = branch;


    return true;
}
