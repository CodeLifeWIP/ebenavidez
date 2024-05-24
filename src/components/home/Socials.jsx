import GithubIcon from '../icons/GithubIcon'
import LinkedInIcon from '../icons/LinkedInIcon'

GithubIcon
// eslint-disable-next-line react/prop-types
const Socials = ({ className }) => {

  return (
    <div className={`${className}`}>
      <a href='https://github.com/ebenavidez'><GithubIcon className='h-6 w-6 mr-2' /></a>
      <a href='https://github.com/CodeLifeWIP'><GithubIcon className='h-6 w-6 mx-2' /></a>
      <a href='https://www.linkedin.com/in/e-benavidez-4310271bb/'><LinkedInIcon className='h-6 w-6 mx-2' /></a>
    </div>
  )
}

export default Socials