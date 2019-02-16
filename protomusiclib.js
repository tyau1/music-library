function Library(name, creator, playlist) {
  this.name = name;
  this.creator = creator;
  this.playlist = playlist;
}

function Playlist(name, tracks) {
  this.name = name;
  this.tracks = tracks;

  Playlist.prototype.overallRating = function() {
    let sumOfRating = 0;
    let avgRating = 0;

    for (let track of this.tracks) {
      sumOfRating += track.rating;
    }

    avgRating = sumOfRating / this.tracks.length
    return avgRating;
  }

  Playlist.prototype.totalDuration = function() {
    let duration = 0;
    for (let track of this.tracks) {
      duration += track.length;
    }
    return duration;
  }
}

function Track(title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
}

let track1 = new Track("Hello", 5, 132);
let track2 = new Track("a", 4, 154);
let track3 = new Track("abcd", 2, 134);
let track4 = new Track("efgh", 2, 210);
let track5 = new Track("fehrfwfw", 2, 234);
let track6 = new Track("ayeee", 2, 134);

let playlist1 = new Playlist("List 1", [track1, track2, track3]);
let playlist2 = new Playlist("List 2", [track5, track4, track1]);
let playlist3 = new Playlist("List 3", [track2, track3, track1]);

let library = new Library("Test Library", "Leon", [playlist1, playlist2, playlist3]);

console.log("Playlist 1 Overall Rating: ", playlist1.overallRating());
console.log("Playlist 2 Overall Rating: ", playlist2.overallRating());
console.log("Playlist 1 Total Duration: ", playlist1.totalDuration());
console.log("Playlist 2 Total Duration: ", playlist2.totalDuration());