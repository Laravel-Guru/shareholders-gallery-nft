import * as React from "react";
import styled from "styled-components";
const SConnectButtonContainer = styled.div `
  position: relative;
  width: 100%;
  height: auto;
  max-width: 224px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const SHoverLayer = styled.div `
  transition: all 0.15s ease-in-out;
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgb(255, 255, 255, 0.1);
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  pointer-events: none;
  opacity: 0;
  visibility: hidden;
`;
const SIcon = styled.div `
  position: absolute;
  height: 28px;
  width: 28px;
  margin-left: 13.1%;
  top: calc((100% - 28px) / 2);
`;
const SConnectButton = styled.button `
  transition: all 0.15s ease-in-out;
  position: relative;
  line-height: 1em;
  background-image: none;
  outline: none;
  overflow: hidden;
  box-shadow: none;
  border: none;
  border-style: none;
  box-sizing: border-box;
  background-color: rgb(242, 217, 105);
  
  background-image: linear-gradient(#f2d969,#8b761c);
  transition: background-image .5s ease-in-out 0s;
  touch-action: manipulation;

  border: none;
  color: rgb(255, 255, 255);
  box-shadow: 0 4px 6px 0 rgba(50, 50, 93, 0.11),
    0 1px 3px 0 rgba(0, 0, 0, 0.08), inset 0 0 1px 0 rgba(0, 0, 0, 0.06);
  border-radius: 4px;
  font-size: 32px;
  font-weight: 600;
  height: 70px;
  width: 100%;
  min-width: 250px;
  
  cursor: ${({ disabled }) => (disabled ? "auto" : "pointer")};
  will-change: transform;

  &:disabled {
    opacity: 0.7;
    box-shadow: 0 4px 6px 0 rgba(50, 50, 93, 0.11),
      0 1px 3px 0 rgba(0, 0, 0, 0.08), inset 0 0 1px 0 rgba(0, 0, 0, 0.06);
  }

  @media (hover: hover) {
    &:hover {
      transform: ${({ disabled }) => (!disabled ? "translateY(-1px)" : "none")};
      box-shadow: ${({ disabled }) => !disabled
    ? `0 7px 14px 0 rgba(50, 50, 93, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.08), inset 0 0 1px 0 rgba(0, 0, 0, 0.06)`
    : `0 4px 6px 0 rgba(50, 50, 93, 0.11), 0 1px 3px 0 rgba(0, 0, 0, 0.08), inset 0 0 1px 0 rgba(0, 0, 0, 0.06)`};
    }

    &:hover ${SHoverLayer} {
      opacity: 1;
      visibility: visible;
    }
  }

  &:active {
    transform: ${({ disabled }) => (!disabled ? "translateY(1px)" : "none")};
    box-shadow: 0 4px 6px 0 rgba(50, 50, 93, 0.11),
      0 1px 3px 0 rgba(0, 0, 0, 0.08), inset 0 0 1px 0 rgba(0, 0, 0, 0.06);
    color: rgba(255, 255, 255, 0.7);

    & ${SIcon} {
      opacity: 0.7;
    }
  }

  & ${SIcon} {
    right: auto;
    left: 0;
    display: ${({ icon }) => (icon ? "block" : "none")};
    mask: ${({ icon }) => (icon ? `url(${icon}) center no-repeat` : "none")};
    mask-size: 100%;
    background-color: rgb(255, 255, 255);
    transition: 0.15s ease;
  }
`;
const ConnectButton = (props) => (<SConnectButtonContainer>
    <SConnectButton {...props} type="button" disabled={props.disabled} icon={props.icon}>
      <SHoverLayer />
      <SIcon />
      {props.connected === false ? "Connect" : "Connected"}
    </SConnectButton>
  </SConnectButtonContainer>);
ConnectButton.defaultProps = {
    disabled: false,
    icon: null,
};
export default ConnectButton;
