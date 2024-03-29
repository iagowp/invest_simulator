// how much time it will take to get where you want investing X money
const retiring = ({initial = 0, recurrent = 0, interest = 1, goal = 0}) => {
  const percentageInterest = 1 + (interest / 100)
  const monthlyInterest = Math.pow(percentageInterest, 1/12)

  let amount = initial
  let months = 0;
  while (amount < goal) {
    months++
    amount *= monthlyInterest
    amount += recurrent
  }

  return months
}