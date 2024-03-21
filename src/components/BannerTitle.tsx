import './BannerTitle.css';

type BannerTitleProps = {
  formSubmitted: boolean
}

export const BannerTitle = ({formSubmitted}: BannerTitleProps) => {
  const mainTitle = `Expert Report ${formSubmitted ? 'Requested' : ''}`;
  return (
    <div className={'banner-title'}>
      <img src='icons8-analyze-64.png'></img>
      {formSubmitted == false && <p>Next step</p>}
      <div className={'main-title'}>{mainTitle}</div>
    </div>
  )
}