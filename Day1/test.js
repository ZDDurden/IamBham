var string='xoxoxo'
function checkLetters(string){
    let x=0
    let o=0
    for(var i=0;i<string.length;i++){
        if(string[i]=='x'){
            x++;
        }else if(string[i]=='o'){
            o++;
        }
    if(x==o){
        return true
    }else{
        return false
    }}
}