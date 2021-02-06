import { useState } from 'react'
import './AddTask.css'

const AddTask = () => {
  const [text, setText] = useState('')
  const [time, setTime] = useState('')
  const [reminder, setReminder] = useState(false)

  return (
    <form className='form-add'>
      <div className="form-control">
        <label>Text</label>
        <input type="text" placeholder='Add Text' />
      </div>

      <div className="form-control">
        <label>Time</label>
        <input type="text" placeholder='Add Time' />
      </div>

      <div className="form-control form-control-checkbox">
        <label>Set Reminder</label>
        <input type="checkbox" />
      </div>

      <div className="form-submit">
        <input type="submit" value="Save" className='btn' />
      </div>

    </form>
  )
}

export default AddTask