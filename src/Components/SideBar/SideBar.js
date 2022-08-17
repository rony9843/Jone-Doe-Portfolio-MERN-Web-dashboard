import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BallotIcon from "@mui/icons-material/Ballot";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import BusinessIcon from "@mui/icons-material/Business";
import EmailIcon from "@mui/icons-material/Email";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

export default function SideBar() {
  // react route dom v6
  let navigate = useNavigate();

  // url get option
  const { optionName } = useParams();

  const optionList = [
    { option: "Message", icon: <EmailIcon /> },
    { option: "Notification", icon: <NotificationsIcon /> },
    { option: "Edit Profile", icon: <EmailIcon /> },
    { option: "Edit Portfolio", icon: <AccountCircleIcon /> },
    { option: "Edit Skill", icon: <BallotIcon /> },
    { option: "Edit Com.. Pro..", icon: <BorderColorIcon /> },
    { option: "Edit About Me", icon: <BusinessIcon /> },
    { option: "Setting", icon: <SettingsIcon /> },
  ];

  return (
    <SideBarBack>
      <div className="mt-3">
        <div class="d-flex justify-content-center">
          <h5>Dashboard</h5>
        </div>
        <div className="option_list">
          {optionList.map((op) => (
            <div
              className={
                optionName !== op.option
                  ? " d-flex justify-content-start p-2 single_option"
                  : " d-flex justify-content-start p-2 active_option"
              }
              onClick={() => {
                navigate(`/dashboard/${op.option}`);
              }}
            >
              <div>{op.icon}</div>
              <div>{op.option}</div>
            </div>
          ))}
        </div>
        <div>
          <div class="d-flex justify-content-center ">
            <Button variant="outlined" color="error">
              Log Out at Jone Doe
            </Button>
          </div>
        </div>
      </div>
    </SideBarBack>
  );
}

const SideBarBack = styled.div`
  background-color: #0e0e23;
  color: #ffffff66;
  width: 240px;
  transition: margin-left 0.5s ease;
  height: 91.5vh;

  .option_list {
    height: 78vh;
    margin-left: 15px;
  }
  .single_option:hover {
    color: white;
    transition: 0.5s;
  }
  .single_option div:nth-child(2) {
    padding-left: 5px;
    transition: 0.5s;
    cursor: pointer;
  }
  .single_option div:nth-child(2):hover {
    padding-left: 15px;
    transition: 0.5s;
  }
  .active_option {
    background: rgb(14, 14, 35);
    background: linear-gradient(
      90deg,
      rgba(14, 14, 35, 1) 0%,
      rgb(36 36 62) 100%
    );
    border-radius: 10px 0px 0px 10px;
  }

  .active_option div:nth-child(1) {
    color: white;
    cursor: pointer;
  }
  .active_option div:nth-child(2) {
    padding-left: 15px;
    color: white;
    cursor: pointer;
    transition: 0.5s;
  }

  @media screen and (max-width: 900px) {
    width: 50px;
  }
`;
