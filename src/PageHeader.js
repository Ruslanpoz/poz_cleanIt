import './style/header.css'


function PageHeader() {
    return (
        <div className={'page'}>

            <ul className={'ul_header'}>
                <img className={'logo'} src={require("./img/page/Group101.png")} alt='logo'/>
                <li>Home</li>
                <li>Book</li>
                <li>Join our team</li>
                <button className={'btn_signup'}>Sign up</button>
            </ul>
            <div>
                <img className={'text_img'} src={require('./img/page/Group 239.png')} align={'right'}/>
                <p className={'always'}>always clean</p>
                <p className={'home'}>HOME & OFFICE</p>
                <p>It’s hard to find someone who enjoys cleaning. It takes a lot of energy, time, and
                    you always have to do it when there are so many other things to do around you.</p>

                <p> Is it possible to make it so that your
                    surroundings are clean, but not to create a constant torture of cleaning? Of course it is!</p>

                <button className={'btn_book'}>Book Now</button>
            </div>
            <ul className={'ul_cleaning'}>
                <li>Regularly Cleaning</li>
                <li>Deep Cleaning</li>
                <li>Office Cleaning</li>
                <li>Windows Cleaning</li>
            </ul>
        </div>
    )
}

export default PageHeader