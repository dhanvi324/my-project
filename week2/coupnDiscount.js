const coupons = {
    'WELCOME10': { type: 'percentage', value: 10, minAmount: 1000 },
    'FLAT500': { type: 'flat', value: 500, minAmount: 5000 },
    'ELECTRONICS20': { type: 'percentage', value: 20, minAmount: 10000, category: 'electronics' }
  };
  export function validateCoupon(couponCode, cartTotal, cartItems){
    let res=coupons.find(obj=>obj.key==couponCode)
    if(!res) return 'false'
    if(cartTotal=res.minAmount) return 'true'
  }