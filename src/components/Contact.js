const Contact= ()=>{
  return (
    <div>
      <h1 className="font-bold text-center text-3xl p-4 m-4">This is Contact us page</h1>
      <form>
        <input type="text"className="border border-black p-2 m-2" placeholder="name"/>
        <input type="text"className="border border-black p-2 m-2" placeholder="message"/>
        <button className="border border-black p-2 m-2 bg-gray-100 rounded-lg">Submit</button>
      </form>
    </div>
  )
};

export default Contact;