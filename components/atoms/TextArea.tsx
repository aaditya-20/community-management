import { ReactElement, useState } from 'react';

type TextAreaProps = {
  label: string;
  placeholder?: string;
  className?: string;
  textAreaCSS?: string;
};

const TextArea = ({ label, placeholder = '', className = '',LabelCSS=' ', textAreaCSS = '' }: TextAreaProps): ReactElement => {
  // state to hold the current input value
  const [value, setValue] = useState('');

  // function to handle input change events
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    // update the state with the new value
    setValue(e.target.value);
  };

  // render the textarea element with a label
  return (
    <div className={`flex flex-col ${className}`}>
      {/* label for the textarea */}
      <label className={`text-sm font-medium text-gray-700 ${LabelCSS}`}>{label}</label>

      {/* the textarea element itself */}
      <textarea
        value={value} // set the value of the textarea to the current state
        onChange={handleChange} // call handleChange on input change events
        placeholder={placeholder}
        className={`px-3 py-12 mt-1 overflow-hidden${textAreaCSS}`}
      />
    </div>
  );
};

export default TextArea;
