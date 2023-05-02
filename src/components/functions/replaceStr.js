export function replaceStr(arg){
    let a = arg.replaceAll("'", "’").replaceAll("`","’");
    return a;
}