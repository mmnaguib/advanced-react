import './toggle.css';

interface Props{
    handleChange: () => void,
    isChecked: boolean
}

const Toggle = ({handleChange, isChecked}: Props) => {
  return (
    <div className='toggle-container'>
        <input type='checkbox' id="check" className='toggle' onChange={handleChange} checked={isChecked} />
        <label htmlFor='check'></label>
    </div>
  )
}

export default Toggle