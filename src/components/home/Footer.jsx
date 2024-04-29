// eslint-disable-next-line react/prop-types
const Footer = ({ className }) => {
  return (
    <div className={`mx-6 mb-8 text-slate-400 text-xs text-center ${className}`}>
      <span>Coded in Visual Studio Code by yours truly. Built with React.js, Tailwind Css, and deployed to AWS with Github Actions.</span>
    </div>
  )
}

export default Footer