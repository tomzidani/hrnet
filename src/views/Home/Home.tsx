import { useState } from "react"
import Rodal from "rodal"
import { Link } from "react-router-dom"
import { Title } from "@components/content"
import { Container } from "@components/layout"
import HomeForm from "./HomeForm"

const Home = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const submitForm = (e: any) => {
    e.preventDefault()

    setIsModalVisible(true)
  }

  const onModalClose = () => {
    setIsModalVisible(false)
  }

  return (
    <main className="app-home">
      <Container size="s">
        <section className="home__header">
          <Title size="l" tag="h1">
            HR Net
          </Title>
          <Link to="/employes" className="home__employees">
            Voir les employés actuels
          </Link>
        </section>
        <HomeForm submitForm={submitForm} />
      </Container>

      {/* Modal */}
      {isModalVisible && (
        <Rodal visible={isModalVisible} onClose={onModalClose} closeOnEsc className="modal">
          <div className="modal__close" onClick={onModalClose}></div>
          Bonjour !
        </Rodal>
      )}
    </main>
  )
}

export default Home
