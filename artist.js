class Artist {
    constructor(name, age, genre, label){
        this.name = name
        this.age = age
        this.genre = genre
        this.label = label
        this.albums = []
        this.songs = []
        this.image = ""
        this.instagram = null
    }

    addAlbum(album){
        this.albums.push(album)
        console.log(`This is another ${album} for ${this.name}`)
    }
    addSong(song){
        this.songs.push(song)
        console.log(`This is another ${song} for ${this.name}`)
    }
    addImage(imageLink){
        this.image = imageLink
    }

    addIG(username){
        this.instagram = username
    }

    
}
//This is an instance of the Artist lass
const drake = new Artist("Drake", "33", "hip hop", "cash money records")

const imagineDragons = new Artist("Dan Reynolds", "33", "pop", "Kidinakorner")

imagineDragons.addAlbum ("Origins")
imagineDragons.addAlbum ("Evolve")
imagineDragons.addAlbum ("Night Visions")

imagineDragons.addSong ("Natural")
imagineDragons.addSong ("Bad Liar")
imagineDragons.addSong ("Radioactive")

imagineDragons.addIG ("https://www.instagram.com/imaginedragons/")

imagineDragons.addImage ("https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fimaginedragons&psig=AOvVaw1eM7XqJ3Z0OjH6uLmu7AYJ&ust=1612378115653000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPDMwdjuy-4CFQAAAAAdAAAAABAI")

console.log(imagineDragons.name)
console.log(imagineDragons.age)
console.log(imagineDragons.genre)
console.log(imagineDragons.label)
console.log(imagineDragons.songs)
console.log(imagineDragons.albums)
console.log(imagineDragons.image)
console.log(imagineDragons.instagram)
