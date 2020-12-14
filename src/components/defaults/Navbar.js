import React, { useState, Fragment } from 'react'
import { Navbar, Input, NavbarBrand, NavbarToggler, NavItem, NavLink, UncontrolledDropdown, DropdownMenu, Nav, DropdownItem, NavbarText, Collapse, Dropdown, DropdownToggle, Button } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'
import UserIcon from '../../assets/images/svg/icons/ic_user.svg'
import SearchIcon from '../../assets/images/svg/icons/ic_search.svg'
import { Link, withRouter } from "react-router-dom"
import Icofont from "react-icofont"
import routes from '../../routes';
import Logo from '../common/Logo'
import WhiteLogo from '../common/WhiteLogo'

function NavbarComponent(props) {
  const { user } = useSelector(state => state)
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const getSidebarItemClass = path => {
    return props.location.pathname === path ? "active" : "";
  };
  return (
    <>
      <Navbar color="transparent" className="d-block" expand className="d-md-block d-none">
        <div className="row w-100">
          <div className="col-md-8 col-sm-6 order-md-1 order-1 text-sm-center d-flex">

            {/* <button type="button" id="sidebarCollapse" className="btn btn-light d-lg-none mr-2" onClick={props.updateToggle}>
              <Icofont icon="align-left" size="1" />

            </button> */}
            <NavbarBrand href="/">
              <Logo style={{ maxWidth: "160px" }} />
            </NavbarBrand>

            <div className="search-div d-flex ">

              <Input type="search" placeholder="What would you like to buy today?" />
              <Button color="warning">
                {/* <img src={SearchIcon} width="15" /> */}
              <Icofont icon="search-2" className="text-white" size="1" />

              </Button>
            </div>



          </div>

          <div className="col-md-4 col-sm-6 order-md-2 order-2 text-sm-right ">
            <Link to="/login" className="btn btn-success text-white mr-2">
              Sign in
        </Link>

            <Link to="/signup" className="btn btn-outline-success mr-2">
              Create an account
        </Link>
            <img src={UserIcon} width="25" className="mr-1" />
            <span className="text-success">Hi Josh,</span>
          </div>
        </div>

      </Navbar >
      <Navbar color="deep-grey" className="second-nav" light expand="md">
        <NavbarBrand href="/" className="d-md-none d-sm-block">
          <WhiteLogo style={{ maxWidth: "160px" }} />
        </NavbarBrand>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="nav-fill w-100 m-auto" navbar>
            {routes.map((route, i) => (
              <Fragment key={i}>
                {route.children == null ?
                  <NavItem>
                    <NavLink className={`${getSidebarItemClass(route.path)}`} href={route.path}>{route.name}</NavLink>
                  </NavItem>
                  :
                  <UncontrolledDropdown nav >
                    <DropdownToggle nav caret>
                      {route.name}
                    </DropdownToggle>
                    <DropdownMenu>
                      {route.children.map((child, i) => (
                        <DropdownItem key={i}><NavLink className={`${getSidebarItemClass(child.path)} text-dark`} href={child.path}>{child.name}</NavLink></DropdownItem>

                      ))}
                    </DropdownMenu>
                  </UncontrolledDropdown>
                }

              </Fragment>

            ))}


            <NavItem className="d-md-none d-block">
              <NavLink className={`${getSidebarItemClass('/login')}`} href="/login">Login</NavLink>
            </NavItem>
            <NavItem className="d-md-none d-block">
              <NavLink className={`${getSidebarItemClass('/signup')}`} href="/signup">Signup</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  )
}

export default withRouter(NavbarComponent)