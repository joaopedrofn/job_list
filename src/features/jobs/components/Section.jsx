const Section = ({ content, title }) => {
  return (
    <div className="mt-2 mb-4">
      <h1 className="font-bold mb-4 text-xl">{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default Section;
