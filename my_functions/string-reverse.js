export function reversString(str){
    let new_str='';
    for(let i=str.length-1 ;i>=0; i--){
        new_str = new_str.concat(str[i])
    }
    return new_str
}
// module.exports = reversString;