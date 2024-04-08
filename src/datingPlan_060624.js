
// insert your answer
const isGoOut = true // true or false
const watchMovie = "4D" // "IMAX" or "4D"

// see more
// IMAX : https://www.majorcineplex.com/promotion/all-collection-imax-godzilla-x-kong-the-new-empire
// 4D : https://x.com/saintpattinson/status/1775527640306511921?s=20

const isBreakfast = true // true or false

// เอาไปซ่อนให้ไกลสายตาพี่เอก
if (isGoOut){
  console.log(`morning :)`)
}
const planBySaly = new Promise((resolve, reject) => {
  if (isGoOut){
    setTimeout(() => {
      console.log(`meet me at 10:30am`);
      resolve()
    }, 3000)
  } else if(isGoOut === false){
    console.log(`are you sure...
    you can go to edit your answer within 7s`)
    setTimeout(() => {
      reject(console.log(`movie home!!, (probably series ei)`))
    }, 7000)
  }
})

planBySaly
  .then(() => {
    return (
      new Promise((resolve, reject) => {
        if(watchMovie){
          setTimeout(() => {
            console.log(`book ticket first`)
            let ticketDetail;
            if(watchMovie === "IMAX"){
              ticketDetail = `
              --------------------------------------------
              | ⁺˖   ෴            Godzilla x Kong:     |
              | ╭∩╮（•ㅅ•）╭∩╮    The New Empire (2024)   |
              |      ‿‿  ⸝⸝      > IMAX 3D    > 12:00   |
              --------------------------------------------
              `
            } else if (watchMovie === "4D"){
              ticketDetail = `
              --------------------------------------------
              | ⁺˖   ෴            Godzilla x Kong:     |
              | ╭∩╮（•ㅅ•）╭∩╮    The New Empire (2024)   |
              |      ‿‿  ⸝⸝      > 4D    > 13:30        |
              --------------------------------------------
              `
            } else {
              ticketDetail = `
              ---------------------------------
              |     ◼︎◼︎     ◼︎◼︎◼︎◼︎     ◼︎◼︎    |
              |    ◼︎ ◼︎     ◼︎   ◼︎    ◼︎ ◼︎    |
              |   ◼︎  ◼︎     ◼︎   ◼︎   ◼︎  ◼︎    |
              |  ◼︎◼︎◼︎◼︎◼︎    ◼︎   ◼︎  ◼︎◼︎◼︎◼︎◼︎  |
              |       ◼︎     ◼︎◼︎◼︎◼︎      ◼︎    |
              ---------------------------------
              `
            }
            setTimeout(() => {
              console.log(ticketDetail);
              setTimeout(() => {
                // TODO: add `buy น้ำอร่อย`
                console.log(`movie end, we're both kong oo oOOooo
                find น้ำอร่อย then go home :)`)
              }, 2000)
            }, 2000)
            resolve(
              new Promise((resolve, reject) => {
                if (isBreakfast){
                  setTimeout(() => {
                    console.log(`กินข้าวเช้ากับคุณ ก่อนเที่ยง`);
                    resolve(
                    )
                  }, 3000)
                } else {
                  reject(console.log(`หาไรทำรอหนังเล่น & เปลี่ยนไปเจอกันตอน 11:15am`))
                }
              })
            )
          }, 3000)
        } else {
          reject(console.log(`find delicious nam (แล้วจะมาทำไม555)`))
        }
      })
    )
  })
  .catch((notGoingOut) => notGoingOut);
