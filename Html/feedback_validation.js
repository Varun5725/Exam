function store() {
    var name = document.getElementById('name').value;
    var register = document.getElementById('reg').value;
    var sem = document.getElementById('sem').value;
    var course = document.getElementById('course').value;
    var faculty = document.getElementById('faculty').value;

    var handSkills = document.querySelector('input[name="handgestures"]:checked');
    var commSkills = document.querySelector('input[name="communication"]:checked');

    if (name.length <= 2 || name.length >= 20 || /\d/.test(name)) {
        alert("Enter a valid Name.");
        return false;
    }

    if (!/^111(CS|ME|AT|EE|EC)\d{5}$/.test(register)) {
        alert("Please enter a valid registration number. The register number should start with 111 followed by the branch code and 5 digits. Ex: 111CS21088");
        return false;
    }

    if (isNaN(sem) || sem < 1 || sem > 6) {
        alert("Semester should be entered within 1 to 6.");
        return false;
    }

    if (faculty.length <= 2 || faculty.length >= 20 || /\d/.test(faculty)) {
        alert("Enter a valid Faculty Name.");
        return false;
    }

    if (!handSkills) {
        alert("Please select a rating for hand gestures.");
        return false;
    }

    if (!commSkills) {
        alert("Please select a rating for communication skills.");
        return false;
    }

    sessionStorage.name = name;
    sessionStorage.reg = register;
    sessionStorage.sem = sem;
    sessionStorage.course = course;
    sessionStorage.faculty = faculty;
    sessionStorage.hand = handSkills.value;
    sessionStorage.comm = commSkills.value;
}
