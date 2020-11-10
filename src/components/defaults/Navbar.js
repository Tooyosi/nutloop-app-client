import React from 'react'
import { Navbar, Input } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'
import UserIcon from '../../assets/images/svg/icons/ic_user.svg'
import SearchIcon from '../../assets/images/svg/icons/ic_search.svg'
export default function NavbarComponent(props) {
  const { user } = useSelector(state => state)

  return (
    <Navbar color="transparent" expand>
      <div className="row w-100">
        <div className="col-md-3 order-md-1 order-2 text-sm-center">
          <div className="search-div d-flex px-3">
            <img src={SearchIcon} width="15" />

            <Input type="search" placeholder="What would you like to buy today?" />
          </div>


          
        </div>

        <div className="col-md-9 order-md-2 order-1 text-md-right">
          <button type="button" id="sidebarCollapse" className="btn btn-success mr-2" onClick={props.updateToggle}>
            Login
        </button>
          {/* <img src={require('../../assets/images/svg/icons/ic_user.svg')} width="15" className="mr-1" /> */}
          <img src={UserIcon} width="25" className="mr-1" />
          <span className="text-success">Hi Josh,</span>
        </div>
      </div>

    </Navbar >
  )
}
