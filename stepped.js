/**
 * Multi level condition
 */
const price = 5000;

if (price >= 5000) {
  // 10 percent discount
  const discount = (price * 10) / 100;
  console.log(discount);
  const payAmount = price - discount;
  console.log(payAmount);
} else if (price > 2500) {
  // 5% discount
  const discount = (price * 5) / 100;
  const payAmount = price - discount;
  console.log(payAmount);
} else {
  console.log(price);
}
