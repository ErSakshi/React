import React from 'react'
import style from "./flipkart.module.css"


const FlipKartModuleHeader = () => {
  return (
    <div>
     <header id={style.header}>
        <article className={style.logo}>
          <img  src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"  style={{paddingRight:"60px",justifyContent:"center"}} />
          <svg  id={style.searchbar}xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>
            <input type="text"   className={style.search}  placeholder="Search for Products, Brands and More"/>
        </article>

        <article className={style.rightnav}>
       

          <section  className={style.sect} style={{display:"flex"}} >
          <img src="https://media.istockphoto.com/id/1207017584/vector/user.jpg?s=2048x2048&w=is&k=20&c=MhsrkKnDLcLZmCQzcOOjPBoIPjbkSQDHao2ZJfnpJEQ=" style={{height:"40px"}}/>
          <p style={{paddingTop:"8px"}}>Login </p>
          </section>
          <section  className={style.sect}  style={{display:"flex"}} >
          <img src="https://media.istockphoto.com/id/1142859120/vector/shopping-cart-icon.jpg?s=612x612&w=0&k=20&c=LmEO0Y97CTlNw9FaHfaLNWlnTab1Sw-pdDQ8lwicZJ0=" style={{height:"50px"}} />
          <p style={{paddingTop:"10px"}}>Cart</p>
          </section>
          <section className={style.sect}  style={{display:"flex"}} >
          <img src="https://cdn-icons-png.freepik.com/256/6734/6734588.png?ga=GA1.1.2087967281.1733236177&semt=ais_hybrid" style={{height:"30px",marginTop:"10px"}} />
           <p style={{paddingTop:"12px" ,marginLeft:"2px"}}>Become a Seller</p>
          </section>
          <section className={style.sect}>
            <img src="https://cdn-icons-png.freepik.com/256/16106/16106606.png?ga=GA1.1.2087967281.1733236177&semt=ais_hybrid" style={{height:"15px",marginTop:"15px" ,marginRight:"15px" }}/>
          </section>
        </article>

     </header>

      <div id={style.divsec}>
        <section>
          <img src="https://rukminim2.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100" style={{height:"90px"}} />
          <h3>Grocery</h3></section>

        <section>
          <img src="https://rukminim2.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100" style={{height:"90px"}}/>
          <h3>Mobile</h3></section>
        <section>
          <img src="" alt="" />
          <h3>Fashion</h3></section>
        <section>Electronics</section>
        <section>Home&Furniture</section>
        <section>Appliances</section>
        <section>
          <img src="https://rukminim2.flixcart.com/flap/80/80/image/71050627a56b4693.png?q=100" style={{height:"100px"}} />
          <h3>Flight Bookings</h3></section>
        <section>Beauty, Toys&More</section>
        <section>Two Wheelers</section>
      </div>
     </div>
    
  )
}

export default FlipKartModuleHeader