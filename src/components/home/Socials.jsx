import GithubIcon from '../icons/GithubIcon'
import LinkedInIcon from '../icons/LinkedInIcon'
import EmailIcon from '../icons/EmailIcon'

GithubIcon
// eslint-disable-next-line react/prop-types
const Socials = ({ className }) => {

  return (
    <div className={`flex text-slate-400 ${className}`}>
      <a href='https://github.com/ebenavidez' className='hover:text-white'><GithubIcon className='h-6 w-6 mr-2' /></a>
      <a href='https://github.com/CodeLifeWIP' className='hover:text-white'><GithubIcon className='h-6 w-6 mx-2' /></a>
      <a href='https://www.linkedin.com/in/e-benavidez-4310271bb/' className='hover:text-white'><LinkedInIcon className='h-6 w-6 mx-2' /></a>
      <a href='https://github.com/ebenavidez' className='hover:text-white'><EmailIcon className='h-6 w-6 ml-2' /></a>
    </div>
  )
}

export default Socials