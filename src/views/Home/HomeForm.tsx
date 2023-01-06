import { ChangeEvent, FC, useState } from "react"
import { Title } from "@components/content"
import { Button, Date as DateInput, Fieldset, Form, Input, Row } from "@components/form"

interface HomeFormProps {
  submitForm: any
}

const initialFormValues = {
  firstName: "",
  lastName: "",
  dateOfBirth: new Date(),
  startDate: new Date(),
  street: "",
  city: "",
  zipCode: "",
}

const HomeForm: FC<HomeFormProps> = ({ submitForm }) => {
  const [formValues, setFormValues] = useState(initialFormValues)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value })
  }

  const onDateChange = (date: any, id: string) => {
    setFormValues({ ...formValues, [id]: date })
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
          <DateInput
            label="Date de naissance"
            value={formValues.dateOfBirth}
            onChange={onDateChange}
            id="dateOfBirth"
          />
        </Row>
        <Row>
          <DateInput label="Date de début" value={formValues.startDate} onChange={onDateChange} id="startDate" />
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
