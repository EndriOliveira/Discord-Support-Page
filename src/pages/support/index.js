import './index.scss';
import Card from '../../components/Card';
import helpMock from './mocks/helpMock.json';
import otherFormsMock from './mocks/otherFormsMock.json';
import Header from '../../components/Header';
import SupportFooter from '../../components/SupportFooter';
import HelpButton from '../../components/HelpButton';

export default function Support() {
    return (
        <>
            <Header/>
            <main className="suporte">
                <div className='helpCenter'>
                    <h2>Central de Ajuda</h2>
                    <input type='text' placeholder='Pesquisa' />
                </div>
                <h2>Precisa de ajuda? Conte com a gente.</h2>
                <div className='suporte-description'>
                    <p>De configurações de conta a permissões, encontre ajuda sobre tudo para o Discord</p>
                    <p>Se você é novo no Discord e está precisando de umas dicas, dê uma olhada no nosso Guia do Iniciante!</p>
                </div>
                <div className='card-list'>
                    {helpMock.map(card => (
                        <Card 
                            src={card.src} 
                            title={card.title} 
                            description={card.description}
                        />
                    ))}
                </div>
                <h2 className='otherForms'>Outras formas de conseguir ajuda!</h2>
                <div className='card-list'>
                    {otherFormsMock.map(card => (
                        <Card 
                            src={card.src} 
                            title={card.title} 
                            description={card.description}
                        />
                    ))}
                </div>
            </main>
            <SupportFooter/>
            <HelpButton/>
        </>
    )
}