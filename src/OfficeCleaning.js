import './style/cleaning.css'

function OfficeCleaning() {
    return (
        <div className={'RegularlyPage'}>
            <img className={'OfficeImg'} src={require('./img/cleaning/Group 185.png')} align={'left'} alt={'OfficeCleaning'}/>
            <div id={'text'} align={'left'}>
                <h1>Office</h1>
                <h3>The cleaner comes every morning or evening to restore cleanliness and order.</h3>
                <h4>Wipe all accessible surfaces, switches and door handles Washing windows, mirrors and glass surfaces
                    Washing furniture inside and outside Wiping the walls Washing chandeliers and lamps We wash the
                    floor, wipe the baseboards and vacuum the carpet We take out the garbage</h4>
                <button className={'btn_cleaning'}>Check availability</button>
            </div>


        </div>
    )
}

export default OfficeCleaning