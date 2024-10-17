let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);


let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Weclcome, Admin!";
    }
    else {
        userMessage = "Welcome, User!";
    }
   

} else {
        userMessage = " PLease login to access the system!"
}
    
console.log(userMessage)