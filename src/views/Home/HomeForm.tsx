import { Select } from "tz-react-simple-select"
import { ChangeEvent, FC, FormEvent, useState } from "react"
import { Title } from "@components/content"
import { Button, Date as DateInput, Fieldset, Form, Input, Row } from "@components/form"
import { states } from "@utils/providers/states.provider"
import { useAppDispatch } from "@/app/hooks"
import { add } from "@/app/features/employeeSlice"

interface HomeFormProps {
  displayConfirmModal: any
}

const initialFormValues = {
  firstName: "",
  lastName: "",
  dateOfBirth: new Date(),
  startDate: new Date(),
  street: "",
  city: "",
  state: states[0].value,
  zipCode: "",
  department: "sales",
}

const HomeForm: FC<HomeFormProps> = ({ displayConfirmModal }) => {
  const [formValues, setFormValues] = useState(initialFormValues)
  const dispatch = useAppDispatch()

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault()

    const { startDate, dateOfBirth } = formValues

    const formatStartDate = startDate.toLocaleDateString("fr")
    const formatDateOfBirth = dateOfBirth.toLocaleDateString("fr")

    dispatch(add({ ...formValues, startDate: formatStartDate, dateOfBirth: formatDateOfBirth }))

    displayConfirmModal()
  }

  /**
   * Handle the react form value state on input change.
   *
   * @param {ChangeEvent<HTMLInputElement>} e
   */
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value })
  }

  /**
   * Handle the react form value state on datepicker input change.
   *
   * @param {Date} date
   * @param {string} id
   */
  const onDateChange = (date: Date, id: string) => {
    setFormValues({ ...formValues, [id]: date })
  }

  return (
    <section className="home__form">
      <Title size="m" className="home__title">
        Créer un employé
      </Title>
      <Form onSubmit={onFormSubmit}>
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
            <Select label="État" options={states} value={formValues.state} onChange={onChange} id="state" />
          </Row>
          <Row>
            <Input label="Code postal" id="zipCode" value={formValues.zipCode} onChange={onChange} />
          </Row>
        </Fieldset>
        <Row>
          <Select
            label="Département"
            options={[
              {
                label: "Ventes",
                value: "sales",
              },
              {
                label: "Marketing",
                value: "marketing",
              },
              {
                label: "Informatique",
                value: "engineering",
              },
              {
                label: "Ressources humaines",
                value: "hr",
              },
              {
                label: "Légal",
                value: "legal",
              },
            ]}
            value={formValues.department}
            onChange={onChange}
            id="department"
          />
        </Row>
        <Row>
          <Button>Enregistrer</Button>
        </Row>
      </Form>
    </section>
  )
}

export default HomeForm
