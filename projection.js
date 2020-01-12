const projector = ({initial = 0, time = 0, recurrent = 0, interest = 1}) => {
  let amount = initial
  for (let i = 0; i < time; i ++) {
    amount *= interest
    amount += recurrent
  }
  return Math.round(amount * 100) / 100;
}
