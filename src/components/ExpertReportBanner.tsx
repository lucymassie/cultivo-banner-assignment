'use client'
import { BannerContent } from "@/components/BannerContent";
import { useState } from "react";
import { BannerButton } from "./BannerButton";
import { BannerTitle } from "./BannerTitle";
import { ContactFormDialog } from "./ContactFormDialog";
import './ExpertReportBanner.css';

export const ExpertReportBanner = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  const onButtonClick = () => {
    setShowContactForm(!showContactForm);
  }
  const onCloseDialog = () => {
    setShowContactForm(false);
  }

  const onFormSubmitted = (message: string) => {
    // Some action to send the message where it needs to go (below console log to that method doesn't have ununsed param)
    console.log(message);
    setFormSubmitted(true);
  }

  return (
    <>
      <div className={'expert-report-banner'}>
        <BannerTitle formSubmitted={formSubmitted}/>
        <div className={'expert-report-main-content'}>
          <BannerContent formSubmitted={formSubmitted} />
          <BannerButton formSubmitted={formSubmitted} onClick={onButtonClick} />
        </div>
      </div>
      {showContactForm &&  <ContactFormDialog open={showContactForm} onClose={onCloseDialog} onFormSubmitted={onFormSubmitted}/>}
    </>
  )
}