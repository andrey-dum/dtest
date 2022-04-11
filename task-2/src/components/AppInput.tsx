import React, { FC } from 'react'

interface IProps {
  id: string;
  type?: "text" | "textarea" | "date";
  placeholder: string;
  label: string;
  icon?: any;
}

export const AppInput: FC<IProps> = ({id, label, placeholder, type, icon}) => {
  return (
    <div className=' bg-blue-500 pb-6 text-white '>
      <label className="italic mb-1 block" htmlFor={id}>{label}</label>
      
      {
        type === "textarea" ? (
          <div className='relative'>
            <textarea
              id={id}
              rows={5}
              className=" input"
              placeholder={placeholder}
            />
          </div>
        ) : (
          <div className='relative flex items-center bg-transparent '>
            {icon}
          
            <input
              className={`${icon ? 'indent-6 ' : ''} input`}
              type={type}
              id={id}
              placeholder={placeholder}
            />
          </div>
        )
      }
    </div>
    
  )
}

