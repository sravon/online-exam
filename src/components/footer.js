import React from 'react'

function Footer() {
  return (
    <footer className="py-16 bg-veryDarkViolet">
        <div className="container flex flex-col items-center justify-between mx-auto 
         space-y-16 md:flex-row md:space-y-0 md:items-start">
            {/* <!-- logo --> */}
            <img src="images/logo.svg" alt=""/> 
            {/* <!-- Menu container --> */}
            <div className="flex flex-col space-y-16 md:space-x-20 md:flex-row md:space-y-0">
                {/* <!-- Menu 1 --> */}
                <div className="flex flex-col items-center w-full md:items-start">
                    <div className="mb-5 font-bold text-white capatalize">
                        Features
                    </div>
                    <div className="flex flex-col items-center space-y-3 md:items-start">
                        <a href="#" className="capitalize text-grayishViolet hover:text-cyan">
                            Link Shortening
                        </a>
                        <a href="#" className="capitalize text-grayishViolet hover:text-cyan">
                            Brand Shortening
                        </a>
                        <a href="#" className="capitalize text-grayishViolet hover:text-cyan">
                            Analyzes
                        </a>
                    </div>
                </div>
                {/* <!-- Menu 2 --> */}
                <div className="flex flex-col items-center w-full md:items-start">
                    <div className="mb-5 font-bold text-white capatalize">
                        Resources
                    </div>
                    <div className="flex flex-col items-center space-y-3 md:items-start">
                        <a href="#" className="capitalize text-grayishViolet hover:text-cyan">
                            Blogs
                        </a>
                        <a href="#" className="capitalize text-grayishViolet hover:text-cyan">
                            Developers
                        </a>
                        <a href="#" className="capitalize text-grayishViolet hover:text-cyan">
                            degree
                        </a>
                    </div>
                </div>
                {/* <!-- Menu 3 --> */}
                <div className="flex flex-col items-center w-full md:items-start">
                    <div className="mb-5 font-bold text-white capatalize">
                        Company
                    </div>
                    <div className="flex flex-col items-center space-y-3 md:items-start">
                        <a href="#" className="capitalize text-grayishViolet hover:text-cyan">
                            About
                        </a>
                        <a href="#" className="capitalize text-grayishViolet hover:text-cyan">
                            our team
                        </a>
                        <a href="#" className="capitalize text-grayishViolet hover:text-cyan">
                            achiebement
                        </a>
                    </div>
                </div>
            </div>
            {/* <!-- social contrainer --> */}
            <div className="flex space-x-6">
                <a href="">
                    <img src="images/icon-facebook.svg" alt="" className="ficon" />
                </a>
                <a href="">
                    <img src="images/icon-instagram.svg" alt="" className="ficon" />
                </a>
                <a href="">
                    <img src="images/icon-pinterest.svg" alt="" className="ficon" />
                </a>
                <a href="">
                    <img src="images/icon-twitter.svg" alt="" className="ficon" />
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer