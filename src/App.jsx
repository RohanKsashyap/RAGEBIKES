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
    <h1>Your Dream Bike Awaits</h1>
</div>

<div class="container">
    <div class="section" id="bikes">
        <h2>Featured Bikes</h2>
        <div class="bikes">
            <div class="bike-card">
                <img src="src/public/bikebg.jpg" alt="Bike 1"/>
                <h3>Bike Model 1</h3>
                <p>Great for city rides. Stylish and efficient.</p>
            </div>
            <div class="bike-card">
                <img src="src/public/bikebg.jpg" alt="Bike 2"/>
                <h3>Bike Model 2</h3>
                <p>Perfect for mountain adventures.</p>
            </div>
            <div class="bike-card">
                <img src="src/public/bikebg.jpg" alt="Bike 3"/>
                <h3>Bike Model 3</h3>
                <p>Speed and elegance combined.</p>
            </div>
        </div>
    </div>

    <div class="section" id="about">
        <h2>About Us</h2>
        <p>We are a premium bike showroom offering a wide range of bicycles for all types of riders. Our mission is to help you find the perfect bike that suits your lifestyle and needs.</p>
    </div>

    <div class="section" id="contact">
        <h2>Contact Us</h2>
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
