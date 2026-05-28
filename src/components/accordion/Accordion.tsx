import './Accordion.css'
import { useState, Children, cloneElement, isValidElement, type ReactNode } from "react";

interface AccordionItemType {
  title: string;
  content: string;
  index?: number; 
}

interface AccordionProps {
  children: ReactNode;
}


export const AccordionItem = ({ title, content, index }: AccordionItemType) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-header">
      <button onClick={() => setIsOpen(prev => !prev)} className="accordion-btn">
        <span className='accordion-title'>
          <span className='accordion-index'>{String(index).padStart(2, '0')}</span> {title}
        </span>
        <span className={`accordion-arrow ${isOpen ? 'accordion-arrow--open' : ''}`}>→
</span>
      </button>
      {isOpen && (
        <div className="accordion-content">{content}</div>
      )}
    </div>
  );
};

export const Accordion = ({ children }: AccordionProps) => {
  return (
    <>
      {Children.map(children, (child, i) =>
        isValidElement<AccordionItemType>(child)
          ? cloneElement(child, { index: i + 1 })
          : child
      )}
    </>
  );
};