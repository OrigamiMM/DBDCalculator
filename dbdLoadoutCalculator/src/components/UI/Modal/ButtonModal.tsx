import React from "react";
import { DisplayCard, DisplayCardBreak } from "..";
import ReactDOM from "react-dom";

type Props = {
  modalTitle: string;
  children: React.ReactNode;
  onButtonClick: () => void;
};

type backProps = {
  backgroundClick: () => void;
};

const Backdrop = ({ backgroundClick }: backProps) => {
  return (
    <div
      onClick={backgroundClick}
      className="fixed top-0 left-0 w-full h-[100vh] z-50 bg-black/50"
    ></div>
  );
};

const ModalOverlay = ({ modalTitle, children, onButtonClick }: Props) => {
  return (
    <DisplayCard
      className="fixed z-50 top-[50vh] left-[50vw] -translate-x-1/2 -translate-y-1/2"
      title={modalTitle}
    >
      <DisplayCardBreak />
      {children}
      <footer className="flex justify-end">
        <button className="bg-dark px-4 py-2 rounded-lg" onClick={onButtonClick} type="button">Close</button>
      </footer>
    </DisplayCard>
  );
};

export const ButtonModal = (props: Props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop backgroundClick={props.onButtonClick} />,
        document.getElementById("backdrop-root")!
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          onButtonClick={props.onButtonClick}
          modalTitle={props.modalTitle}
        >
          {props.children}
        </ModalOverlay>,
        document.getElementById("overlay-root")!
      )}
    </>
  );
};
