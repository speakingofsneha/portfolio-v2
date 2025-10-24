import { cn } from '../../lib/utils';

export default function ProjectTitle(props) {
  return (
    <div
      className={cn(
        'col-span-full md:col-end-3 md:top-[2em] text-[#4B4A4A]',
        props.notSticky ? '' : 'md:sticky'
      )}
    >
      <h1 className="mb-1 body">{props.children}</h1>
      <p className="caption text-[#4B4A4A] opacity-60" dangerouslySetInnerHTML={{ __html: props.role }}></p>
    </div>
  );
}
