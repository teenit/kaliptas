export function getUrl(arg){
    let local = localStorage.getItem('lang');
    let link = '';
    if(local !== '') link = `/${local}/${arg}`;
    else link = `/${arg}`;
    return link;
}