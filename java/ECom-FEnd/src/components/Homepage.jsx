import { Link } from 'react-router-dom'; 

const HomePage = () => {
  return (
    <div className="min-h-screen bg-blue-500">
        <nav className="flex justify-between items-center p-4 bg-white shadow-md" style={{ backgroundColor: "blue" }}>
            <div className="flex items-center space-x-4">
                <img src="logo.png" alt="E-Commerce Logo" />
                <h1>Product management system</h1>
            </div>
            <div>
                {/* Use the correct Link component with the paths defined in App.jsx */}
                <Link to="/login" className="text-blue-500 hover:underline mx-2">SignIn</Link>
                <Link to="/register" className="text-blue-500 hover:underline mx-2">SignUp</Link>
                <Link to="/about" className="text-blue-500 hover:underline mx-2">About Us</Link>
            </div>
        </nav>
        <div className="p-4">
            <p>Free shipping on orders over $50!</p>
            <p>24/7 Customer Support</p>
            <p>Easy Returns and Exchanges</p>
        </div>
        <h1>Welcome to the E-Commerce Store</h1>
        <p>Discover our wide range of products and enjoy shopping!</p>
    </div>
  );
}

export default HomePage;