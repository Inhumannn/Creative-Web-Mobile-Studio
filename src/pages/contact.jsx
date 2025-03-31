import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";

function Contact() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Page en cours de création</AccordionTrigger>
        <AccordionContent>
          Merci de patienter, cette page sera crée sous peu...
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
export default Contact;
