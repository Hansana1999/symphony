import styles from '/styles/Home1.module.css'
import EdCategories from "./EdCategories"

const Wrapper = () => {
  const data = [
    {
      path:"./Vp1",
      cateImg: "/images/Education/9.jpg",
      title: "Horn ",
      brand:"Apple",
      model:"single",
      decs: "You can use decorate your table Table suitable",
      phone:"021548936",
      email:"ergset@gmail.com",
    },
    {
      path:"./Vp2",
      cateImg: "/images/Education/10.jpg",
      title: "Air filter ",
      brand:"Apple",
      model:"single",
      decs: "You can use decorate your table Table suitable",
      phone:"021548936",
      email:"ergset@gmail.com",
    },
    {
      path:"./Vp3",
      cateImg: "/images/Education/11.jpg",
      title: "Fuel filter ",
      brand:"Apple",
      model:"single",
      decs: "You can use decorate your table Table suitable",
      phone:"021548936",
      email:"ergset@gmail.com",
    },
    {
      path:"./Vp4",
      cateImg: "/images/Education/12.jpg",
      title: "Oil filter ",
      brand:"Apple",
      model:"single",
      decs: "You can use decorate your table Table suitable",
      phone:"021548936",
      email:"ergset@gmail.com",
    },
  ]
  return (
    <>
    <h1 className= {styles.qwe3}>Stationaries</h1>
    <EdCategories/>
      <section className= {styles.wbackground}>
        <div className={styles.grid9}>
          {data.map((val, index) => {
            return (
              <div className={styles.vpproduct} key={index}>
                <div>
                <img src={val.cateImg} alt='' />
                </div>
                <h5>{val.title}</h5>
                <p>{val.brand}</p>
                <p>{val.model}</p>
                <p>{val.decs}</p>
                <p>Whatsapp : {val.phone}</p>
                <p>{val.email}</p>
                <p><link rel = "canonical" href = "https://www.javatpoint.com/"  />    
                <button className='btn--medium'>CONTACT</button></p>
              </div>
            ) 
          })}
        </div>
      </section> 
    </>
  )
}

export default Wrapper