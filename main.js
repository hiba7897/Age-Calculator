function getDateOfBirth() {
    const dateOfBirthInput = document.getElementById("date-of-birth"); 
    const birthDate = new Date(dateOfBirthInput.value); 
    const today = new Date(); 
    
    let ageYears = today.getFullYear() - birthDate.getFullYear(); 
    
    const hasBirthdayPassed = today.getMonth() > birthDate.getMonth() || (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate()); 
    
    if (!hasBirthdayPassed) {
        ageYears--; 
    } 
    
    let result = `Your age: ${ageYears} years`; 
    document.getElementById("result").textContent = result;
}


