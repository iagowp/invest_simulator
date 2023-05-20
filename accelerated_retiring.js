// how much you need to invest to retire in X amount of time
const acceleratedRetiring = ({initial = 0, time = 0, interest = 1, goal = 0}) => {
  const percentageInterest = 1 + (interest / 100)
  const monthlyInterest = Math.pow(percentageInterest, 1/12)

  let amount
  let investment = 0
  do {
    investment++
    amount = initial
    for(let i = 0; i < time; i++){
      amount *= monthlyInterest
      amount += investment
    }
  } while (amount < goal)
  return investment
}