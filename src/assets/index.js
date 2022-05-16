import album from './images/album.png'

import background from './images/pop.jpg'
import close from './images/close.png'
import DeleteAlbum from './images/deleteAlbum.png'
import DeleteMusic from './images/deleteTrack.png'
import logo from './sprites-svg/logo.svg'
import music from './sprites-svg/music.svg'
import peoples from './sprites-svg/peoples.svg'
import search from './sprites-svg/search.svg'
import submit from './sprites-svg/submit.svg'
import track from './images/track.jpg'
import update from './images/update.jpg'
const images = {
    album,
    background,
    close,
    DeleteAlbum,
    DeleteMusic,
    logo,
    music,
    peoples,
    search,
    submit,
    track,
    update,
};

export default function getImages(key) {
    return images[key]
}

