import React from "react";

class Wrapper extends React.Component {

  render = () => {
    const {children} = this.props;
    return (
      <div
        className="wrapper">
        {children}
      </div>
    )
    // return (<div>{children}</div>);
  }
}

// export default compose(withRouter, withAppData)(Wrapper)
// export default Wrapper
export default Wrapper
