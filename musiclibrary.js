var library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three"
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003"
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952"
    }
  },
  playlists: {
    p01: {
      id: "p01",
      name: "Coding Music",
      tracks: ["t01", "t02"]
    },
    p02: {
      id: "p02",
      name: "Other Playlist",
      tracks: ["t03"]
    }
  },
  printPlaylists: function () {
    for (var list in this.playlists) {
      console.log(list + ": " + this.playlists[list].name + " - " + this.playlists[list].tracks.length + " tracks");
    }
  },
  printTracks: function () {
    for (var key in this.tracks) {
      console.log(key + ": " + this.tracks[key].name + " by " + this.tracks[key].artist + " (" + this.tracks[key].album + ")");
    }
  },
}

library.printPlaylists();
library.printTracks();

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks




// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

//   var printPlaylist = function (playlistId) {

//          //First, get the array of track ID's from library.playlists.(passed in playlist id)
//          var trackIds = library.playlists[playlistId].tracks;
//          // console.log(library.playlists.p01.id);
//          console.log( library.playlists[playlistId].id + ": " + library.playlists[playlistId].name + " - " + library.playlists[playlistId].tracks.length + " tracks");
//          //Second, for each of the track ids from the above array, find the track names from library.tracks
//          for (var trackId in trackIds) {
//                 var tid = trackIds[trackId];

//          console.log(tid + ": " + library.tracks[tid].name + " by " + library.tracks[tid].artist + " (" + library.tracks[tid].album + ")");
//          }
//   }
//   printPlaylist("p01");

// adds an existing track to an existing playlist

//   var addTrackToPlaylist = function (trackId, playlistId) { // adding t03 to p01 tracks array
//          library.playlists[playlistId].tracks.push(trackId);
//          console.log(library.playlists[playlistId].tracks);
//   }
// addTrackToPlaylist("t03", "p01");




// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function () {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

// adds a track to the library

//   var addTrack = function (name, artist, album) { // create a track object
//          var newId = uid();
//          var newTrack = {
//                 id: newId,
//                 name: name,
//                 artist: artist,
//                 album: album,
//          };
//          library.tracks[newId] = newTrack;
//          console.log(library.tracks);
//   }

//   addTrack("jack ass", "jobber magee", "sucks")

// adds a playlist to the library

//   var addPlaylist = function (name) {
//          var pId = uid();
//          var newPlaylist = {
//                 id: pId,
//                 name: name,
//                 tracks: [],
//          }
//          library.playlists[pId] = newPlaylist;
//          console.log(library.playlists);
//   }

//   addPlaylist("yoyoyo");

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function (query) {

}