import '../styles/header.css';
import { useEffect, useRef } from 'react'

const Header = () => {

    const ref = useRef();

    useEffect(() => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener("click", function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute("href")).scrollIntoView({
                    behavior : "smooth"
                });
            });
        });
    },[]);

  return (
      <>
        <div className="header">
            <h1>
                Sanktuarium Maryjne na Jasnej Górze
            </h1>
        </div>
        <header className='heading' ref={ref}>
            <ul>
                <li style={{"--i": 4}}><a href='#media'>Media</a></li>
                <li style={{"--i": 3}}><a href='#historia'>Historia Sanktuarium</a></li>
                <li style={{"--i": 2}}><a href='#info'>Informacje o Sanktuarium</a></li>
                <li style={{"--i": 1}}><a href='#zrodlo'>Źródła</a></li>
            </ul>
        </header>
      </>
  )
}

export default Header
