import DeleteIcon from "@mui/icons-material/Delete";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import TextTransition, { presets } from "react-text-transition";
import styled from "styled-components";
import profileImage from "../../Assat/profileImage.jpg";

export default function EditProfile() {
  // * get option name
  const { optionName } = useParams();

  // ? for getImage
  const [profileImageState, setProfileImageState] = useState("");

  // ? for get user Title
  const [inputProfileTitle, setInputProfileTitle] = useState(
    "WELCOME TO MY WORLD"
  );

  // ? for get user Name
  const [inputProfileName, setInputProfileName] = useState("Hi, I’m Jone Doe");

  // ? for submit skill
  const [skillList, setSkillList] = useState([
    "UX Designer.",
    "Content Written.",
    "Logo Design",
    "Banner Design",
  ]);

  const [inputSkill, setInputSkill] = useState([""]);

  const submitSkill = () => {
    inputSkill !== "" && setSkillList([...skillList, inputSkill]);
    setInputSkill("");
  };

  const deleteSkill = (props) => {
    const newSkill = skillList.filter((sk) => sk !== props);

    setSkillList(newSkill);
  };

  // * text animation array
  const TEXTS = skillList;

  const [index, setIndex] = useState(0);

  // *  for text animation
  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  // ? social media input
  const [faceBook, setFaceBook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [twitter, setTwitter] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [gitHub, setGitHub] = useState("");

  const socialMedia = [
    {
      icon: <FacebookIcon className="socialMediaSingelIcon " />,
      link: faceBook,
    },
    {
      icon: <InstagramIcon className="socialMediaSingelIcon" />,
      link: instagram,
    },
    {
      icon: <TwitterIcon className="socialMediaSingelIcon " />,
      link: twitter,
    },
    {
      icon: <LinkedInIcon className="socialMediaSingelIcon " />,
      link: linkedIn,
    },
    {
      icon: <GitHubIcon className="socialMediaSingelIcon " />,
      link: gitHub,
    },
  ];

  // * get profile image
  const getProfilePic = (props) => {
    // set user profile image in img src
    const [file] = props.target.files;
    setProfileImageState(URL.createObjectURL(file));
  };

  return (
    <EditProfileback className="pt-5 px-5 ">
      <div className="w-100 px-3">
        <div style={{ color: "#d0d0e2", fontSize: "15px" }}>
          Dashboard / {optionName}
        </div>
      </div>
      <div className="row w-100 pb-5 mb-5">
        <div className="col-lg-8 col-md-6 col-sm-12  pt-4 px-4">
          {" "}
          <div className="setting_side ">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div className="edit_profile_image p-2">
                  <div className="d-flex ">
                    <div>
                      <img
                        className="rounded-circle"
                        src={
                          profileImageState ? profileImageState : profileImage
                        }
                        style={{ border: "5px solid white" }}
                        alt="profile"
                        width={80}
                      />
                    </div>
                    <div>
                      <div className="profile_image_file_input">
                        <label for="formFile" class="form-label">
                          Your Profile Image
                        </label>
                        <input
                          class="form-control "
                          type="file"
                          id="formFile"
                          onChange={(e) => getProfilePic(e)}
                        />
                        <div className="d-flex justify-content-end pt-1 ">
                          <span style={{ fontSize: "12px", color: "#d0d0e2" }}>
                            SIZE : 1080 X 1080
                          </span>
                        </div>
                        <div className="d-flex justify-content-between pb-1 pt-2">
                          <div>
                            <Button
                              className="px-4"
                              size="small"
                              style={{
                                backgroundColor: `${
                                  profileImageState && "#6259ca"
                                }`,
                                color: `${profileImageState && "#0e0e23"}`,
                              }}
                              variant={
                                profileImageState ? "contained" : "outlined"
                              }
                              onClick={() => {
                                setProfileImageState("");
                              }}
                            >
                              Cancel
                            </Button>
                          </div>
                          <div>
                            <Button
                              className="px-4"
                              size="small"
                              style={{
                                backgroundColor: `${
                                  profileImageState && "#6259ca"
                                }`,
                                color: `${profileImageState && "#0e0e23"}`,
                              }}
                              variant={
                                profileImageState ? "contained" : "outlined"
                              }
                            >
                              Submit
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="edit_profile_title_div p-2 ">
                  <div className="d-flex ">
                    <div>
                      <div className="edit_profile_title_  row">
                        <div>
                          <div class=" ">
                            <label
                              style={{ color: "#d0d0e2" }}
                              for="exampleInputTitle"
                              class="form-label"
                            >
                              Your Title
                            </label>
                            <input
                              type="text"
                              class="form-control "
                              maxlength="20"
                              onChange={(e) =>
                                setInputProfileTitle(e.target.value)
                              }
                              value={inputProfileTitle}
                              id="exampleInputTitle"
                            />
                          </div>
                        </div>
                        <div className="">
                          <div className="col-12 d-flex justify-content-end pt-1 ">
                            <span
                              style={{ fontSize: "12px", color: "#d0d0e2" }}
                            >
                              MAX LENGTH : 20
                            </span>
                          </div>
                          <div className="d-flex justify-content-between pb-1 pt-2">
                            <div>
                              <Button
                                className="px-4"
                                size="small"
                                style={{
                                  backgroundColor: `${"#6259ca"}`,
                                  color: `${"#0e0e23"}`,
                                }}
                                variant={"contained"}
                                onClick={() => {
                                  setInputProfileTitle("WELCOME TO MY WORLD");
                                }}
                              >
                                Cancel
                              </Button>
                            </div>
                            <div>
                              <Button
                                className="px-4"
                                size="small"
                                style={{
                                  backgroundColor: `${
                                    inputProfileTitle && "#6259ca"
                                  }`,
                                  color: `${inputProfileTitle && "#0e0e23"}`,
                                }}
                                variant={
                                  inputProfileTitle ? "contained" : "outlined"
                                }
                              >
                                Submit
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-6 col-sm-12">
                <div className="edit_profile_name_div p-2 ">
                  <div className="d-flex ">
                    <div>
                      <div className="edit_profile_name_  row">
                        <div>
                          <div class=" ">
                            <label
                              style={{ color: "#d0d0e2" }}
                              for="exampleInputName"
                              class="form-label"
                            >
                              Your Name
                            </label>
                            <input
                              type="text"
                              class="form-control "
                              maxlength="17"
                              onChange={(e) =>
                                setInputProfileName(e.target.value)
                              }
                              value={inputProfileName}
                              id="exampleInputName"
                            />
                          </div>
                        </div>
                        <div className="">
                          <div className="col-12 d-flex justify-content-end pt-1 ">
                            <span
                              style={{ fontSize: "12px", color: "#d0d0e2" }}
                            >
                              MAX LENGTH : 16
                            </span>
                          </div>
                          <div className="d-flex justify-content-between pb-1 pt-2">
                            <div>
                              <Button
                                className="px-4"
                                size="small"
                                variant={"contained"}
                                style={{
                                  backgroundColor: `${"#6259ca"}`,
                                  color: `${"#0e0e23"}`,
                                }}
                                onClick={() => {
                                  setInputProfileName("Hi, I’m Jone Doe");
                                }}
                              >
                                Cancel
                              </Button>
                            </div>
                            <div>
                              <Button
                                className="px-4"
                                size="small"
                                style={{
                                  backgroundColor: `${
                                    inputProfileName && "#6259ca"
                                  }`,
                                  color: `${inputProfileName && "#0e0e23"}`,
                                }}
                                variant={
                                  inputProfileName ? "contained" : "outlined"
                                }
                              >
                                Submit
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="edit_profile_skill_div p-2 ">
                    <div className="d-flex ">
                      <div>
                        <div className="edit_profile_skill_  row">
                          <div>
                            <div class=" ">
                              <label
                                style={{ color: "#d0d0e2" }}
                                for="exampleInputTitle"
                                class="form-label"
                              >
                                Your Skill List
                              </label>
                              <div>
                                <div class="input-group mb-3">
                                  <input
                                    type="text"
                                    class="form-control"
                                    aria-label="Recipient's username"
                                    aria-describedby="button-addon2"
                                    onChange={(e) =>
                                      setInputSkill(e.target.value)
                                    }
                                    value={inputSkill}
                                  />
                                  <button
                                    class="btn btn-outline-secondary"
                                    type="button"
                                    id="button-addon2"
                                    onClick={() => submitSkill()}
                                    style={{
                                      backgroundColor: "#6259ca",
                                      color: "#0e0e23",
                                    }}
                                  >
                                    Button
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className=""></div>
                          <div>
                            <div>
                              <span
                                className="preview_skill_box_title"
                                style={{ fontSize: "13px", color: "#d0d0e2" }}
                              >
                                Preview Skill List
                              </span>
                            </div>
                            <div className="preview_skill_box mt-1">
                              {skillList.map((sk) => (
                                <div className="">
                                  {sk}{" "}
                                  <DeleteIcon
                                    className="delete_btn"
                                    onClick={() => deleteSkill(sk)}
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="edit_profile_social_div p-2 ">
                  <div className="d-flex ">
                    <div>
                      <div className="edit_profile_social_  row">
                        <div>
                          <span style={{ color: "#d0d0e2" }}>
                            Your Social Media
                          </span>
                        </div>
                        <div>
                          <div>
                            <span className="social_media_name">Facebook</span>
                          </div>
                          <div class="input-group mb-3">
                            <input
                              type="text"
                              class="form-control"
                              aria-label="Recipient's username"
                              aria-describedby="button-addon2"
                              onChange={(e) => setFaceBook(e.target.value)}
                            />
                          </div>
                        </div>
                        <div>
                          <div>
                            <span className="social_media_name">Instagram</span>
                          </div>
                          <div class="input-group mb-3">
                            <input
                              type="text"
                              class="form-control"
                              aria-label="Recipient's username"
                              aria-describedby="button-addon2"
                              onChange={(e) => setInstagram(e.target.value)}
                            />
                          </div>
                        </div>
                        <div>
                          <div>
                            <span className="social_media_name">Twitter</span>
                          </div>
                          <div class="input-group mb-3">
                            <input
                              type="text"
                              class="form-control"
                              aria-label="Recipient's username"
                              aria-describedby="button-addon2"
                              onChange={(e) => setTwitter(e.target.value)}
                            />
                          </div>
                        </div>
                        <div>
                          <div>
                            <span className="social_media_name">Linkedin</span>
                          </div>
                          <div class="input-group mb-3">
                            <input
                              type="text"
                              class="form-control"
                              aria-label="Recipient's username"
                              onChange={(e) => setLinkedIn(e.target.value)}
                              aria-describedby="button-addon2"
                            />
                          </div>
                        </div>
                        <div>
                          <div>
                            <span className="social_media_name">Github</span>
                          </div>
                          <div class="input-group mb-3">
                            <input
                              type="text"
                              class="form-control"
                              aria-label="Recipient's username"
                              aria-describedby="button-addon2"
                              onChange={(e) => setGitHub(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12  pt-4 px-4">
          <div className="preview_display d-flex justify-content-center">
            <div className="row pt-5">
              <div className="col-4 ">
                <div>
                  <img
                    src={profileImageState ? profileImageState : profileImage}
                    alt="profile"
                    srcset=""
                  />
                </div>
              </div>
              <div className="col-8">
                <div className="">
                  <div>
                    <span className="preview_display_title">
                      {inputProfileTitle}
                    </span>
                  </div>
                  <div className="preview_display_name">{inputProfileName}</div>
                  <div>
                    <span className="preview_display_text_ani">
                      <TextTransition springConfig={presets.wobbly}>
                        {TEXTS[index % TEXTS.length]}
                      </TextTransition>
                    </span>
                  </div>
                  <div className="preview_display_des">based in USA.</div>
                  <div className="socialMediaIcon">
                    {socialMedia.map((dt) => dt.link !== "" && dt.icon)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </EditProfileback>
  );
}

const EditProfileback = styled.div`
  color: white;

  .setting_side {
    //   background-color: #0e0e23;
    // border-radius: 10px;
    height: 550px;
  }
  .profile_image_file_input {
    padding-left: 10px;
  }
  .profile_image_file_input label {
    color: #d0d0e2;
  }
  .profile_image_file_input input {
    color: rgb(31, 31, 37);
    background-color: #978eff;
    border: 1px solid #6259ca;
    padding: 4.375px 0.75rem;
  }

  .edit_profile_image {
    height: auto;
    background-color: #0e0e23;
    border-radius: 10px;
  }

  .edit_profile_title_ input {
    background-color: #978eff;
    width: 100%;
    border: none;
  }
  .edit_profile_title_div {
    height: auto;
    background-color: #0e0e23;
    border-radius: 10px;
  }
  .edit_profile_name_div {
    height: auto;
    background-color: #0e0e23;
    border-radius: 10px;
  }
  .edit_profile_name_div input {
    background-color: #978eff;
    border: none;
  }
  .edit_profile_social_div {
    height: auto;
    background-color: #0e0e23;
    border-radius: 10px;
  }

  .edit_profile_social_div input {
    background-color: #978eff;
    border: none;
  }

  .social_media_name {
    font-size: 13px;
    color: #d0d0e2;
  }
  .edit_profile_skill_div {
    height: auto;
    background-color: #0e0e23;
    border-radius: 10px;
  }

  .edit_profile_skill_div input {
    background-color: #978eff;
    border: none;
  }

  .preview_skill_box {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #6259ca;
    background-color: #171634;
  }
  .preview_skill_box div {
    padding: 3px;
    margin: 3px;
    background-color: #0e0e23;
    border-radius: 5px;
    font-size: 15px;
    color: #6259ca;
    display: inline-block;
  }
  .delete_btn {
    transition: 0.5s;
  }
  .delete_btn:hover {
    color: red;
    cursor: pointer;
  }

  .preview_display {
    background-color: #6259ca;
    height: 100%;
    border-radius: 10px;

    border: 0;
    box-shadow: 0 5px 45px -10px rgb(0 0 0 / 25%);
    box-sizing: border-box;
    font-weight: lighter;
    padding: 10px;
  }
  .preview_display img {
    width: 100px;
    border-radius: 50%;
    border: 5px solid white;
    box-shadow: rgb(0 0 0 / 10%) 0px 20px 40px,
      rgb(0 0 0 / 15%) 0px 20px 40px 0px;
  }

  .preview_display_title {
    padding: 0px;
    margin-bottom: 0px !important;
    font-weight: 300;
  }

  .preview_display_name {
    color: rgb(31, 31, 37);
    font-size: 22px;
    font-weight: 800;
    font-family: Montserrat, sans-serif;
    /* line-height: 90px; */
    text-transform: inherit;
    padding: 0px;
    margin: 0px;
  }
  .preview_display_text_ani {
    color: white !important;
    font-size: 16px !important;
    font-weight: 700;
    font-family: Montserrat, sans-serif;
    /* line-height: 90px; */
    text-transform: inherit;
    padding: 0px;
    margin-bottom: 0px !important;
  }
  .preview_display_des {
    font-weight: 800;
    font-size: 15px;
    color: rgb(31, 31, 37);
  }
  .socialMediaSingelIcon {
    background-color: black;
    border-radius: 50%;
    padding: 3px;
    color: #f8f9fc;
    font-size: 24px;
    cursor: pointer;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    margin: 5px 2px;
  }
  .socialMediaSingelIcon:hover {
    background-color: #f9004d;
    margin-top: -10px;
  }
  .preview_display span {
    color: #d0d0e2;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 2px;
    display: block;
    margin-bottom: 20px;
  }
`;
