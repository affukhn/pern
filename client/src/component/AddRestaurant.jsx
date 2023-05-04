import React from 'react'

function AddRestaurant() {
  return (
    <div className='mb-4'>
        <form action=''>
            <div className="form-row">
            <div class="col">
                    <input type='text' className='from-control' placeholder='name'></input>
                </div>
                <div class="col">
                    <input type='text' className='form-contol' placeholder='location'></input>
                </div>
                <div class="col">
                    <select className=  'custom-select my-1 mr-sm-2'>
                        <option disabled>price_range</option>
                        <option value='1'>$</option>
                        <option value='2'>$$</option>
                        <option value='3'>$$$</option>
                        <option value='4'>$$$$</option>
                        <option value='5'>$$$$$</option>
                    </select>
                </div>
                <button className="btn btn-primary">Add </button>
            </div>
        </form>
    </div>
  )
}

export default AddRestaurant