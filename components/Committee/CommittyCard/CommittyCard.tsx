/* eslint-disable @next/next/no-img-element */

interface IProps {
  title?: string;
  name: string;
  places?: string;
}

const avatar = "/images/teams/Avatar.svg";

const CommittyCard = ({ title, name, places }: IProps) => {
  return (
    <>
      {title && <h3 className="commitee__cardTitle">{title}</h3>}
      <div className="commitee__card">
        <div>
          <img src={avatar} alt="" />
        </div>
        <div>
          <h4 className="commitee__name">{name}</h4>
          {places && <p className="commitee__places">{places}</p>}
        </div>
      </div>
    </>
  );
};

export default CommittyCard;
