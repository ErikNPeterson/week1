var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {
  for (var playlistId in library.playlists) {  // (var x in y ) value will always be y[x]
    var playlist = library.playlists[playlistId] // we use square [] brackets to refer to get keys that we don't know the name
    console.log(playlist.id + ": " + playlist.name + " - " + playlist.tracks.length + " tracks")
  }
}
// printPlaylists();


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
 for (var allTracks in library.tracks) {  // (var x in y ) value will always be y[x]
    var accessTracks = library.tracks[allTracks] // we use square [] brackets to refer to get keys that we don't know the name
    console.log(accessTracks.id + ": " + accessTracks.name + accessTracks.artist + " (" + accessTracks.album + ")")
  }
}

// printTracks();

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
  var calledPlaylist = library.playlists[playlistId]
  console.log(calledPlaylist.id + ": " + calledPlaylist.name + " - " + calledPlaylist.tracks.length + " tracks")

  calledPlaylist.tracks.forEach(function(track) { // t01, t02
    var trackInfo = library.tracks[track];
    console.log(trackInfo.id + ": " + trackInfo.name + ' by ' + trackInfo.artist + " (" + trackInfo.album + ")")
  })
}
// printPlaylist('p01');

//GOOD UP TO THIS POINT! *********************************

// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
  var newPlaylist = library.playlists[playlistId].tracks;
  newPlaylist.push(trackId);
  console.log(newPlaylist);
}
 // addTrackToPlaylist('t01','p02');


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (name, artist, album) {
  var newId = uid();
  var newTrack = {
    id: newId,
    name: name,
    artist: artist,
    album: album
  };
  library.tracks[newId] = newTrack;
}

addTrack("Michael's Party JAM", "Michael Greenleaf", "what chu gonna do with all that code");

// console.log(library.tracks);
// adds a playlist to the library

var addPlaylist = function (name) {
  var newPlaylist = {
     id: uid(),
    name: name,
    tracks: [],
  };
  library.playlists[name] = newPlaylist;
}

addPlaylist("Coding Songs!!!");

console.log(library.playlists);

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}