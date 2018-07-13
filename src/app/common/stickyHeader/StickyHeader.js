import React from 'react'
import ROUTES from 'utils/constants/routes'
import Menu from 'common/menu'
import {
  Banner,
  Logo,
  BurgerButton,
  BurgerBars,
  UserIcon,
  UserButton,
  UserManagement,
  Link
} from './styles'

class StickyHeader extends React.Component {
  // on click outside solution: https://stackoverflow.com/questions/32553158/detect-click-outside-react-component
  constructor(props) {
    super(props);

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  /**
   * Set the wrapper ref
   */
  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  /**
   * Alert if clicked on outside of element
   */
  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.props.isMenuActive && this.props.toggleMenu(this.props.menuType, false)
    }
  }


  render() {
    return (
    <div ref={this.setWrapperRef}>
      <Banner>
        <Menu />
        <BurgerButton
          aria-label='Menu'
          title='Menu'
          onClick={() => this.props.toggleMenu()}//todo you should just have a user icon that takes you to a manage page to do all this. maybe have sign in / up or user name / sign out. then the user button if logged in which takes yu to a manage things page
        >
          <BurgerBars />
        </BurgerButton>

        {
          //need to create a condition to either display user name or display sign in / up links
        }

        <UserManagement>
          {
            // If user ?
            //  Display Name and user button
            // else :
            //  Display Sign up | Sign in links to pages
            false && (
              <UserButton
                aria-label='Menu'
                title='Menu'
                onClick={() => console.log('nav to a user manage page')}
              >
                <UserIcon />
              </UserButton>
            )
          }
          <Link onClick={() => this.props.go(ROUTES.SIGN_UP)}>Sign up</Link>
          <Link onClick={() => this.props.go(ROUTES.SIGN_IN)}>Log in</Link>
        </UserManagement>

        <Logo>Time Pong</Logo>
      </Banner>
    </div>
  )}
}

export default StickyHeader