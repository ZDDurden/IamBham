let numberOfSquares=0;
let squareArray=[];
document.addEventListener('DOMContentLoaded', ()=>{
    const button=document.getElementById('button');
    const container=document.getElementById('container');
    button.addEventListener('click', ()=>{
        numberOfSquares++;
       const square=document.createElement('div');
        square.className='box';
        const squareNumber=document.createElement('p');
        square.appendChild(squareNumber);
        square.style.backgroundColor=getRandomColor();
        squareNumber.innerText=numberOfSquares;
        //square.innerText.style.display='none';
        container.appendChild(square);
        /*square.addEventListener('mouseover', ()=>{
        squareNumber.style.display=numberOfSquares});
        square.addEventListener('mouseout', ()=>{
        squareNumber.style.display='none'});*/
        square.addEventListener('click', ()=>{
            square.style.backgroundColor=getRandomColor();
        }
        );
        squareArray.push(square);
        square.addEventListener('dblclick', ()=>{
            for(let i=0;i<squareArray.length;i++){
            if(i%2===0){
                console.log('even');
                container.removeChild(squareArray[i+1]);
            }else if(i%2!==0){
                console.log('odd');
                container.removeChild(squareArray[i-1]);
            }
            else{
                alert('No Squares');
            }}
        });
    });
 
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

});

