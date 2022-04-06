import './style/cleaning.css'

function DeepCleaning() {
    return (
        <div className={'RegularlyPage'}>
            <img className={'DeepImg'} src={require('./img/cleaning/Group 217.png')} align={'left'} alt={'DeepCleaning'}/>
            <div id={'text'} align={'left'}>
                <h1>Deep</h1>
                <h3>When our team comes to you, is managed by the manager. The manager evaluates the duration, checks
                    the quality and answers all your questions.</h3>
                <h4>Wipe all accessible surfaces, switches and door handles Washing windows, mirrors and glass surfaces
                    Washing furniture inside and outside Wiping the walls Washing chandeliers and lamps We wash the
                    floor, wipe the baseboards and vacuum the carpet We take out the garbage</h4>
                <button className={'btn_cleaning'}>Check availability</button>
            </div>


        </div>
    )
}

export default DeepCleaning