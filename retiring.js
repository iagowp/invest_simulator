const retiring = ({initial = 0, time = 0, interest = 1, goal = 0}) => {
  let amount
  let investment = 0
  do {
    investment++;
    amount = initial
    for(let i = 0; i < time; i++){
      amount *= interest
      amount += investment
    }
  } while (amount < goal)
  return investment
}