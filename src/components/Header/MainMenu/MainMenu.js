import './MainMenu.scss'
import Select, { components } from 'react-select'
import Icon from '../../controls/Icon/Icon'
import { Translation } from 'i18nano'

export default function MainMenu({ onSelect }) {

  const options = [
    { value: 'Menu FAQ', label: 'Menu FAQ' },
    { value: 'Menu Donate', label: 'Menu Donate' },
    { value: 'Menu How', label: 'Menu How' },
    { value: 'Menu Contacts', label: 'Menu Contacts' },
  ]

  const handleSelect = (el) => {
    onSelect(el.value)
  }

  const ValueContainer = ({ children, ...props }) => (
    <components.ValueContainer {...props}>
      <Icon className='icon' iconName={'list'} />
      {children.filter(el => el.key !== 'placeholder')}
    </components.ValueContainer>
  )

  const Option = (props) => (
    <components.Option {...props}>
      <Translation path={props.value} />
    </components.Option>
  )

  return (
    <div className='main-menu'>
      <Select
        className='main-menu-select-control'
        options={ options }
        isSearchable={ false }
        menuPortalTarget={ document.body }
        onChange={ handleSelect }
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary25: 'rgba(242, 242, 242, 1)',
          },
        })}
        styles={{
          control: () => ({
            boxShadow: 'none',
            border: 'none',
          }),
          indicatorsContainer: () => ({
            display: 'none'
          }),
          valueContainer: (base) => ({
            ...base,
            display: 'flex'
          }),
          menu: (base) => ({
            ...base,
            width: 'fit-content',
            boxShadow: 'none',
          }),
          option: (base) => ({
            ...base,
            whiteSpace: 'nowrap',
            borderRadius: '8px'
          }),
        }}
        components={{
          ValueContainer,
          Option
        }}
      />
    </div>
  )
}
