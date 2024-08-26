import { useState } from 'react'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <body>


                <header>
                    <h1>Welcome to Our Bike Showroom</h1>
                </header>

                <nav>
                    <a href="#home">Home</a>
                    <a href="#bikes">Bikes</a>
                    <a href="#about">About Us</a>
                    <a href="#contact">Contact</a>
                </nav>

                <div class="hero">
                    <h1>Your Dream Bike <br /> Awaits</h1>
                </div>

                <div class="container">
                    <div class="section1" id="bikes" >

{/* // video */}


                        <video src="/bike-speedometer.mp4" autoPlay loop muted></video>



                        <h2>Featured Bikes</h2>
                        <div class="bikes">
                            <div class="bike-card" id='bike-effect' title='premium bikes'>
                                <img src="/royal-enfiels.jpg" alt="Bike 1" id='royal-bike' />
                                <h3>PREMIUM </h3>
                                <p>Great for city rides. Stylish and efficient.</p>
                            </div>
                            <div class="bike-card" id='bike-effect' title='offroad bikes'>
                                <img src="/offroad-bike.jpg" alt="Bike 2" id='offroad' />
                                <h3>OFFROAD</h3>
                                <p>Perfect for mountain adventures.</p>
                            </div>
                            <div class="bike-card" id='bike-effect' title=' sports bike'>
                                <img src="/bikebg.jpg" alt="Bike 3" />
                                <h3>SPORTS</h3>
                                <p>Speed and elegance combined.</p>
                            </div>
                        </div>
                    </div>

                    <div class="section2" id="about">
                        <h2>About Us</h2>
                        <p>We are a premium bike showroom offering a wide range of bicycles for all types of riders. Our mission is to help you find the perfect bike that suits your lifestyle and needs.</p>

                    </div>

                    <div class="section3" id="contact">
                        <h2>Contact Us</h2>
                        <div class="login-page">
                            <div class="form">
                                <form class="register-form">
                                    <input type="text" placeholder="name" />
                                    <input type="password" placeholder="password" />
                                    <input type="text" placeholder="email address" />
                                    <button>create</button>
                                    <p class="message">Already registered? <a href="#">Sign In</a></p>
                                </form>
                                <form class="login-form">
                                    <input type="text" placeholder="username" />
                                    <input type="password" placeholder="password" />
                                    <button>login</button>
                                    <p class="message">Not registered? <a href="#">Create an account</a></p>
                                </form>
                            </div>
                        </div>
                        <p>Address: 123 Bike Lane, Cycle City, XY 12345</p>
                        <p>Email: info@bikeshowroom.com</p>
                        <p>Phone: (123) 456-7890</p>
                    </div>
                </div>

                <footer>
                    <p>&copy; 2024 Bike Showroom. All rights reserved.</p>
                </footer>
            </body>
        </>
    )
}

export default App
