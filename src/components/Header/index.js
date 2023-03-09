import './index.scss';

export default function Header() {
    return (
        <header className="header">
            <div className='header-body'>
                <img src="https://theme.zdassets.com/theme_assets/678183/cc59daa07820943e943c2fc283b9079d7003ff76.svg" alt="Discord Logo"/>
                <div className='header-links'>
                    <p>Feedback</p>
                    <p>Português do Brasil </p>
                    <p>Enviar uma solicitação</p>
                    <p>Entrar</p>
                </div>
            </div>
        </header>
    )
}