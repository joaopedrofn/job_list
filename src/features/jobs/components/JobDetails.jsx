import Button from "../../../components/Button";
import Section from "./Section";

const JobDetails = ({ job, onClose }) => {
  return (
    <div
      className={`
        flex-1
        ${!job ? "max-w-0" : "max-w-full"} 
        transition-all 
        ${!job ? "duration-0" : "duration-500"}
        overflow-auto 
        bg-white 
        rounded-md 
        shadow-md
        md:relative
        h-full
        absolute
      `}
    >
      <img
        src={job?.company?.cover}
        alt="Cover"
        className="w-full h-24 object-cover"
      />
      <button
        onClick={onClose}
        className="
          z-10
          absolute
          top-2
          right-2
          bg-white
          rounded-full
          bg-opacity-70
          p-1
          flex
          items-center
        "
      >
        <span className="material-symbols-outlined">close</span>
      </button>
      <div className="px-4 pb-2" style={{ marginTop: "-2.5rem" }}>
        <div className="flex items-end gap-2">
          <img
            src={job?.company?.logo}
            alt={job?.company?.name}
            className="w-20 h-20 object-cover"
          />
          <span className="font-semibold text-xl">{job?.title}</span>
        </div>
        {job?.locations?.map(({ location }) => (
          <span
            key={location.text}
            className="text-slate-700 flex items-center text-sm"
          >
            <span className="material-symbols-outlined text-sm">
              location_on
            </span>
            {location.text}
          </span>
        ))}
        <div>
          <span className="text-slate-700 flex items-center text-sm">
            {job?.employment_type} - {job?.experience}
          </span>
          <span className="text-slate-700 text-sm">
            <a
              href={job?.company?.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              {job?.company?.name}{" "}
              <span className="material-symbols-outlined text-sm">
                arrow_outward
              </span>
            </a>{" "}
            - {job?.company?.industry}
          </span>
        </div>
        <div className="flex gap-2 my-2">
          <Button
            link
            href={job?.urls?.apply}
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply
          </Button>
          <Button
            variant="outlined"
            link
            href={job?.urls?.ad}
            target="_blank"
            rel="noopener noreferrer"
          >
            Job Ad
          </Button>
        </div>
        <Section title="About the job" content={job?.descr} />
        <Section title="Skills" content={job?.skills} />
        <div className="flex gap-2 my-2">
          <Button
            link
            href={job?.urls?.apply}
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply
          </Button>
          <Button
            variant="outlined"
            link
            href={job?.urls?.ad}
            target="_blank"
            rel="noopener noreferrer"
          >
            Job Ad
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
