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


let userType = "admin";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}


console.log("User Category:", userCategory);


let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";


console.log("Authentication Status:", authenticationStatus);

//roles: Employee, ENrolled Member, Subscriber, Non-Subscriber

let person =  "Employee";

let authorized;

switch (person)
{
    case "Employee":
        authorized = " You are authorized to have access to Dietary services";
        break;
    
    case "Enrolled Member":
        authorized = "you are authorized to have access to Dietary services and one-on-one interaction with a dietician";
        break;
    
     case "Subscriber":
        authorized = "you have partial access to facilitate Dietary services";
        break;
    case "Non-Subscriber":
        authorized = "you need to enroll or at least subscribe first to avail this facility!"
        break;
    
}

console.log(authorized)




