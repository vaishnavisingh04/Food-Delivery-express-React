

const Error = ()=>{
  const err = useRouteError();
  return (
    <div>
      <h1>Error page handled Sucessfully</h1>
      <h2>
        {err.status}:{err.statusText};
      </h2>
    </div>
  )
};

export default Error;