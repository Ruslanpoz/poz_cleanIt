import './style/cleaning.css'

function RegularlyCleaning() {
    return (
        <div className={'RegularlyPage'}>
            <img className={'RegularlyImg'} src={require('./img/cleaning/Group 145.png')} align={'left'} alt={'RegularlyCleaning'}/>
            <div id={'text'} align={'left'}>
                <h1>Regularly</h1>
                <h3>This is our standard – what we do with every order. We can also add custom services to customize
                    your cleaning offer.</h3>
                <h4>We wash the floor and wipe the baseboards Carpets vacuuming (with your vacuum cleaner if you don’t
                    have a vacuum cleaner don’t worry, we brush carpets) Wipe all accessible surfaces Wipe the switches
                    and door handles We clean mirrors and glass surfaces We collect and take out the garbage</h4>
                <button className={'btn_cleaning'}>Check availability</button>
            </div>


        </div>
    )
}

export default RegularlyCleaning