// NEXT
import Image from "next/image";

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
          <Image src={avatar} alt="Avatar gris" width="40" height="40" />
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
