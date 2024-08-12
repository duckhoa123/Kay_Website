import { IconType } from 'react-icons'
import {
  FaInstagram,
  FaLinkedin,
  FaStackOverflow,
  FaTwitter,
  FaYoutube,
  FaGithub,
  FaDev,
} from 'react-icons/fa'

type SocialMedia = {
  label: string
  href: string
  icon: IconType
}

export const SocialMedias: SocialMedia[] = [
 
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kay-nguyen-2005642b2/',
    icon: FaLinkedin,
  },
  
  {
    label: 'Github',
    href: 'https://github.com/duckhoa123',
    icon: FaGithub,
  },
 
]
