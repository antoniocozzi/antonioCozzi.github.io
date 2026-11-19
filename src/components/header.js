import './header.scss';

function Header() {
    return (
        <div className='header'>
            <div className='occupation'>
                <span>Software Engineer</span>
            </div>
            <hr></hr>
            <div className='year'>
                <span>{new Date().getFullYear()}</span>
            </div>
        </div>
    )
}

export default Header;