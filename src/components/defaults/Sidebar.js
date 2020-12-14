import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter, NavLink, Link } from 'react-router-dom';
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  // Container,
  Badge,
  Collapse
} from 'reactstrap';
import routes from '../../routes';
import Logo from '../common/Logo';
// import { toggleSidebar } from '../../redux/actions/sidebarActions';
// import FixedSidebar from './FixedSidebar';
// import $ from 'jquery';

const SidebarCategory = withRouter(
  ({
    name,
    badgeColor,
    badgeText,
    icon: Icon,
    isOpen,
    children,
    onClick,
    location,
    to,
    image
  }) => {
    const getSidebarItemClass = path => {
      return location.pathname.indexOf(path) !== -1 ||
        (location.pathname === "/" && path === "/dashboard")
        ? "active"
        : "";
    };

    return (
      <li className={"sidebar-item " + getSidebarItemClass(to)}>
        <NavLink to="#"
          data-toggle="collapse"
          className={"sidebar-link " + (!isOpen ? "collapsed" : "")}
          onClick={onClick}
          aria-expanded={isOpen ? "true" : "false"}
        >
          {/* {image !== null ? <>{image}</> :
            Icon ? <Icon size={18} className="align-middle mr-3" /> : null
          } */}
          {image !== null ? <>{image}</> : Icon ? <Icon size={18} className="align-middle mr-3" /> : null}
          <span className="align-middle">{name}</span> {' '}
          {badgeColor && badgeText ? (
            <Badge color={badgeColor} size={18} className="sidebar-badge">
              {badgeText}
            </Badge>
          ) : null}
        </NavLink>
        <Collapse isOpen={isOpen}>
          <ul id="item" className={"sidebar-dropdown list-unstyled"}>
            {children}
          </ul>
        </Collapse>
      </li>
    );
  }
);

const SidebarItem = withRouter(
  ({ name, badgeColor, badgeText, icon: Icon, location, to, onClick, image
  }) => {
    const getSidebarItemClass = path => {
      return location.pathname === path ? "active" : "";
    };

    return (
      <li className={"sidebar-item " + getSidebarItemClass(to)}>
        <NavLink to={to} onClick={onClick} className="sidebar-link" activeClassName="active">
          {image !== null ? <>{image}</> : Icon ? <Icon size={18} className="align-middle mr-3" /> : null}
          {name}
          {badgeColor && badgeText ? (
            <Badge color={badgeColor} size={18} className="sidebar-badge">
              {badgeText}
            </Badge>
          ) : null}
        </NavLink>
      </li>
    );
  }
);

/*eslint-disable no-script-url*/

class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  toggle = index => {
    // Collapse all elements
    Object.keys(this.state).forEach(
      item =>
        this.state[index] ||
        this.setState(() => ({
          [item]: false
        }))
    );

    // Toggle selected element
    this.setState(state => ({
      [index]: !state[index]
    }));
  };

  componentDidUpdate() {

  }
  UNSAFE_componentWillMount() {
    /* Open collapse element that matches current url */
    const pathName = this.props.location.pathname;
    // if (!this.props.sidebar.isOpen
    //   //  && isActive
    // ) {

    // //   this.props.dispatch(toggleSidebar())
    // }
    routes.forEach((route, index) => {
      const isActive = pathName.indexOf(route.path) === 0;
      const isOpen = route.open;
      const isHome = route.containsHome && pathName === "/" ? true : false;

      /* check if sidebar is open and collapse if so*/

      this.setState(() => ({
        [index]: isActive || isOpen || isHome
      }));
    });
  }

  render() {

    const { sidebar, /*layout*/ } = this.props;

    return (
      <nav
        className={`sidebar ${this.props.isToggled? 'toggled' : null}`}
      >
        {/* <FixedSidebar /> */}

        <div className="sidebar-content">
          {/* <div className="container">
            <div className="row">
              <div className="col-12"> */}

                <PerfectScrollbar>

                  <div className="sidebar-brand">
                    <Link to="/">
                      <Logo style={{ maxWidth: "160px" }} alt="Nutloop" />
                    </Link>
                  </div>

                  {/* Dynamo Logo */}

                  <ul className="sidebar-nav">
                    {routes.map((category, index) => {
                      return (
                        <React.Fragment key={index}>
                          {category.header ? (
                            <li className="sidebar-header">{category.header}</li>
                          ) : null}

                          {category.children ? (
                            <SidebarCategory
                              name={category.name}
                              badgeColor={category.badgeColor}
                              badgeText={category.badgeText}
                              icon={category.icon}
                              to={category.path}
                              image={category.image}
                              isOpen={this.state[index]}
                              onClick={() => this.toggle(index)}
                            >
                              {category.children.map((route, index) => (
                                <SidebarItem
                                  key={index}
                                  name={route.name}
                                  image={category?.image || null}
                                  to={route.path}
                                  badgeColor={route.badgeColor}
                                  onClick={category.onClick ? () => this.props.dispatch(category.onClick()) : null}
                                  badgeText={route.badgeText}
                                />
                              ))}
                            </SidebarCategory>
                          ) : (
                              <SidebarItem
                                name={category.name}
                                to={category.path}
                                image={category?.image || null}
                                icon={category.icon}
                                onClick={category.onClick ? () => this.props.dispatch(category.onClick()) : null}
                                badgeColor={category.badgeColor}
                                badgeText={category.badgeText}
                              />
                            )}
                        </React.Fragment>
                      );
                    })}
                  </ul>

                  {/*{!layout.isBoxed && !sidebar.isSticky ?*/}

                  {/* <div className="sidebar-bottom d-none d-lg-inline-block">
              {!!this.props.profile ? (
                <Link to='/account'>
                  <div className="media">
                    {
                      process.env.NODE_ENV !== "development" ?
                        <img
                          className="rounded-circle mr-3"
                          src={!!this.props.profile.doc_photo ? this.props.profile.doc_photo : "/images/people/profile-pic-l-4.png"}
                          alt={this.props.profile.first_name}
                          width="40"
                          height="40"
                        /> : null
                    }
                    <div className="media-body">
                      <h5 className="mb-2">{this.props.profile.first_name}</h5>
                      <div>
                        <FontAwesomeIcon
                          icon={faCircle}
                          className="text-success"
                        />{" "}
                        Online
                      </div>
                    </div>
                  </div>
                </Link>
              ) : null}
            </div> */}

                </PerfectScrollbar>
              {/* </div>
            </div>
          </div> */}
        </div>
      </nav>
    );
  }
}


// export default Sidebar;
export default withRouter(
  connect(store => ({

  }))(Sidebar))
  ;
