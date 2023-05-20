// how much time it will take to retire based on a desired yield
const retiringByYield = ({initial = 0, recurrent = 0, interest = 1, projectedYield = 1, desiredIncome = 1}) => {
  const percentageInterest = 1 + (interest / 100)
  const monthlyInterest = Math.pow(percentageInterest, 1/12)

  const goal = desiredIncome * 100 / projectedYield

  let amount = initial
  let months = 0;
  while (amount < goal) {
    months++
    amount *= monthlyInterest
    amount += recurrent
  }

  return months
}