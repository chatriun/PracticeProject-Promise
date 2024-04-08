const answer = {
  isGoOut: //answer,
  isBreakfast: //answer,
  watchMovie: //answer,
}

let message = `morning ka ♡`

const getPlan = (answer) => {
  let meetingTime;
  if (answer.isGoOut && answer.isBreakfast){
    meetingTime = `10:30`
  } else {
    meetingTime = `11:30`
  }

  message += `
  meet me at ${meetingTime}`
  return Promise.resolve(message)
}

const getBreakfast = (message) => {
  const lastMessage = !answer.watchMovie ? ` then go home!` : ``
  if(answer.watchMovie){
    message += `
    
  book ticket first
  *do not book D17-D18 @Icon`
  } else if(answer.isBreakfast){
    message += ` find something a-roi :)`
  } else if (!answer.isBreakfast){
    message += `

  get some drink...`
  }

  return Promise.resolve(message += lastMessage)
}

const watchMovie = (message) => {
  if(answer.watchMovie){
    message += `
  
  enjoy movie with you!
  then get some fresh (bubble) tea
  
  then go home!`
  }

  return Promise.resolve(console.log(message))
}

getPlan(answer)
  .then((message) => getBreakfast(message))
  .then((message) => watchMovie(message))
  .catch(() => console.log(`error :(`))