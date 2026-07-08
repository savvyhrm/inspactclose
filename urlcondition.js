
var fullUrl = window.location.href;
var url = window.location.href;
var parts = url.split(/[/:]+/);

var protocol = parts[0];   // "http"
var host = parts[1];       // "localhost"
var project = parts[2];    // "SavvyHRMS_HPL"
var page = parts[3];        // "EmployeeDashboardvone.aspx"
var page1 = parts[4];        // "EmployeeDashboardvone.aspx"
var page2 = parts[5];        // "EmployeeDashboardvone.aspx"


console.log(protocol);
console.log(host);
console.log(project);
console.log(page);
console.log(page1);
console.log(page2);
 var i=5;
 var t=0;


// var host = window.location.hostname;
var hostParts = host.split('.');

console.log(hostParts[0]); // 192
console.log(hostParts[1]); // 168
console.log(hostParts[2]); // 1
console.log(hostParts[3]); // 11

if(hostParts[0] == 192 || hostParts[1] == 168 || host == 'localhost')
{
    alert('ip')
} else{ alert('none');}

if(host == 'localhost')
{
    console.log('Success')
} else{ 
    for (i= 5 ; i>9 ; i++ ){
        console.log('Test ' + t);
        t++
    }
}
