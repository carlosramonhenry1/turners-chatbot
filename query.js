let userInput = 'test$' // user input is test$
// let userInput= prompt('enter your text: ')
let userInputArray=userInput.split('')
let charObject={'!': 'char', '@' : 'char', '$': 'char'} //setting it up to use in actionsZ
let userInputFinal= ''
function carlos() { 
  for(let char=0; char < userInputArray.length; char++){ //char starts at 0 the condition checks if char is less than the length of the user input array as long as it is lesss the loop will continue 
    if (userInputArray[char] in charObject === false) {//checks if index is inside char object
        userInputFinal += userInputArray[char]
        
    }
    else {
        userInputFinal += ' ' // its just white space 
       
    } //overall it cancels anything i put in line 4
  }  
}

 const searchMe = document.getElementById(`search`)

if (searchMe.value.length ===0) {
    alert('click to enter turners') 
}
else {

fetch(`${searchMe.value}`)
.then(res => res.json())
.then(res => {
    document.getElementById(``).innerHTML = res.lyrics
})

}

// ====================================
function watsonTest(){
  console.log('hit watson tester');

  let textbox = document.getElementById('textbox').value
  
  let port = 8000
  // let finalQuestion = 'trade me'

  fetch(`http://localhost:${port}/query/${textbox}`) //port is my port for backend=8000 textbox is from search html aswell
        .then(response => response.json()) //this is saying go to the endpoint and grab my info
        .then(data => {
          console.log(data) // grabbing data 

          let question = data.result.results[0].title // the data in my cloud now were going to the results and we are grabbing tittle these are found in console inspect
          console.log(`Question: ${question}`) // question is my variable line 48 = data result results 
          let answer = data.result.results[0].text 
          console.log(`Answer: ${answer}`) //console logging above

          let answerbox = document.getElementById('answerbox') //taken id from search.html
          let formattedAnswer = `<span class='question'>Question: ${question} </span><span class='answer'><br/><br/> Answer: ${answer}</span>`
          answerbox.innerHTML = formattedAnswer

          
        })

      

} 
console.log (userInputFinal)


//data types
// let unknown
// let string = '1'
// let Array = [1,2,3]
// let num = 1
// let boolean = true
// letboolean2 = false
// let Null = null
// let object = {
//     key1: "value1",
//     key2: 'value2'
// }
// let array = [1,"2",true,[1,2,3],object,{key3: 'value3'}]
