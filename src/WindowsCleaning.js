import './style/cleaning.css'

function WindowsCleaning() {
    return (
        <div className={'RegularlyPage'}>
            <img className={'WindowsImg'} src={require('./img/cleaning/Group 238.png')} align={'left'} alt={'WindowsCleaning'}/>
            <div id={'text'} align={'left'}>
                <h1>Windows</h1>
                <h3>Our employee arrives with everything necessary at the agreed time and gets to work immediately.</h3>
                <h4>Wash glass on both sides We clean the frame inside and out Washing mosquito nets Wipe the window
                    sills</h4>
                <button className={'btn_cleaning'}>Check availability</button>
            </div>


        </div>
    )
}

export default WindowsCleaning