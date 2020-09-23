//onclick search icon => text input appears to search for specific section

 const search = function () {
    document.getElementById('search').style.visibility = "visible"
    let input = document.getElementById("search").value;

    //if input has value and value === one of the section it will send user to it otherwise alert will apears
    if(!input) {
        return
    }
    else if(input && (input === 'team' || input === 'work' || input ==='contact')) {
        
         window.location.href ='#'+ input
    }
    else {
        alert('No such section')
    }

}

const resNav = function () {
    var x = document.getElementById("myTopnav");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
  }