// essential components
import React from "react";
import SidebarOption from "../SidebarOption/SidebarOption";
import "./SideBar.css";
//Material ui components

import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";

function SideBar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon" />

      <SidebarOption active Icon={HomeIcon} text="Home" />
      <SidebarOption active Icon={SearchIcon} text="Explore" />
      <SidebarOption active Icon={NotificationsNoneIcon} text="Notifications" />
      <SidebarOption active Icon={MailOutlineIcon} text="Messages" />
      <SidebarOption active Icon={BookmarkBorderIcon} text="Bookmarks" />
      <SidebarOption active Icon={ListAltIcon} text="Lists" />
      <SidebarOption active Icon={PermIdentityIcon} text="Profile" />
      <SidebarOption active Icon={MoreHorizIcon} text="More" />

      {/* Button -> Tweet */}
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default SideBar;
