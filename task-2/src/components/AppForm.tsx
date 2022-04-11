import { AppInput } from './AppInput';
import { CalendarIcon } from '@heroicons/react/outline'

export const AppForm = () => {
  return (
    <div className=" max-w-xl w-full bg-blue-500 pt-5 px-8">
      <AppInput
        id="name"
        type="text"
        placeholder="Jhon Doe"
        label="Your full given name:"
      />

      <div className='grid md:grid-cols-2 gap-8 xs:grid-cols-1'>
        <AppInput
          id="date"
          type="text"
          icon={<CalendarIcon className='h-6 w-6 absolute z-10 left-2' />}
          placeholder="Janyary 7, 1984"
          label="Your full given name:"
        />

        <AppInput
          id="name"
          type="text"
          placeholder="Canada"
          label="Your full given name:"
        />
      </div>

      <AppInput
        id="education"
        type="text"
        placeholder="University of British Columbia"
        label="What school do you plan to attend?"
      />

      <AppInput
        id="textarea"
        type="textarea"
        placeholder="Enter details here"
        label="Please take a moment to describe your intended area of study:"
      />
  </div>
  )
}

