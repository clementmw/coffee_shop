import React, { useEffect, useState} from 'react'
import axios from 'axios'

function Purchase() {
    const [data, setData] = useState([])
    const [coffee_id, setCoffee] = useState([])
    // const [description, setDescription] = useState([])
    const [customer_name, setCustomerName] = useState([])
    const [OriginalPrice, setOriginalPrice] = useState(0)
    const [total_price, setTotalPrice] = useState(0)
    const [quantity, setQuantity] = useState(1)
    const [submit, setSubmit] = useState(null);

    useEffect(()=>{
        axios.get('/coffee')
        .then(res =>{
            setData(res.data)
             console.log(res.data)
        })

    },[])

    const handleSubmit = (e)=>{
        e.preventDefault();
        // axios.post('/coffee',{coffee_name,description,price})
        // .then(res =>{
        //     console.log(res.data)
        // })
    }
    const increaseQuality = () => {
        setQuantity(prevquantity => prevquantity + 1);
    };
    const reduceQuality = () => {
        if(quantity > 1){
        setQuantity(prevquantity => prevquantity - 1);
        }
        else if(quantity === 1){
            alert("Quantity cannot be less than  1")
        }
    };
    useEffect(()=>{
        setTotalPrice(OriginalPrice * quantity);

    },[quantity,OriginalPrice])

    const handleOrder = (e)=>{
        const selectedCoffee = data.find(coffee => coffee.coffee_name === coffee_id);
        if (selectedCoffee){
        axios.post('/purchase',{coffee_id:selectedCoffee.id,customer_name,quantity,total_price})
        .then(res =>{
            console.log(res.data)
            setSubmit('success')
        })
        .catch(err =>{
            console.log(err)
            setSubmit('error')
            alert ("error")
        })

        }
        
    }
  return (
    <div>
      <div>Order-Here</div>
      <form onSubmit={handleSubmit}>
            {submit === 'success' && (
              <div className='text-green-600 mb-4'>Purchase made successfully.</div>
            )}

            {submit === 'error' && (
              <div className='text-red-600 mb-4'>Please confirm your order.</div>
            )}
        <label>
          Customer Name
          <input
            type="text"
            value={customer_name}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
        </label>
        
        <label>
          Coffee Choice
            <select
                value={coffee_id}
                onChange={(e) => {
                    setCoffee(e.target.value);
                    // Fetch the price of the selected coffee
                    const selectedCoffee = data.find(coffee => coffee.coffee_name === e.target.value);
                    if (selectedCoffee) {
                      setOriginalPrice(selectedCoffee.price);
                      setTotalPrice(selectedCoffee.price * quantity);
                    }
                  }}
                  required    
            >
                <option value="">Select Coffee</option>
                {data.map((coffee) => (
                <option key={coffee.id} value={coffee.coffee_name}>
                    {coffee.coffee_name}
                </option>
                ))}
            </select>
        </label>
        <label>
          Price: Ksh{OriginalPrice}
        </label>

        <label>
            Quantity
           <button onClick={reduceQuality}>-</button>
               <input 
               type="text" 
               pattern='\d*'
               inputMode='numeric'
               value={quantity} 
               onChange={(e) => setQuantity(e.target.value)}
               />
           <button onClick={increaseQuality}>+</button>
        </label>

        <label>
          Total Price: Ksh {total_price}
        </label>
        <button onClick={handleOrder} className='bg-cyan-200'>
            Order
        </button>
      </form>
      <div>
      </div>
    </div>
  )
}

export default Purchase