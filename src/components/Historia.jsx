import '../styles/historia.css'

const Historia = () => {

  return (
    <section className='historia' id='historia'>
        <div className="header">
            <h1>
                Historia sanktuarium
            </h1>
        </div>
        <div className="container-historia--info">
            <header>
                <ul className='historia-ul'>
                    <li style={{"--i": 1}}>
                        Początki istnienia klasztoru sięgają dnia 22 czerwca 1382, 
                        kiedy to do Polski zostali sprowadzeni paulini z macierzystego klasztoru św. 
                        Wawrzyńca pod Budą na Węgrzech przez księcia Władysława Opolczyka i osadzeni 
                        mocą dekretu z 9 sierpnia tegoż roku na wzgórzu w pobliżu wsi Stara Częstochowa, 
                        którego proboszczem był Henryk Biel herbu Ostoja z Błeszna. 
                        Oddany im został wówczas drewniany kościół parafialny pw. 
                        Najświętszej Panny Maryi Dziewicy i Rodzicielki. 
                        Parafię przeniesiono natomiast do filialnego kościoła św. 
                        Zygmunta w Częstochowie. Szczególne znaczenia dla Polaków miejsce to nabrało 
                        podczas potopu szwedzkiego w 1655 oraz 1 kwietnia 1656, 
                        gdy król Jan II Kazimierz Waza złożył śluby lwowskie.
                    </li>
                </ul>
            </header>
            <header className='right-box'>
                <ul className='historia-ul'>
                    <li style={{"--i": 1}}>
                        W ciągu niespełna 200 lat istnienia Fortecy wielokrotnie 
                        pod jej murami stawał nieprzyjaciel, 
                        jednak główne rozstrzygnięcia najczęściej zapadały na polach 
                        kluczowych bitew. Stąd też działania militarne 
                        pod murami częstochowskiego Sanktuarium miały najczęściej 
                        znaczenie drugorzędne.
                        Sanktuarium Maryjne przetrwało następujące bitwy: <br></br>
                        - Oblężenie podczas potopu szwedzkiego w 1655 <br></br>
                        - Bitwa podczas rokoszu Lubomirskiego w 1665 <br></br>
                        - Oblężenia podczas II najazdu szwedzkiego 1702-1709 <br></br>
                        - Oblężenie podczas konfederacji barskiej <br></br>
                    </li>
                </ul>
            </header>
        </div>
    </section>
  )
}

export default Historia