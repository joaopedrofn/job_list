import Card from "../../../components/Card";

const JobCard = ({ job, onClick }) => {
  const handleClick = () => onClick(job);
  return (
    <Card onClick={handleClick}>
      <div className="flex gap-2 items-center">
        <img
          src={job.company?.logo}
          alt={job.company?.name}
          className="w-16 h-16 object-cover"
        />
        <div className="flex flex-col">
          <span className="font-semibold">{job.title}</span>
          <span className="text-slate-700 text-sm">{job.company?.name}</span>
          <span className="text-slate-700 flex items-center text-sm">
            <span className="material-symbols-outlined text-sm">
              location_on
            </span>
            {job.locations[0].location.text} {job.locations.length > 1 && 'and more'}
          </span>
        </div>
      </div>
    </Card>
  );
};

export default JobCard;
