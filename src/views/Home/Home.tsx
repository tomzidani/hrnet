import { Link } from "react-router-dom"
import { Button, Fieldset, Form, Input, Row } from "@components/form"
import { Title } from "@components/content"
import { Container } from "@components/layout"

const Home = () => {
  const submitForm = () => {
    alert("Employee created !")
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
        <section className="home__form">
          <Title size="m" className="home__title">
            Créer un employé
          </Title>
          <Form onSubmit={submitForm}>
            <Row>
              <Input label="Prénom" id="firstname" />
            </Row>
            <Row>
              <Input label="Nom" id="lastname" />
            </Row>
            <Row>
              <Input label="Date de naissance" id="date-of-birth" type="date" />
            </Row>
            <Row>
              <Input label="Date de début" id="start-date" type="date" />
            </Row>
            <Fieldset legend="Adresse">
              <Row>
                <Input label="Rue" id="street" />
              </Row>
              <Row>
                <Input label="Ville" id="city" />
              </Row>
              <Row>
                <Input label="Code postal" id="zip-code" />
              </Row>
            </Fieldset>
            <Row>
              <Button>Enregistrer</Button>
            </Row>
          </Form>
        </section>
      </Container>
    </main>
  )
}

export default Home
