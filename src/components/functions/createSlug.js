export function createSlug(arg){
    return arg.replace(/[^A-Za-zА,-]/g, '');
}