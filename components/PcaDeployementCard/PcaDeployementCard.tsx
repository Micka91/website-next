interface IProps {
  title: string;
  list: string[];
}

const PcaDeployementCard = ({ title, list }: IProps) => {
  return (
    <div className="pcaDeployement__card">
      <h3 className="pcaDeployement__cardTitle">{title}</h3>
      <ul className="pcaDeployement__listItem">
        {list?.map((item, index) => (
          <li key={index} className="pcaDeployement__item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PcaDeployementCard;
