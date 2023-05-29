export const LOCAL_STORAGE_KEY = "like"

export function likeById(id) {
    localStorage.setItem(LOCAL_STORAGE_KEY + id, "true");
}

export function unlikeById(id) {
    localStorage.setItem(LOCAL_STORAGE_KEY + id, "false");
}

export function isLikedById(id) {
    return localStorage.getItem(LOCAL_STORAGE_KEY + id) === "true";
}

export function getLikedList () {
    let list = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (list == null) {
        localStorage.setItem(LOCAL_STORAGE_KEY, "[]")
        return []
    }

    return JSON.parse(list);
}

function isPresent() {
    
}

class Liked {
    constructor(id) {
        this.id = id;
        this.liked = true;
    }

    id
    liked

    setLiked() {

    }
}