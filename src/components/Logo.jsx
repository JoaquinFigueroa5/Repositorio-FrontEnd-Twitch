import logo from '../assets/img/availability-svgrepo-com.svg'

export const Logo = ({text}) => {
    return (
        <div className='auth-form-logo-container'>
            <img src={logo} alt="PNG" />
            <span>{text}</span>
        </div>
    )
}