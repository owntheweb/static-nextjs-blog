import './HomeHeaderStyle.css';
import { SocialIcon } from "react-social-icons";

const meRel = "me";

const Social = () => {  
  return (
    <ul className="pt-1.5 mb-6 list-none flex">
      <li className="mr-3 flex-1-1">
        <SocialIcon
          url="https://linkedin.com/in/interactiveguru"
          style={{ width: '30px', height: '30px' }}
          bgColor={'rgb(248 242 227)'}
          className="w-12 h-12"
        />
      </li>
      <li className="mr-3 flex-1-1">
        <SocialIcon
          url="https://techhub.social/@owntheweb"
          style={{ width: '30px', height: '30px' }}
          bgColor={'rgb(248 242 227)'}
          className="w-12 h-12"
          network="mastodon"
          rel={meRel}
        />
      </li>
      <li className="mr-3 flex-1-1">
        <SocialIcon
          url="https://github.com/owntheweb"
          style={{ width: '30px', height: '30px' }}
          bgColor={'rgb(248 242 227)'}
          className="w-12 h-12"
        />
      </li>
      <li className="flex-1">
        <SocialIcon
          url="https://twitter.com/owntheweb"
          style={{ width: '30px', height: '30px' }}
          bgColor={'rgb(248 242 227)'}
          className="w-12 h-12"
        />
      </li>
    </ul>
  )
}

export default Social;