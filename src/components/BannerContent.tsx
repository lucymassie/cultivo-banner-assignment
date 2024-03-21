import './BannerContent.css';
type BannerContentProps = {
  formSubmitted: boolean
}

export const BannerContent = ({formSubmitted}: BannerContentProps) => {
  return formSubmitted ?
  (
    <div className={'banner-content'}>
      <p>We received your message. Please feel free to get in touch again if you would like to include any further details or ask any other questions. We are eager to assist you.</p>
    </div>
  ) : (
    <div className={'banner-content'}>
      <div>
        <p>Please get in touch if you would like an expert report for this site. Benefits include:</p>
      </div>
      <div className={'bullet-list'}>
        <li>Key insights from our expert team</li>
        <li>An in-depth analysis of the site</li>
        <li>Recommendations of next steps to take</li>
      </div>
    </div>
  )
}