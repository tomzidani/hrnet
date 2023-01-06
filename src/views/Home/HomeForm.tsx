import { ChangeEvent, FC, useState } from "react"
import { Title } from "@components/content"
import { Button, Fieldset, Form, Input, Row } from "@components/form"

interface HomeFormProps {
  submitForm: any
}

const initialFormValues = {
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  startDate: "",
  street: "",
  city: "",
  zipCode: "",
}

const HomeForm: FC<HomeFormProps> = ({ submitForm }) => {
  const [formValues, setFormValues] = useState(initialFormValues)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value })
  }

  return (
    <section className="home__form">
      <Title size="m" className="home__title">
        Créer un employé
      </Title>
      <Form onSubmit={submitForm}>
        <Row>
          <Input label="Prénom" id="firstName" value={formValues.firstName} onChange={onChange} />
        </Row>
        <Row>
          <Input label="Nom" id="lastName" value={formValues.lastName} onChange={onChange} />
        </Row>
        <Row>
          <Input
            label="Date de naissance"
            id="dateOfBirth"
            type="date"
            value={formValues.dateOfBirth}
            onChange={onChange}
          />
        </Row>
        <Row>
          <Input label="Date de début" id="startDate" type="date" value={formValues.startDate} onChange={onChange} />
        </Row>
        <Fieldset legend="Adresse">
          <Row>
            <Input label="Rue" id="street" value={formValues.street} onChange={onChange} />
          </Row>
          <Row>
            <Input label="Ville" id="city" value={formValues.city} onChange={onChange} />
          </Row>
          <Row>
            <Input label="Code postal" id="zipCode" value={formValues.zipCode} onChange={onChange} />
          </Row>
        </Fieldset>
        <Row>
          <Button>Enregistrer</Button>
        </Row>
      </Form>
    </section>
  )
}

export default HomeForm
