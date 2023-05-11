export function replaceStr(arg){
    let a = arg.replaceAll("'", "’").replaceAll("`","’");
    return a;
}



export function replaceStrTextarea(arg){
    let a = arg.replaceAll("'", "’").replaceAll("`","’").replaceAll('"','\\"');
    return a;
}