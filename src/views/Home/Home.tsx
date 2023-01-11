import Rodal from "rodal"
import { FormEvent, useState } from "react"
import { Link } from "react-router-dom"
import { Title } from "@components/content"
import { Container } from "@components/layout"
import HomeForm from "./HomeForm"

const Home = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  /**
   * Submit the create employee form.
   *
   * @param {FormEvent} e
   */
  const submitForm = (e: FormEvent) => {
    e.preventDefault()

    setIsModalVisible(true)
  }

  /**
   * Close the modal.
   */
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
          Employé créé avec succès !
        </Rodal>
      )}
    </main>
  )
}

export default Home
