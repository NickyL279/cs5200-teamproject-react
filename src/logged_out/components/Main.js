import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import AOS from "aos/dist/aos";
import { withStyles } from "@material-ui/core";
import NavBar from "./navigation/NavBar";
import Footer from "./footer/Footer";
import "aos/dist/aos.css";
import CookieRulesDialog from "./cookies/CookieRulesDialog";
import CookieConsent from "./cookies/CookieConsent";

import DialogSelector from "./register_login/DialogSelector";
import Routing from "./Routing";
import smoothScrollTop from "../../shared/functions/smoothScrollTop";

AOS.init({ once: true });

const styles = theme => ({
  wrapper: {
    backgroundColor: theme.palette.common.white,
    overflowX: "hidden"
  }
});

class Main extends PureComponent {
  state = {
    selectedTab: null,
    mobileDrawerOpen: false,
    // blogPosts: [],
    dialogOpen: null,
    cookieRulesDialogOpen: false
  };

  componentDidMount() {

  }

  selectHome = () => {
    smoothScrollTop();
    document.title =
      "CS5200 Team 5 Project";
    this.setState({ selectedTab: "Home" });
  };

  // selectBlog = () => {
  //   smoothScrollTop();
  //   document.title = "WaVer - Blog";
  //   this.setState({ selectedTab: "Blog" });
  // };

  openLoginDialog = () => {
    this.setState({ dialogOpen: "login", mobileDrawerOpen: false });
  };

  closeDialog = () => {
    this.setState({ dialogOpen: null });
  };

  openRegisterDialog = () => {
    this.setState({
      dialogOpen: "register",
      mobileDrawerOpen: false
    });
  };

  openTermsDialog = () => {
    this.setState({ dialogOpen: "termsOfService" });
  };

  handleMobileDrawerOpen = () => {
    this.setState({ mobileDrawerOpen: true });
  };

  handleMobileDrawerClose = () => {
    this.setState({ mobileDrawerOpen: false });
  };

  switchSelectedTab = tab => {
    this.setState({ selectedTab: tab });
  };

  openChangePasswordDialog = () => {
    this.setState({ dialogOpen: "changePassword" });
  };

  handleCookieRulesDialogOpen = () => {
    this.setState({ cookieRulesDialogOpen: true });
  };

  handleCookieRulesDialogClose = () => {
    this.setState({ cookieRulesDialogOpen: false });
  };

  render() {
    const { classes,
      setLoggedInUser,
      loggedInUser} = this.props;
    const {
      selectedTab,
      mobileDrawerOpen,
      // blogPosts,
      dialogOpen,
      cookieRulesDialogOpen
    } = this.state;
    return (
      <div className={classes.wrapper}>
        {!cookieRulesDialogOpen && (
          <CookieConsent
            handleCookieRulesDialogOpen={this.handleCookieRulesDialogOpen}
          />
        )}
        <DialogSelector
          openLoginDialog={this.openLoginDialog}
          dialogOpen={dialogOpen}
          onClose={this.closeDialog}
          openTermsDialog={this.openTermsDialog}
          openRegisterDialog={this.openRegisterDialog}
          openChangePasswordDialog={this.openChangePasswordDialog}
          setLoggedInUser={setLoggedInUser}
        />
        <CookieRulesDialog
          open={cookieRulesDialogOpen}
          onClose={this.handleCookieRulesDialogClose}
        />
        <NavBar
          selectedTab={selectedTab}
          selectTab={this.selectTab}
          openLoginDialog={this.openLoginDialog}
          openRegisterDialog={this.openRegisterDialog}
          mobileDrawerOpen={mobileDrawerOpen}
          handleMobileDrawerOpen={this.handleMobileDrawerOpen}
          handleMobileDrawerClose={this.handleMobileDrawerClose}
          loggedInUser={loggedInUser}
          setLoggedInUser={setLoggedInUser}
        />
        <Routing
          // blogPosts={blogPosts}
          selectHome={this.selectHome}
          // selectBlog={this.selectBlog}
        />
        <Footer />
      </div>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
  setLoggedInUser: PropTypes.func.isRequired,
  loggedInUser: PropTypes.object
};

export default withStyles(styles, { withTheme: true })(Main);
