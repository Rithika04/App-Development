import React, { useState, useEffect } from 'react';

import Header from './header';
//import About from './About';
import '../src/home.css';
function Home() {
    // Create state variables for the index and image array
    const [index, setIndex] = useState(0);
    const images = ['https://as2.ftcdn.net/v2/jpg/00/47/93/97/1000_F_47939745_RCUe9RDphC7oGQVBJ81GAiCGbqaZxddE.jpg', 'https://img.freepik.com/free-photo/library-with-books_1063-98.jpg?size=626&ext=jpg&ga=GA1.2.857617279.1689238429&semt=ais', 'https://img.freepik.com/free-photo/three-books-near-bookshelf_23-2147845951.jpg?size=626&ext=jpg&ga=GA1.1.857617279.1689238429&semt=ais'];
    
    
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);
    
    // Render the current image
    return (
       
        <>
            
    
        <div className='home'>
        
    <h2>LIBRARY MANAGEMENT SYSTEM</h2>
    <p>
    
    Library management systems are designed to manage the movement of books and maintain records of the members in a library. 
    The software solution is designed based on the system requirements, 
    the people involved, the content of the operation and the activity to be performed.
    A library management system is software that is designed to manage all the functions of a library. 
    It helps librarian to maintain the database of new books and the books that are borrowed by members along with their due dates
    Library Management is the adaptation of the principles and techniques of management to the library situation. 
    It includes decision making and getting the work done by others. 
    The five fundamental management functions are: Planning, Organizing, Staffing, Leading and Controlling.
    </p>
  

        </div>
        <img src={images[index]}  style={{ width: '600px', height: '600px', top: '100%', position: 'top 20px' }} />
        <br/>
        <br/>
        </>
        
        
        );
}

export default Home;