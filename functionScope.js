// JS is single threaded language

var name = "gauri"

function PrintName(){
    console.log(name)

    var name = "garcia"
    console.log(name)
    console.log(newName)

    namePrint()
    function namePrint(){
        var newName = "Danny"
        console.logname()
    }
}
PrintName();
console.log(name)