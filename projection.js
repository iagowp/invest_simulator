// how much money you will have after X amount of time
const projector = ({initial = 0, time = 0, recurrent = 0, interest = 1}) => {
  const percentageInterest = 1 + (interest / 100)
  const monthlyInterest = Math.pow(percentageInterest, 1/12)

  let amount = initial
  for (let i = 0; i < time; i ++) {
    amount *= monthlyInterest
    amount += recurrent
  }
  return Math.round(amount * 100) / 100
}
