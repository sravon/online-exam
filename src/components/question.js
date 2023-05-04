import React from 'react'

export default function Question() {
  return (
    <div className='container mx-auto'>
        <div className='max-w-md mx-auto flex items-center justify-around border-b-4 border-cyanLight'>
            <h2 className='p-3 '>Time Remaining</h2> 
            <h6 className='p-3 text-3xl text-red-900'>05.00</h6> 
        </div>
        <div className='max-w-sm md:max-w-lg mx-auto'>
            <div className='mt-12 bg-gray-300 p-4 mb-3'>
                <h5 className='text-xl'>1. This is question 1 ?</h5>
                <div className='p-2'>
                    <div>
                        <input type="radio" id="html" name="fav_language" value="HTML"/>
                        <label htmlFor="html">Option 1</label>
                    </div>
                    <div>
                        <input type="radio" id="html" name="fav_language" value="HTML"/>
                        <label htmlFor="html">Option 2</label>
                    </div>
                    <div>
                        <input type="radio" id="html" name="fav_language" value="HTML"/>
                        <label htmlFor="html">Option 3</label>
                    </div>
                    <div>
                        <input type="radio" id="html" name="fav_language" value="HTML"/>
                        <label htmlFor="html">Option 4</label>
                    </div>
                </div>
            </div>
            <div className='mt-12 bg-gray-300 p-4 mb-3'>
                <h5 className='text-xl'>2. This is question 2 ?</h5>
                <div className='p-2'>
                    <div>
                        <input type="radio" id="html" name="fav_language" value="HTML"/>
                        <label htmlFor="html">Option 1</label>
                    </div>
                    <div>
                        <input type="radio" id="html" name="fav_language" value="HTML"/>
                        <label htmlFor="html">Option 2</label>
                    </div>
                    <div>
                        <input type="radio" id="html" name="fav_language" value="HTML"/>
                        <label htmlFor="html">Option 3</label>
                    </div>
                    <div>
                        <input type="radio" id="html" name="fav_language" value="HTML"/>
                        <label htmlFor="html">Option 4</label>
                    </div>
                </div>
            </div>
            <div className='mt-12 bg-gray-300 p-4 mb-3'>
                <h5 className='text-xl'>3. This is question 3 ?</h5>
                <div className='p-2'>
                    <div>
                        <input type="radio" id="html" name="fav_language" value="HTML"/>
                        <label htmlFor="html">Option 1</label>
                    </div>
                    <div>
                        <input type="radio" id="html" name="fav_language" value="HTML"/>
                        <label htmlFor="html">Option 2</label>
                    </div>
                    <div>
                        <input type="radio" id="html" name="fav_language" value="HTML"/>
                        <label htmlFor="html">Option 3</label>
                    </div>
                    <div>
                        <input type="radio" id="html" name="fav_language" value="HTML"/>
                        <label htmlFor="html">Option 4</label>
                    </div>
                </div>
            </div>
            <div className='mt-12 bg-gray-300 p-4 mb-3'>
                <h5 className='text-xl'>4. This is question 4 ?</h5>
                <div className='p-2'>
                    <div>
                        <input type="radio" id="html" name="fav_language" value="HTML"/>
                        <label htmlFor="html">Option 1</label>
                    </div>
                    <div>
                        <input type="radio" id="html" name="fav_language" value="HTML"/>
                        <label htmlFor="html">Option 2</label>
                    </div>
                    <div>
                        <input type="radio" id="html" name="fav_language" value="HTML"/>
                        <label htmlFor="html">Option 3</label>
                    </div>
                    <div>
                        <input type="radio" id="html" name="fav_language" value="HTML"/>
                        <label htmlFor="html">Option 4</label>
                    </div>
                </div>
            </div>
            <div className='mt-12 bg-gray-300 p-4 mb-3'>
                <h5 className='text-xl'>5. This is question 5 ?</h5>
                <div className='p-2'>
                    <div>
                        <input type="radio" id="html" name="fav_language" value="HTML"/>
                        <label htmlFor="html">Option 1</label>
                    </div>
                    <div>
                        <input type="radio" id="html" name="fav_language" value="HTML"/>
                        <label htmlFor="html">Option 2</label>
                    </div>
                    <div>
                        <input type="radio" id="html" name="fav_language" value="HTML"/>
                        <label htmlFor="html">Option 3</label>
                    </div>
                    <div>
                        <input type="radio" id="html" name="fav_language" value="HTML"/>
                        <label htmlFor="html">Option 4</label>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-end space-x-2 pr-3 mb-3'>
                <button className='px-4 py-2 text-white bg-darkViolet rounded-full'>Previous</button>
                <button className='px-4 py-2 text-dark bg-cyan rounded-full'>Next</button>
            </div>
        </div>
    </div>
  )
}
