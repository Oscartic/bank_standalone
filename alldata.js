const AllData = () => {
  return (
    <>
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <h1>All Data</h1>
          { JSON.stringify(ctx) }
        </div>
      </div>
    </div>
    </>
  );
}
