import React from 'react'
import { Navbar } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'

export default function NavbarComponent(props) {
  const { user } = useSelector(state => state)

  return (
    <Navbar color="transparent" expand>
      <div className="collapse navbar-collapse dont-collapse-sm"
        id="navbarNavDropdown-7">

        <button type="button" id="sidebarCollapse" className="btn  d-lg-none mr-2" onClick={props.updateToggle}>
          <i className="icofont-align-left"></i>
        </button>
      </div>
      <div className="col-6 text-right">
        <div className="mr-1 d-inline">
          <img src={require ('../../assets/images/svg/icons/ic_notifications.svg')} width="15" className="mr-1" />
          Notifications</div>
        <span className="text-capitalize">{user.user?.user?.first_name} {user.user?.user?.last_name}</span>
      </div>

    </Navbar >
  )
}
