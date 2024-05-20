// eslint-disable-next-line react/prop-types
const Footer = ({ className }) => {
  return (
    <div className={`text-slate-400 text-xs text-center xl:px-4 ${className}`}>
      <span>Coded in Visual Studio Code by yours truly. Built with React.js, Tailwind Css, and deployed to AWS with Github.</span>
    </div>
  )
}


export default Footer