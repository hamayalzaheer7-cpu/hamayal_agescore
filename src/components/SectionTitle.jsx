function SectionTitle(props) {
  return (
    <div className="mb-4">
      <small className="text-primary fw-bold">
        {props.subtitle}
      </small>

      <h2 className="fw-bold mt-2">
        {props.title}
      </h2>
    </div>
  );
}

export default SectionTitle;
