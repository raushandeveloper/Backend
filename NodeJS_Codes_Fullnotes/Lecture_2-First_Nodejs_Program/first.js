console.log("Hi it me Raushan Singh")

const fs=require('fs');
fs.writeFile("output.txt","WritingFile",(err) => {
  if (err)
    console.log("Error")
  else
    console.log("File Written SuccessFully")
})