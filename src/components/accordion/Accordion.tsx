import type { ReactNode } from "react";

interface AccordionItemType {
  title: string;
  content: string;
}

interface AccordionProps {
  children: ReactNode;
}

export const AccordionItem = ({
  title,
  content,
}: AccordionItemType) => {
  return (
    <>
      <div>{title}</div>
      <div>{content}</div>
    </>
  );
};

export const Accordion = ({ children }: AccordionProps) => {
  return (
    <>
      {children}
    </>
  );
};