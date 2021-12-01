// why is const a good choice for declaring an array type variable?
const playlist = [
  {
    name: 'Sweet Dreams',
    artist: 'The Eurythmics',
    duration: 216,
    playCount: 0,
    youtubeLink: 'https://www.youtube.com/watch?v=qeMFqkcPYcg'
  },
  {
    name: 'Cry Me a River',
    artist: 'Justin Timberlake',
    duration: 290,
    playCount: 0,
    youtubeLink: 'https://www.youtube.com/watch?v=DksSPZTZES0'
  },
  {
    name: 'With a Little Help from my Friends',
    artist: 'Joe Cocker',
    duration: 289,
    playCount: 0,
    youtubeLink: 'https://www.youtube.com/watch?v=a3LQ-FReO7Q'
  },
  {
    name: 'Bohemian Rhapsody',
    artist: 'Queen',
    duration: 359,
    playCount: 0,
    youtubeLink: 'https://www.youtube.com/watch?v=fJ9rUzIMcZQ'
  },
  {
    name: 'Somebody To Love',
    artist: 'Queen',
    duration: 309,
    playCount: 0,
    youtubeLink: 'https://www.youtube.com/watch?v=kijpcUv-b8M'
  },
  {
    name: 'Another One Bites the Dust',
    artist: 'Queen',
    duration: 222,
    playCount: 0,
    youtubeLink: 'https://www.youtube.com/watch?v=fJ9rUzIMcZQ'
  },
  {
    name: 'Purple Rain',
    artist: 'Prince',
    duration: 477,
    playCount: 0,
    youtubeLink: 'https://www.youtube.com/watch?v=TvnYmWpD_T8'
  },
]

function formatDuration(duration) {
  const seconds = duration % 60; // duration - minutes * 60
  const minutes = Math.floor(duration / 60) % 60;
  const hours = Math.floor(duration / 3600);
  return `${hours ? (hours + ':') : ''}${minutes}:${seconds}`
}

function copy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// ✅ Accessing Data in Arrays

// this function should return the first element
function retrieveFirst(playlist) {
  return playlist[0]
}

// // 👟👟👟 uncomment the lines below to test

console.log('retrieveFirst', retrieveFirst(playlist))
console.log('playlist after retrieveFirst', playlist)

// ✅ adding and removing values

function addSongToBeginningOfPlaylist(playlist, song) {
  //destructive version: [song, ...playlist]
  return playlist.unshift(song)

}

// // 👟👟👟 uncomment the lines below to test

console.log('addSongToBeginningOfPlaylist', addSongToBeginningOfPlaylist(playlist, {
  name: "What'd I Say",
  artist: 'Ray Charles',
  duration: 255,
  playCount: 0,
  youtubeLink: 'https://www.youtube.com/watch?v=HAjeSS3kktA'
})) 
console.log('playlist after addSongToBeginningOfPlaylist', playlist)

function addSongToEndOfPlaylist(playlist, song) {
  //nondestructive version: [...playlist, song]
  return playlist.push(song);
}

// 👟👟👟 uncomment the lines below to test

console.log('addSongToEndOfPlaylist',addSongToEndOfPlaylist(playlist, {
  name: "Georgia On My Mind",
  artist: 'Ray Charles',
  duration: 217,
  playCount: 0,
  youtubeLink: 'https://www.youtube.com/watch?v=ggGzE5KfCio'
})) 
console.log('playlist after addSongToEndOfPlaylist', playlist)

function removeLastSongFromPlaylist(playlist) {
  //lastElement = playlist[playlist.length - 1]
  //nondestructive: playlist.slice(0, -1) or playlist.slice().pop()
  return playlist.pop();
}

// // 👟👟👟 uncomment the lines below to test

console.log('removeLastSongFromPlaylist', removeLastSongFromPlaylist(playlist))
console.log('playlist after removeLastSongFromPlaylist', playlist)

function removeFirstSongFromPlaylist(playlist) {
  // first element: playlist[0]
  return playlist.shift();

}

// // 👟👟👟 uncomment the lines below to test

console.log('removeFirstSongFromPlaylist', removeFirstSongFromPlaylist(playlist))
console.log('playlist after removeFirstSongFromPlaylist', playlist)

// ✅ Iteration

function logSongNames(playlist) {
  // return playlist.map(song => console.log(song.name))
  // for (const song of playlist) {
  //   console.log(song.name)
  // }
  return playlist.forEach(song => console.log(song.name))

}

// // 👟👟👟 uncomment the lines below to test

logSongNames(playlist) 
console.log('playlist after logSongNames', playlist)

function calculatePlaylistDuration(playlist) {
  const totalDuration= playlist.reduce((summedDurations, currentSong) => {
    return summedDurations + currentSong.duration
  }, 0)
  return formatDuration(totalDuration);
}

// // 👟👟👟 uncomment the lines below to test

console.log('calculatePlaylistDuration',calculatePlaylistDuration(playlist))
console.log('playlist after calculatePlaylistDuration', playlist)


function songsByArtist(playlist, artist) {
  return playlist.filter(song => song.artist === artist)
}

// // 👟👟👟 uncomment the lines below to test

console.log('songsByArtist', songsByArtist(playlist, "Queen")) // uncomment this to test
console.log('playlist after songsByArtist', playlist)

// what method of iteration should we use here?
function renameArtist(playlist, oldArtistName, newArtistName) {
// find the song that has the oldArtistName and then reassign it
const song = playlist.find(song => song.artist === oldArtistName);
song.artist = newArtistName;
return song;
// // what if we needed to update multiple songs:
// return playlist
//    .filter(song => song.artist === oldArtistName)
//    .map(song => {
//         song.artist = newArtistName
//         return song
// })
// // or we could take this appraoch if we didn't care about the return value
// for (const song of playlist) {
//   if (song.artist === oldArtistName) {
//     song.artist = newArtistName
//   }
// }
}

// // 👟👟👟 uncomment the lines below to test

console.log('renameArtist', renameArtist(playlist, "Prince", "The Artist Formerly Known As Prince"))
console.log('playlist after renameArtist', playlist)


// // Let's discuss Pass by value vs pass by reference here


console.log("------------------------");
console.log("⬇️ Break Out Activities ⬇️");
console.log("🚨 Comment Out Lecture Code Above Before Starting 🚨");
console.log("📌 Follow instructions in the EXERCISE.md file")
console.log("💡 Use console.log() To Check Answers 💡");
console.log("------------------------");

const todoList = [
  {
    task: 'Learn about JS Data Types',
    complete: true,
    dueDate: new Date('2021-11-22')
  },
  {
    task: 'Learn about Iteration',
    complete: false,
    dueDate: new Date('2021-11-24')
  },
]
// 🚧 Task 1: `addTask(todoList, task)`

function addTask(todoList, taskName) {
  const newTask = {
    task : taskName, 
    complete : false,
  };
  todoList.push(newTask);
  return newTask;
}


// // 👟👟👟 uncomment the lines below to test

console.log('addTask', addTask(todoList, 'Practice using the filter method'))
console.log('todoList after addTask', todoList)





// 🚧 Task 2: `markComplete(todoList, task)`

function markComplete(todoList, task) {
  const foundTask = todoList.find(t => t.task === task)
  if (foundTask) {
    foundTask.complete = true;
    return foundTask
  }
  return 'task not found'
}

// // 👟👟👟 uncomment the lines below to test

console.log('markComplete', markComplete(todoList, 'Learn about Iteration'))
console.log('todoList after markComplete', todoList)





// 🚧 Task 3: `addDueDateToTask(todoList, task, dueDate)`

function addDueDateToTask(todoList, task, dueDate) {
  const foundTask = todoList.find(t => t.task === task)
  if (foundTask) {
    foundTask.dueDate = dueDate;
    return foundTask
  }
  return 'task not found'

}

// // 👟👟👟 uncomment the lines below to test

console.log('addDueDateToTask', addDueDateToTask(todoList, 'Practice using the filter method', new Date('2021-11-24')))
console.log('todoList after addDueDateToTask', todoList)





// ADVANCED DELIVERABLE!

// Think about different ways you could do this
// What would you want to return?
// How would you remove the task from todoList passed as an argument destructively?
// How would your approach change if you wanted to return a todoList array without the removed task non-destructively? (Without affecting the todoList passed as an argument)
// Which is more difficult? Why?
function removeTask(todoList, task) {
  let removedTask;
  for (let i = 0; i < todoList.length; i++) {
    if (todoList[i].task === task) {
      removedTask = todoList.splice(i, 1)[0];
      break;
    }
  }
  return removedTask;
  }

// // 👟👟👟 uncomment the lines below to test

// console.log('addTask', addTask(todoList, 'demo task'));
// console.log('todoList after addTask', todoList);
// console.log('removeTask', removeTask(todoList, 'demo task'));
// console.log('todoList after removeTask', todoList);

