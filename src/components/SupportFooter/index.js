/* eslint-disable jsx-a11y/anchor-is-valid */
import './index.scss';

export default function SupportFooter() {
    return (
        <footer>
            <div className='footer-body'>
                <div className='learnMore'>
                    <a href='#'>
                        Saiba Mais
                    </a>
                </div>
                <div className='platforms'>
                    <a href='#' className='apps-web'>
                        <img src='https://theme.zdassets.com/theme_assets/678183/faa4afbc252ccaa8d959cedf65f6e59b4d75b167.svg' alt='Web'/>
                    </a>
                    <a href='#' className='apps-android'>
                        <img src='https://theme.zdassets.com/theme_assets/678183/fc0920a1ef72122cbcd69849ff4431fc8095a11b.svg' alt='Android'/>
                    </a>
                    <a href='#' className='apps-ios'>
                        <img src='https://theme.zdassets.com/theme_assets/678183/e2b9fb24a30f282977edd9c280820029e767b160.svg' alt='IOS'/>
                    </a>
                    <a href='#' className='apps-windows'>
                        <img src='https://theme.zdassets.com/theme_assets/678183/47100981c9f8e640b597c228528f303b5b5ae4ac.svg' alt='Windows'/>
                    </a>
                    <a href='#' className='apps-osx'>
                        <img src='https://theme.zdassets.com/theme_assets/678183/22df88a591db1baf678cb7435a7ec52317daba6f.svg' alt='OSX'/>
                    </a>
                </div>
                <div className='footer-final'>
                    <div className='brand'>
                        <img src='https://theme.zdassets.com/theme_assets/678183/2a944f43170f2222e136854fe9c9e2c9ea6a1971.svg' alt='Discord Logo'/>
                    </div>
                    <nav className='nav'>
                        <div className='col'>
                            <div className='link'>
                                <a href='#'>Download</a>
                            </div>
                            <div className='link'>
                                <a href='#'>Ajuda e Suporte</a>
                            </div>
                            <div className='link'>
                                <a href='#'>Feedback</a>
                            </div>
                            <div className='link'>
                                <a href='#'>Status</a>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='link'>
                                <a href='#'>Parceiros</a>
                            </div>
                            <div className='link'>
                                <a href='#'>HypeSquad</a>
                            </div>
                            <div className='link'>
                                <a href='#'>Merchandising</a>
                            </div>
                            <div className='link'>
                                <a href='#'>Branding</a>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='link'>
                                <a href='#'>Companhia</a>
                            </div>
                            <div className='link hiring'>
                                <a href='#'>Trabalhe Conosco</a>
                                <span className='gray'> — </span><span className='hiring-text'>Estamos contratando</span>
                            </div>
                            <div className='link'>
                                <a href='#'>Blog</a>
                            </div>
                            <div className='link'>
                                <a href='#'>Termos</a>
                                <span className='gray'> & </span>
                                <a href='#'>Privacidade</a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </footer>
    )
}