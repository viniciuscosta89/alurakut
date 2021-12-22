import Box from '../components/Box'
import MainGrid from '../components/MainGrid'
import ProfileArea from '../components/ProfileArea'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../lib/AlurakutCommon';
import RelationsBox from '../components/RelationsBox';
import RelationsArea from '../styles/relations-area';
import WelcomeArea from '../styles/welcome-area';
import WelcomeBox from '../components/WelcomeBox';

interface profileUserDataProps {
  gitHubUser: string
}

function ProfileUserData(props: profileUserDataProps) {
  return (
    <>
      <img className="profile-area__img" src={`https://github.com/${props.gitHubUser}.png`} alt="" />

      <div className="profile-area__person-data">
        <h4 className="profile-area__name">Vinicius Costa</h4>
        <div className="profile-area__info">
          <span>maculino</span>
          <span>solteiro (a)</span>
          <span>Brasil</span>
        </div>
      </div>
    </>
  )
}

export default function Home() {
  const gitHubUser = 'viniciuscosta89';

  const pessoasFavoritas = [
    'thali25',
    'tuliomarcos',
    'washingtonj',
    'rurocha',
    'Roger-Melo',
    'felipefialho',
  ]

  return (
    <>
      <AlurakutMenu githubUser={gitHubUser} />
      <MainGrid>
        <ProfileArea>
          <Box>
            <ProfileUserData gitHubUser={gitHubUser} />

            <ul className="profile-area__list">
              <li className="profile-area__list-item">Perfil</li>
              <li className="profile-area__list-item">Recados</li>
              <li className="profile-area__list-item">Fotos</li>
              <li className="profile-area__list-item">Vídeos</li>
              <li className="profile-area__list-item">Depoimentos</li>
            </ul>

            <h5 className="profile-area__subtitle">Apps</h5>

            <ul className="profile-area__list">
              <li className="profile-area__list-item">Adicionar apps</li>
            </ul>

            <ul className="profile-area__list">
              <li className="profile-area__list-item">Listas</li>
              <li className="profile-area__list-item">Atualizações</li>
              <li className="profile-area__list-item">Configurações</li>
            </ul>

          </Box>
        </ProfileArea>

        <WelcomeArea>
          <WelcomeBox>
            <h1 className="welcome-box__title">Bem vindo (a), Vinicius</h1>
            <p className="welcome-box__todaysluck"><strong>Sorte de hoje:</strong> O melhor profeta do futuro é o passado</p>
            <OrkutNostalgicIconSet />
          </WelcomeBox>

          <WelcomeBox>
            <h2 className="subtitle">O que você deseja fazer?</h2>
          </WelcomeBox>
        </WelcomeArea>

        <RelationsArea as="section">
          <RelationsBox>
            <div className="relations-box__header">
              <h2 className="relations-box__title">Meus amigos</h2>
              <span className="relations-box__counter">({pessoasFavoritas.length})</span>
            </div>

            <div className="relations-box__grid">
              {pessoasFavoritas.map((pessoa) => (
                <a className="relations-box__item" href={`/users/${pessoa}`}>
                  <img className="relations-box__img" src={`https://github.com/${pessoa}.png`} alt={pessoa} />
                  <span className="relations-box__name">{pessoa}</span>
                </a>
              ))}
            </div>

            <a href="#" className="relations-box__link">Ver todos</a>
          </RelationsBox>

          <RelationsBox>
            <div className="relations-box__header">
              <h2 className="relations-box__title">Pessoas da Comunidade</h2>
              <span className="relations-box__counter">({pessoasFavoritas.length})</span>
            </div>

            <div className="relations-box__grid">
              {pessoasFavoritas.map((pessoa) => (
                <a className="relations-box__item" href={`/users/${pessoa}`}>
                  <img className="relations-box__img" src={`https://github.com/${pessoa}.png`} alt={pessoa} />
                  <span className="relations-box__name">{pessoa}</span>
                </a>
              ))}
            </div>

            <a href="#" className="relations-box__link">Ver todos</a>
          </RelationsBox>
        </RelationsArea>

      </MainGrid>
    </>
  )
}
