import React from 'react'
import styles from "./Cart.module.css"
const Cart = () => {
  return (
    <>
    <div className={styles.navbar_cart}></div>   {/* import navbar at attch here */}

    <div className={styles.basket_head}>
        <h1>Your Shopping Basket</h1>
        </div>
     {/* product count div */}
     <div className={styles.product_count}><span>1</span><span>Product</span></div> 
     {/* all cart functionality div starts   */}
     <div className={styles.cart_main}>
        <div className={styles.items_div}></div>
        {/* pin check div start */}
        <div className={styles.price_main}>
            <div className={styles.pin_check}>
                <div className={styles.pin_check_in}>
                <span>Deliver to</span>
                <input/>
                <button>Check</button>
                </div>
            </div>
            {/* offer section start */}
            <div className={styles.offer_div}>
                <div className={styles.offer_div2}>
                <div className={styles.offer_img_div}><img src='https://www.lifestylestores.com/static/icons/gift-box.png' alt='offer'/></div>
                <div>
                    <ul>
                    <li><p>Offers for you !</p></li>
                    <li><p>Choose and apply voucher in 2 simple</p></li>
                        steps
                    </ul>
               </div>
               </div>
            </div>
            {/* total pricing calculation div started */}
            <div className={styles.price_calc}>
                <div className={styles.mrp_div}>
                    <div>Total MRP</div>
                    <div>5999</div>
                </div>
                <div className={styles.discount_div}>
                    <div>Offer discount</div>
                    <div>-315</div>
                </div>
                <div className={styles.charge_div}>
                    <div>Shipping charge</div>
                    <div>Free</div>
                </div>
                <div className={styles.total_div}>
                    <div>Total</div>
                    <div>734</div>
                </div>
                <div className={styles.out_button}>
                    <button>Checkout now</button>
                </div>
                <div>Shipping charges might vary based on pincode delivery <br></br>location</div>
            </div>
        </div>
     </div>
    </>
  )
}

export default Cart