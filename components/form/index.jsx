import PropTypes from "prop-types";
import { childrenPropType } from "../../renderer/PropTypeValues";

function Input({
  type = 'text',
  placeholder,
  required = null,
  name
}) {
  return (
    <input
      className={`form__input ${type !== 'text' ? `form__input--${type}` : ''}`}
      type={type}
      placeholder={placeholder ? `${placeholder}${required ? ' *' : ''}` : ''}
      required={required}
      name={name}
      id={name}
    />
  )
}

function Textarea(props) {
  return (
    <textarea {...props} />
  )
}

function Select(props) {
  return (
    <select {...props}>
      {props.options.map((option, idx) => {
        return (
          <option key={`${props.name}-option-${idx}`}>{option}</option>
        )
      })}
    </select>
  )
}

function Checkbox(props) {
  return (
    <>
      <Input type="checkbox" {...props} />
      <label className="form__label" htmlFor={props.name}></label>
    </>
  )
}

function FormGroup({children}) {
  return (
    <div className="form__group">
      {children}
    </div>
  )
}

function Form({
  id,
  submitCallback,
  elements,
  submitText,
  noRequired = false
}) {
  const handleSubmit = (e) => {
    const data = new FormData(e.target);

    submitCallback(data);
  }

  return (
    <form
      className="form" id={id}
      onSubmit={handleSubmit}
    >
      {elements.map((input, idx) => {

        const { props, el } = input;

        return (
          <FormGroup key={`form-el-${idx}`}>
            {el === 'input' && (
              <Input {...props} />
            )}

            {el === 'checkbox' && (
              <Checkbox {...props} />
            )}

            {el === 'textarea' && (
              <Textarea {...props} />
            )}

            {el === 'select' && (
              <Select {...props} />
            )}
          </FormGroup>
        );
      })}

      <div className="form__action">
        {!noRequired && <span>* Campo obligatorio</span>}
        <button type="submit">
          {submitText}
        </button>
      </div>
    </form>
  )
}

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  name: PropTypes.string
}

Checkbox.propTypes = {...Input.propTypes};

Textarea.propTypes = {...Input.propTypes};

Select.propTypes = {
  ...Input.propTypes,
  options: PropTypes.array
};

Form.propTypes = {
  id: PropTypes.string,
  submitCallback: PropTypes.func,
  elements: PropTypes.array,
  submitText: PropTypes.string,
  noRequired: PropTypes.bool
}

FormGroup.propTypes = {
  children: childrenPropType
}

export {
  Input,
  Textarea,
  Select,
  Checkbox,
  Form,
  FormGroup
}