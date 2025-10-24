import GridContainer from '../GridContainer';
import TextLink from '../TextLink';
import { useRouter } from 'next/router';
import CardVideo from '../CardVideo';

export default function ProjectDetails(props) {
  const roles = props.role.map((role, index) => (
    <p className="text-[#4B4A4A] body" key={index}>
      {role}
    </p>
  ));

  const collaborators = props.collaborators.map((people, index) => (
    <p className="text-[#4B4A4A] body" key={index}>
      {people}
    </p>
  ));

  let tools;
  if (props.tools) {
    tools = props.tools.map((tool, index) => (
      <p key={index} className="text-[#4B4A4A] body">
        {tool}
      </p>
    ));
  }

  return (
    <>
      <div className="col-start-1 col-end-7 md:col-start-3 md:col-end-6 md:mb-8">
        <p className="text-[#4B4A4A]/40 caption">what i did</p>
        {roles}
      </div>
      <div className="col-start-7 col-end-13 md:col-start-6 md:col-end-8 md:mb-8">
        <p className="text-[#4B4A4A]/40 caption">
          {props.replaceCollab ? props.replaceCollab : 'with who'}
        </p>
        {collaborators}
      </div>
      <div className="col-start-1 col-end-7 mb-8 md:col-start-9 md:col-end-10">
        <p className="text-[#4B4A4A]/40 caption">when</p>
        <p className="text-[#4B4A4A] body">{props.duration}</p>
      </div>
      {props.tools && (
        <div className="col-start-7 col-end-13 mb-8 md:col-start-12 md:col-end-13">
          <p className="text-[#4B4A4A]/40 caption">with</p>
          {tools}
        </div>
      )}
    </>
  );
}