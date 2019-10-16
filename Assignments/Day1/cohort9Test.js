// COHORT 9 WEEK 4 EXAM //

/*
    In one paragraph describe the fundamentals of web architecture. 
*/

/////Place answer to Question 1 in the commented section below.

/*
Web architecture is based on a request and response system.  The client sends a request for information to the server which can respond with the information requested.  The server can also send a request to the database if the information need is stored there.  The database can then send the information to the server which can then send the information to the client.  The get, post, put, and delete methods also come into play and dictate what actions are taken.
*/


/*
 Given two integers a and b, return how many times a can be halved 
 while still being greater than b.

 Examples
 halveCount(1324, 98) ➞ 3
 // (1324 -> 662 -> 331 -> 165.5)

 halveCount(624, 8) ➞ 6
 // (624 -> 312 -> 156 -> 78 -> 39 -> 19.5 -> 9.75)

 halveCount(1000, 3) ➞ 8
 // (1000 -> 500 -> 250 -> 125 -> 62.5 -> 31.25 -> 15.625 -> 7.8125 -> 3.90625)

 Notes
 Integer 'a' can be halved at least once.
*/

/////Place answer to Question 2 in the empty space below.
function halving(a, b){
    let arr=[];
    while(a>b){
        a--;
        arr.push(a/2);
    }
    return arr.length-1;
}

//To explain I want the a to be divided by 2 while a is still greater than b.  Each time it is divide I want to push that number into the Array.  Once a falls below b the while loop will stop.  I then return the arr.length but subtract 1 from it because the last number will be below b.


/*
    One Debug/Read Code Question 

    Read the following code snippet. Briefly explain what the code is doing. 

    function doSomthing(str) {

        var strarr=str.split('');
            for( let x=0;x<strarr.length;x++){
                if(strarr[x]=='a'){
                    strarr[x]=4
                }else if(strarr[x]=='e'){
                    strarr[x]=3
                }else if(strarr[x]=='i'){
                    strarr[x]=1
                }else if(strarr[x]=='o'){
                    strarr[x]=0
                }else if(strarr[x]=='s'){
                    strarr[x]=5
                }
            }

            return strarr.join('')
        
        }

        doSomething("Whatever Happen's Happens")
*/

/////Place answer to Question 3 in the empty space below.

//The code is splitting a string into an array then looking for the vowels in the array and changing the vowels to SVGAnimatedNumberList.  So, a is 4, e is 3, etc. then joining the array back into a string and producing what's I believe is called l33t sp34k or whatever it's called. The in calls the function with the string 'whatever happen's happens' which should give 'wh4t3v3r h4pp3n'5 h4pp3n5'




/*
    Create a Calculator class which takes two numbers and does the 
    following operations in 4 seperate methods. They need to return a value: 
    Add
    Subtract
    Multiply 
    Divide
*/

/////Place answer to Question 4 in the empty space below.
class Calculator{
    constructor(num1, num2){
    this.num1=num1;
    this.num2=num2;
    }
    add(){
       return this.num1+this.num2;
    }
    subtract(){
        return this.num1-this.num2;
    }
    multiply(){
        return this.num1*this.num2;
    }
    divide(){
        return this.num1/this.num2;
    }
}



