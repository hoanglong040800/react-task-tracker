import { useState } from 'react'
import './AddTask.css'

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [time, setTime] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    text && time
      ? onAdd({ text, time, reminder })
      : alert('Please fill out input')
  }

  return (
    <form className='form-add fade-in' onSubmit={onSubmit}>

      <div className="form-control">
        <label>Text</label>
        <input
          type="text"
          placeholder='Add Text'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label>Time</label>
        <input
          type='time'
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>

      <div className="form-control form-control-checkbox">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <div className="form-submit">
        <input type="submit" value="Save" className='btn' />
      </div>

    </form>
  )
}

export default AddTask