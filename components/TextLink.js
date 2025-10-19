import Link from 'next/link';
export default function TextLink(props) {
  return (
    <>
      <a
        className="cursor-pointer border-dotted hover:bg-[#98A6D2]/10 px-[2px] hover:text-[#98A6D2] pt-[2px] dotted-underline"
        target={props.sameTab ? '' : '_blank'}
        rel="noreferrer"
        href={props.link}
      >
        {props.children}
      </a>
      <sup
        className={`${
          props.super ? 'font-mono' : 'font-sans'
        } leading-[0] text-[10px] font-light text-[#98A6D2]`}
      >
        {props.super ? props.super : '↗'}
      </sup>
    </>
  );
}
