const Button = ({ label, iconUrl, backgroundColor, borderColor, textColor,textHover, fullWidth}) => {
  return (
    <button 
    className={`flex flex-center items-start gap-2
     px-7 py-4 border font-montserrat
      text-lg leading-none
      
      ${
        backgroundColor 
        ? 
        `${backgroundColor} ${textColor} ${borderColor} ${textHover}`

        : "bg-coral-red rounded-full text-white border-coral-red"
      } rounded-full ${fullWidth &&  'w-full'}"}`}
      
      >

        {label}

        {/* if there's an image just show it; otherwise, don't show it */}

        { iconUrl && <img src={iconUrl} 
        alt="arrow right icon"
        className="ml-2 rounded-full w-5 h-5" /> }
    </button>
  )
}

export default Button
