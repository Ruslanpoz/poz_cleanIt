import './style/infoPage.css'

function PageInfo() {
    return (
        <div id={'PageInfo'}>
            <img className={'InfoImg'} src={require('./img/page/Group101.png')} align={'left'}/>
            <div className={'Contact'}>
                <p className={'City'}>Plaut, 10
                    Science Park 76706,
                    Rehovot Israel</p>
                <p className={'Phone'}> Phone: 054-56-99-350
                    E-mail: go@tel-ran.com</p>
            </div>
        </div>
    )
}

export default PageInfo