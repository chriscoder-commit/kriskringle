let friends = ['friend1', 'friend2', 'friend3', 'friend4', 'friend5', 'friend6', 'friend7', 'friend8', 'friend9', 'friend10', 'friend11', 'friend12']


let partnerBoys = friends


// fisher and yates method of shuffling an array 
for(let i = friends.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * i)
  const temp = friends[i]
  friends[i] = friends[j]
  friends[j] = temp
}


// converting the array to an object
const friendsObj = Object.assign({}, friends);


// spltting the object into an array of objects
const separated = Object.entries(friendsObj);
for(const [key, value] of Object.entries(friendsObj)) {
  // console.log(key, value)
}


// assigning each element a partner 
for (let boy of separated){
  boy.partner = partnerBoys[Math.floor(Math.random() * partnerBoys.length)];
    // this make sure the array removes the boy who was randomly selected above^. The .filter essentialy makes new array by reassigning the value of 
    // partnerBoys to filter by any name that is not == to the randomly selected boy.partner on line 29
    partnerBoys = partnerBoys.filter(pboy => pboy !== boy.partner)
  }

console.log("separated", separated) 





// filter works *kinda* like .map in that it pulls things from an array and pushes them to a new one!
// however map just creates a new array, and leaves the original. filter actually alters the original array by taking the values!

