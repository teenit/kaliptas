export function getLanguageForLink() {
    let lang= localStorage.getItem('LNG').toLowerCase();
    return lang !== "ge" ? lang : "";
}

export function getLanguageForRootLink() {
    let lang= localStorage.getItem('LNG').toLowerCase();
    return lang !== "ge" ? "/" + lang : "";
}

export function getRealLanguage() {
    return localStorage.getItem('LNG').toLowerCase();
}