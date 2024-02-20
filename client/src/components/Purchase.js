import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Purchase() {
  const [data, setData] = useState([]);
  const [coffee_id, setCoffee] = useState('');
  const [description, setDescription] = useState('');
  const [customer_name, setCustomerName] = useState('');
  const [OriginalPrice, setOriginalPrice] = useState(0);
  const [total_price, setTotalPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [submit, setSubmit] = useState(null);
  // const [purchasedGood, setPurchasedGood] = useState([]);
  const [currentOrder, setCurrentOrder] = useState(null);

  useEffect(() => {
    axios
      .get('/coffee')
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert('error');
      });

    // axios
    //   .get('/purchase')
    //   .then((res) => {
    //     setPurchasedGood(res.data);
    //     console.log(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     alert('error');
    //   });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const increaseQuality = () => {
    setQuantity((prevquantity) => prevquantity + 1);
  };

  const reduceQuality = () => {
    if (quantity > 1) {
      setQuantity((prevquantity) => prevquantity - 1);
    } else if (quantity === 1) {
      alert('Quantity cannot be less than  1');
    }
  };

  useEffect(() => {
    setTotalPrice(OriginalPrice * quantity);
    setCurrentOrder({
      coffee_id,
      customer_name,
      quantity,
      total_price,
    });
  }, [quantity, OriginalPrice, coffee_id, customer_name, total_price]);

  const handleOrder = () => {
    const selectedCoffee = data.find((coffee) => coffee.coffee_name === coffee_id);
    if (selectedCoffee) {
      axios
        .post('/purchase', {
          coffee_id: selectedCoffee.id,
          customer_name,
          quantity,
          total_price,
        })
        .then((res) => {
          console.log(res.data);
          setSubmit('success');
        })
        .catch((err) => {
          console.log(err);
          setSubmit('error');
          alert('error');
        });
    }

    // clear
     };

     return (
      <div className='bg-white text-white h-screen flex flex-col items-center container'>
        <div className=' flex items-center '>
          <div>
            <form onSubmit={handleSubmit} className='bg-gray-200 shadow-md rounded px-8 pt-2 w-96 justify-end'>
                {submit === 'success' && (
                  <div className='text-green-600 mb-4'>Order made successfully,Please wait as we process your order.</div>
                )}

                {submit === 'error' && (
                  <div className='text-red-600 mb-4'>Please confirm your order.</div>
                )}
                <h2 className='text-3xl font-bold mb-4 text-coffeeColor'>Order Here</h2>

              <div className='mb-4'>
                <label className='block text-gray-700'>
                  Customer Name
                  <input
                    type='text'
                    value={customer_name}
                    onChange={(e) => setCustomerName(e.target.value)}
                    required
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  />
                </label>
              </div>

              <div className='mb-4'>
                <label className='block text-gray-700'>
                  Coffee Choice
                  <select
                    value={coffee_id}
                    onChange={(e) => {
                      setCoffee(e.target.value);
                      const selectedCoffee = data.find((coffee) => coffee.coffee_name === e.target.value);
                      if (selectedCoffee) {
                        setDescription(selectedCoffee.description);
                        setOriginalPrice(selectedCoffee.price);
                        setTotalPrice(selectedCoffee.price * quantity);
                      }
                    }}
                    required
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  >
                    <option value=''>Select Coffee</option>
                    {data.map((coffee) => (
                      <option key={coffee.id} value={coffee.coffee_name}>
                        {coffee.coffee_name}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <div className='mb-4'>
                <label className='block text-gray-700'>Ingredients: {description}</label>
              </div>

              <div className='mb-4'>
                <label className='block text-gray-700'>Price: Ksh {OriginalPrice}</label>
              </div>

              <div className='mb-4'>
                <label className='block text-gray-700'>
                  Quantity
                  <div className='flex items-center'>
                    <button onClick={reduceQuality} className='px-2 py-1 border rounded border-gray-300'>
                      -
                    </button>
                    <input
                      type='text'
                      pattern='\d*'
                      inputMode='numeric'
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      className='flex-1 ml-2 mr-2 border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    />
                    <button onClick={increaseQuality} className='px-2 py-1 border rounded border-gray-300'>
                      +
                    </button>
                  </div>
                </label>
              </div>

              <div className='mb-4'>
                <label className='block text-gray-700'>Total Price: Ksh {total_price}</label>
              </div>

              <div className='mb-4'>
                <button
                  onClick={handleOrder}
                  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer'
                  disabled={!customer_name}
                >
                  Order
                </button>
              </div>
            </form>
          </div>
      
          <div className='w-full sm:w-1/2 p-4 sm:p-8'>
            {currentOrder && (
              <div className='ml-4'>
                <h1 className='bg-coffeeColor text-white p-2 text-center text-2xl font-bold'>
                  Confirm Order</h1>
                  <table className='table-auto'>
                    <tbody>
                      <tr className='bg-gray-100'>
                        <td className='text-gray-800 '>Customer name:</td>
                        <td className='text-gray-800'>{currentOrder.customer_name}</td>
                      </tr>
                      <tr className='bg-gray-200'>
                        <td className='text-gray-800 '>Coffee:</td>
                        <td className='text-gray-800'>{currentOrder.coffee_id}</td>
                      </tr>
                      <tr className='bg-gray-100'>
                        <td className='text-gray-800 '>Quantity:</td>
                        <td className='text-gray-800'>{currentOrder.quantity}</td>
                      </tr>
                      <tr className='bg-gray-200'>
                        <td className='text-gray-800 '>Total Price:</td>
                        <td className='text-gray-800'>{currentOrder.total_price}</td>
                      </tr>
                    </tbody>
                  </table>

              </div>
            )}
          </div>
        </div>
</div>

     )
      
}

export default Purchase;
