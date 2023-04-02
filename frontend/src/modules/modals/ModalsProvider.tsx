import {
  ModalsProvider as MantineModalsProvider,
  ModalsProviderProps as MantineModalsProviderProps,
} from "@mantine/modals";
import { FunctionComponent, useMemo } from "react";
import { ModalComponent, StaticModals } from "./WithModal";

const DefaultModalProps: MantineModalsProviderProps["modalProps"] = {
  centered: true,
  styles: {
    modal: {
      maxWidth: "100%",
    },
  },
};

const ModalsProvider: FunctionComponent = ({ children }) => {
  const modals = useMemo(
    () =>
      StaticModals.reduce<Record<string, ModalComponent>>((prev, curr) => {
        prev[curr.modalKey] = curr;
        return prev;
      }, {}),
    []
  );

  return (
    <MantineModalsProvider modalProps={DefaultModalProps} modals={modals}>
      {children}
    </MantineModalsProvider>
  );
};

export default ModalsProvider;
