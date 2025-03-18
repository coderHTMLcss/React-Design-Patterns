import { useState } from "react";
import { ComponentConfig } from "../utils/ComponentFactory";

export const useConfiguration = () => {
  const [isOpen, setIsOpen] = useState(false);

  const buttonConfig: ComponentConfig = {
    type: "button",
    props: {
      label: "Click Me",
      onClick: () => setIsOpen(true),
      disabled: false,
    },
  };

  const cardConfig: ComponentConfig = {
    type: "card",
    props: {
      title: "Card Information",
      content: "Content Card Information",
      footer: "Footer Card",
    },
  };

  const modalConfig: ComponentConfig = {
    type: "modal",
    props: {
      isOpen,
      onClose: () => setIsOpen(false),
      header: "Modal Title",
      content: "Modal Content",
      footer: "Modal Footer",
    },
  };

  return [buttonConfig, modalConfig, cardConfig];
};
