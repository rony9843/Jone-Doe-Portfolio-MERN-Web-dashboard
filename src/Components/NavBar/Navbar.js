import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import Badge from "@mui/material/Badge";
import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import bangladeshIcon from "../../Assat/bangladesh.png";
import NavProImage from "../../Assat/profileImage.jpg";

export default function Navbar() {
  // react route dom v6
  const { optionName } = useParams();

  return (
    <NavBarBack>
      <div className="pt-3 pb-3 d-flex align-items-center">
        <div className="user_profile d-flex justify-content-center">
          <div>
            <img src={NavProImage} alt="jone" />
          </div>
          <div>
            <span style={{ color: "#d0d0e2" }}>Jone Doe</span>
          </div>
        </div>
        <div class="d-flex justify-content-between w-100 ">
          <div>
            <span
              className="option_name"
              style={{ fontSize: "20px", color: "#d0d0e2" }}
            >
              {optionName}
            </span>
          </div>
          <div>
            <div className=" d-flex align-items-center">
              <div>
                <img
                  src={bangladeshIcon}
                  className="user_profile_n_flag_right mx-2 bdIcon"
                  alt="jone"
                />
              </div>
              <div>
                <Badge
                  className="message_icon mx-3"
                  badgeContent={10}
                  color="secondary"
                >
                  <NotificationsIcon color="action" />
                </Badge>
              </div>
              <div>
                <Badge
                  className="message_icon mx-3"
                  badgeContent={4}
                  color="success"
                >
                  <MailIcon color="action" />
                </Badge>
              </div>
              <div>
                <img
                  src={NavProImage}
                  className="user_profile_n_flag_right mx-3"
                  alt="jone"
                />
              </div>
              <div>
                <SettingsIcon className="setting_icon mx-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </NavBarBack>
  );
}

const NavBarBack = styled.div`
  background-color: #0e0e23;
  color: white;

  .user_profile {
    width: 240px;
    font-size: 20px;
    align-items: center;
    cursor: pointer;
  }
  .user_profile img {
    width: 30px;
    border-radius: 50%;
    margin-right: 8px;
  }
  .MuiSvgIcon-root {
    color: #d0d0e2;
    cursor: pointer;
  }
  .user_profile_n_flag_right {
    width: 30px;
    border-radius: 50%;
    cursor: pointer;
  }

  .option_name {
    animation: textAni 1s linear infinite;
  }

  @keyframes textAni {
    0% {
      color: #d0d0e2;
    }
    50% {
      color: white;
    }
    100% {
      color: #d0d0e2;
    }
  }

  .setting_icon,
  .bdIcon {
    -webkit-animation: spin 2s linear infinite;
    -moz-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
    cursor: pointer;
    margin-right: 10px;
    color: #d0d0e2;
  }
  @-moz-keyframes spin {
    100% {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;
