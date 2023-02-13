import { navBarProps } from './model'
import {
  NavbarWrapper,
  NavItem,
  NavItemLabel,
  NavIcon,
  NavIconWrapper
} from './Navbar.style'
import { useLocation, useNavigate } from 'react-router-dom'
import { personIcon } from '../../assets/images'
import { logOut } from '../../actions/login'

const Navbar = (props: navBarProps) => {
  const { items } = props
  const navigate = useNavigate()
  const location = useLocation()
  const pathname = location.pathname?.slice(1)

  return (
    <NavbarWrapper>
      {items?.length > 0 &&
        items.map((item) => (
          <NavItem
            key={item.id}
            onClick={() =>
              item.onClick ? item.onClick() : navigate(`/${item.path}`)
            }
            style={item.style}
            selected={pathname === item.id.toLowerCase()}
          >
            <NavItemLabel>{item.label}</NavItemLabel>
          </NavItem>
        ))}
      <NavItem onClick={async () => await logOut()}>
        <NavIconWrapper>
          <NavIcon src={personIcon}></NavIcon>
        </NavIconWrapper>
      </NavItem>
    </NavbarWrapper>
  )
}

export default Navbar
