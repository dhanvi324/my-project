/*Initial data:
        let totalAmount = 0;

🎯 Tasks
  1. Add ₹500 to the total
  2. Add ₹1200 to the total
  3. Apply a ₹200 discount
  4. Add 18% GST
  5. Print the final bill amount*/
  let totalAmount = 0;
  function sum(total,amount)
  {
    total=total+amount
    return total
  }
  function discount(total,discount)
  {
    total=total-discount
    return total
  }
  function gst(total,gst)
  {
    let gstamount=(total*gst)/100;
    total=total+gstamount
    return total
  }
  totalAmount=sum(totalAmount,500)
  totalAmount=sum(totalAmount,1200)
  totalAmount=discount(totalAmount,200)
  totalAmount=gst(totalAmount,18)
  console.log(totalAmount)
