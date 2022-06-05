import '../styles/info.css'

const Info = () => {
  return (
    <section className='info--section' id='info'>
        <div className="header">
          <h1>
            Informacje
          </h1>
        </div>
        <div className="info--box">
            <article>
                <img src="https://sanktuaria.maps24.eu/wp-content/uploads/Tschenstochau-Kirche-3.jpg" alt="nothin" />
            </article>
            <article>
                Sanktuarium wraz z klasztorem zakonu paulinów w Częstochowie, 
                położone na wzgórzu o tej samej nazwie. 
                Jedno z ważniejszych miejsc kultu maryjnego 
                oraz najważniejsze centrum pielgrzymkowe katolików w Polsce, 
                ze znajdującym się obrazem Matki Bożej Częstochowskiej, 
                który uważany jest za cudowny, oraz zbiorem wielu innych dzieł sztuki, 
                najczęściej sakralnej, stanowiących w większości dary wotywne wiernych. 
                16 września 1994 obiekt uznany został za pomnik historii.
            </article>
        </div>
    </section>
  )
}

export default Info