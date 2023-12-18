//we have 99000+ package in node js which we use for various tasks
//console.log("This is going to log information we want!!!")

// const { log } = require("console") //console module to print/log data in terminal
// log("This is through module import (named import) !!!")

//log(__dirname) //returns fullpath of directory in which file is present
//log(__filename) //returns fullpath + filename of directory in which file is present

const os = require("os")
const path = require('path') //will be helpful to rectify the correct path to file or directory
const util = require('util')
const v8 = require("v8")//gives access to V8 engine of node
const http = require("http")
//http.get()
// const {EventEmitter} = require("events")
// event emitter - on is custom event
// EventEmitter.on("request","get",(req, res)=>{
//     res.send("Information to be shared with user")
// })



// log(os.userInfo())
// log(os.cpus())
// const cpuCount = os.cpus().length
// log("CPU Count ", cpuCount)
// console.log(os.hostname());
// console.log(os.release());

//callback with data inserted
// process.stdin.on('data', data =>{
//     process.stdout.write(`\n\n ${data.toString().trim()} \n\n`)
//     process.exit();
// })
// process.stdin.on('exit', data =>{
//     log("we are exiting")
//     process.stdout.write(`\n\n ${data.toString().trim()} \n\n`)
// })

//path

// console.log(`The file name is - ${path.basename(__filename)}`);
// console.log(`The file name is abosolute - ${path.isAbsolute(__dirname)}`);


// console.log(`The process cpu usage ${JSON.stringify(process.cpuUsage())}`);
// console.log(`The process id ${process.pid}`);
// console.log(`The process node info ${process.versions.node}`);


// log(v8.getHeapSnapshot())
// log(v8.getHeapStatistics())

// //utility module
// util.log(path.basename(__filename))
// util.log(path.basename(__dirname))
// log(util.debuglog())

// process.nextTick(()=>{log("Next Tick Called!!")})

//http //get/put/post/delete/patch
//request - google.api.getdata/user/info/id
//response - html, json, etc
function GetUserInfo(uId) {
    //connect to db
    //return userInfo
}


//save the data in json object that are making MERN stack and MEAN stack as acronym
//write using writestream and also read and print using readtream upon finish
//expand it like - M-Mongo, E-Express, R-React and N-Node in JSON format


//doing the setup
//installation of express
//start using npm to make a repo/directory for api
//have an example running


const fs = require('fs')

const mernStack = {
    "MERN" : {
        "M": "MongoDB",
        "E": "Express",
        "R": "React",
        "N": "Node" 
    }
}

const meanStack = {
    "MEAN" : {
        "M": "MongoDB",
        "E": "Express",
        "A": "Angular",
        "N": "Node"
    }
}

//MERN stack
const mernWriteSteam = fs.createWriteStream('./mern_stack.json')
mernWriteSteam.write(JSON.stringify(mernStack,null,2))
mernWriteSteam.end()

const mernReadStream = fs.createReadStream('./mern_stack.json','utf-8')
let mernData = ''

mernReadStream.on('data',data => {
    mernData += data
})

mernReadStream.on('end', () => {
    console.log('MERN Stack: ')
    console.log(JSON.parse(mernData))
})



//MEAN stack
const meanWriteSteam = fs.createWriteStream('./mern_stack.json')
meanWriteSteam.write(JSON.stringify(meanStack,null,2))
meanWriteSteam.end()

const meanReadStream = fs.createReadStream('./mern_stack.json','utf-8')
let meanData = ''

meanReadStream.on('data',data => {
    meanData += data
})

meanReadStream.on('end', () => {
    console.log('\nMEAN Stack: ')
    console.log(JSON.parse(meanData))
})
