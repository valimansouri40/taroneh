export default function TimesIcon({className, variant}) {

  if (variant === 3) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="11.575" height="11.575" viewBox="0 0 11.575 11.575">
        <g id="Group_8147" data-name="Group 8147" transform="translate(-603.448 -148.448)">
          <line id="Line_237" data-name="Line 237" y2="13.37" transform="translate(613.962 149.509) rotate(45)" fill="none" stroke="#565656" strokeLinecap="round" strokeWidth="1.5"/>
          <line id="Line_238" data-name="Line 238" y2="13.37" transform="translate(604.509 149.509) rotate(-45)" fill="none" stroke="#565656" strokeLinecap="round" strokeWidth="1.5"/>
        </g>
      </svg>
    )
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className={className}><path d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"/></svg>
  )
}
