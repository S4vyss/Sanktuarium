import '../styles/zrodlo.css'

const Zrodlo = () => {
  return (
    <section className='zrodlo--section' id='zrodlo'>
        <div className="header">
            <h1>
                Źródła
            </h1>
        </div>
        <div className="info--box zrodla--box">
            <article>
                <ol>
                    <li>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <h2>Zdjęcia</h2>
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <h2>Informacje</h2>
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <h2>Informacje o Historii</h2>
                        </a>
                    </li>
                </ol>
            </article>
        </div>
    </section>
  )
}

export default Zrodlo