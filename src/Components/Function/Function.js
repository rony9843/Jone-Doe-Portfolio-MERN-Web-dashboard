import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import EditAboutMe from "../Edit About Me/EditAboutMe";
import EditComPro from "../Edit ComPro/EditComPro";
import EditPortfolio from "../Edit Portfolio/EditPortfolio";
import EditProfile from "../Edit Profile/EditProfile";
import EditSkill from "../Edit Skill/EditSkill";
import Message from "../Message/Message";
import Notification from "../Notification/Notification";
import Setting from "../Setting/Setting";

export default function Function() {
  // * use react route dom v6
  const { optionName } = useParams();

  return (
    <FunctionBack>
      {optionName === "Message" && <Message />}
      {optionName === "Notification" && <Notification />}
      {optionName === "Edit Profile" && <EditProfile />}
      {optionName === "Edit Portfolio" && <EditPortfolio />}
      {optionName === "Edit Skill" && <EditSkill />}
      {optionName === "Edit Com.. Pro.." && <EditComPro />}
      {optionName === "Edit About Me" && <EditAboutMe />}
      {optionName === "Setting" && <Setting />}
    </FunctionBack>
  );
}

const FunctionBack = styled.div`
  background: rgba(36, 36, 62, 1);
  width: 100%;
  border-radius: 90px 0px 0px 0px;
  overflow-y: scroll;
  height: 91.5vh;
`;
