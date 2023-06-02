var objPeople = [
    {
        username : "2k19cse100@kiot.ac.in",
        password : "28.12.2001"
    },
    {
        username : "2k19cse107@kiot.ac.in",
        password : "06.08.2001"
    },
    {
        username : "2k19cse70@kiot.ac.in",
        password : "21.05.2002"
    },
    {
        username : "sivu",
        password : "papa"
    }
]


function getInfo() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    for(i = 0 ; i < objPeople.length; i++) {
        if(username == objPeople[i].username && password == objPeople[i].password) {
            location.href = "homeidscriptiez.html"
            console.log(username += " is logged in!!!");
        }
    }
    
}